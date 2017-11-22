import React from 'react';

class ChatInput extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      message: ''
    }
    this.sendUsername = this.sendUsername.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendUsername(data) {
    this.setState({
      username: data.target.value
    });
  }
  sendMessage(data) {
    this.setState({
      message: data.target.value
    })
  }
  handleSubmit(event) {
    // this.props.usernameProps(this.state.username);
    this.props.messageProps(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input value={this.state.username} onChange={this.sendUsername} className="form-control" placeholder="Name"></input>
        </div>
        <div className="form-group">
          <textarea value={this.state.message} onChange={this.sendMessage} class="form-control" rows="5" placeholder="Message"></textarea>
        </div>
          <button onClick={this.props.buttonProps} className="btn btn-primary">Send</button>
      </form>
    );
  }
}

export default ChatInput;
