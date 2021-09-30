import './MessageModal.css';
import MessageList from '../../MessageList/MessageList';
import { useState, useEffect } from 'react';
import AddInput from '../../AddInput/AddInput';

const MessageModal = ({ userName }) => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const [edit, setEdit] = useState(false);
  const [messageId, setMessageId] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await fetch('http://localhost:3000/messages');
    const data = await res.json();
    setMessages(data);
  };

  const messageEdit = (id) => {
    messages.map((el) => {
      if (el.id === id) {
        setContent(el.content);
        setMessageId(id);
        setEdit(true);
      }
    });
  };

  return (
    <div className="message-modal-container">
      <section className="message-modal-header">
        <h2>{userName}</h2>
      </section>
      <div className="message-modal-content">
        <section>
          <MessageList messages={messages} messageEdit={messageEdit} />
        </section>
      </div>
      <AddInput
        content={content}
        setContent={setContent}
        edit={edit}
        userName={userName}
        setMessages={setMessages}
        messageId={messageId}
        setEdit={setEdit}
      />
    </div>
  );
};

export default MessageModal;
