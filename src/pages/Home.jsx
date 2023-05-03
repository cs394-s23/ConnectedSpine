import './Home.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <div className="homepage">
      <div className="title-text">
        <h1>We connect you to the care you need.</h1>
        <p>
          ConnectedSpine uses the knowledge of spine care specialists to guide
          you to the right providers.
        </p>
      </div>
      <div className="instructions">
        <p>Experiencing pain or discomfort in your back or neck?</p>
        <p>
          <b>Take our 5 min assessment.</b>
        </p>
      </div>
      <Button className="start-assessment-button" variant="dark">
        Start Assessment
      </Button>{' '}
    </div>
  );
};

export default Home;
