import React from 'react';
import './ChatDisplay.css';

class ChatDisplay extends React.Component {
  render() {
    return(
      <div className="chat-display">
        {this.props.messagesProps.map(message => {
          return (
            <div>{message.author}: {message.message}</div>
          );
        })}
      </div>
    );
  }
}
export default ChatDisplay;
