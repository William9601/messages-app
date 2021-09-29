import './MessageList.css';
import Message from '../Message/Message';

const MessageList = ({ messages, messageEdit }) => {
  return (
    <div className="message-list-container">
      <div className="message-container">
        <Message messages={messages} messageEdit={messageEdit} />
      </div>
    </div>
  );
};

export default MessageList;
