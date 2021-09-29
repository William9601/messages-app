import './Message.css';
import moment from 'moment';

const date = moment().format('D MMMM YYYY');

const Message = ({ messages, messageEdit }) => {
  const fiveMins = 300000;
  //const timePassed = new Date() - new Date(el.createdAt) > fiveMins;
  const canEdit = (el) => {
    console.log('can', el);
    return new Date() - el.timestamp > fiveMins;
  };

  return (
    <div className="message-container">
      <p className="message-date">{date}</p>
      <div>
        {messages.map((el) => (
          <div className="message" key={el.id}>
            <div className="profile-pic"></div>
            <div>
              <h2>{el.userName}</h2>
              <p>{el.content}</p>
              <button
                onClick={(e) => messageEdit(el.id)}
                className="edit-button"
                onMouseEnter={() => canEdit(el)}
                disabled={new Date() - el.timestamp > fiveMins}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
