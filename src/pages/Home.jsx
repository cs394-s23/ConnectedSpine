import './Home.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData, useParams, useNavigate, Navigate } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div className="title-text">
              <h1>We connect you to the care you need.</h1>
              <p >
                ConnectedSpine uses the knowledge of spine care specialists to guide
                you to the right providers.
              </p>
            </div>
            <div className="instructions">
              <p className="text-muted">Experiencing pain or discomfort in your back or neck?</p>
              <p ><b>Take our 5 min assessment.</b></p>

            </div>
            <Button className="btn btn-light start-assessment-button" onClick={() => navigate('/zipcode')}>
              Start Assessment
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
