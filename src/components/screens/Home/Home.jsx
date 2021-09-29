import './Home.css';
import MessageModal from '../MessageModal/MesageModal';

const Home = ({ userName }) => {
  return (
    <div className="home">
      <div className="home-body">
        <MessageModal userName={userName} />
      </div>
    </div>
  );
};

export default Home;
