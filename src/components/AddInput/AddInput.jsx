import { editMessageApi, addMessageApi } from '../../services/apiServices';

const AddInput = ({
  content,
  setContent,
  edit,
  userName,
  setMessages,
  messageId,
  setEdit,
}) => {
  const addMessage = (e) => {
    e.preventDefault();
    addMessageApi(userName, content).then(() => {
      fetchMessages();
    });
    setContent('');
  };

  const fetchMessages = async () => {
    const res = await fetch('http://localhost:3000/messages');
    const data = await res.json();
    setMessages(data);
  };

  const editMessage = (e) => {
    e.preventDefault();
    editMessageApi(userName, content, messageId).then(() => {
      fetchMessages();
    });
    setContent('');
    setEdit(false);
  };

  return (
    <div className="message-input">
      <input
        className="input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing your message here..."
        data-testid="MessageInput"
      />
      <button
        className="modal-send-button"
        onClick={edit === false ? addMessage : editMessage}
        data-testid="button"
      >
        {edit === false ? 'Send' : 'Update'}
      </button>
    </div>
  );
};

export default AddInput;
