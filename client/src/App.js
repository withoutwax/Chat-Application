import React from 'react';
import io from "socket.io-client";
import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: '',
      messages: []
    };

    this.socket = io('localhost:3001');

    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });
    const addMessage = data => {
      var messagesArray = this.state.messages;
      messagesArray = messagesArray.concat(data);
      this.setState({messages: messagesArray});
    }
  }

  sendMessage = data => {
    this.setState({
      username: data.username,
      message: data.message
    }, () => {
      console.log(this.state);
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      });
    });
  }


  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <ChatDisplay messagesProps={this.state.messages}/>
            {/* <div>
              {this.state.messages.map(message => {
                return (
                  <div>{message.author}: {message.message}</div>
                );
              })}
            </div> */}
          </div>
          <div className="card-body">
            <ChatInput messageProps={this.sendMessage} buttonProps={this.sendChat}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
