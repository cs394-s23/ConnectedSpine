import './ZipCode.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  useLoaderData,
  useParams,
  NavLink,
  useNavigate,
  Navigate,
} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const ZipCode = () => {
  const navigate = useNavigate();
  return (
    // <div className="container-fluid">
    <div className="zip-code-section">
      <div className="row left-row ">
        <div className="col-md-6  text-start">
          <h1 className="title">
            Hi there! Before we begin, please enter your zipcode.
          </h1>
          <form className="form">
            <div className="form-group mb-2">
              <label for="zipcode" className="sr-only font-weight-bold">
                Zipcode
              </label>
              <input type="text" className="form-control" id="zipcode" />
            </div>
            <div className="back-next-buttons">
              <NavLink to="/">
                <button type="submit" class="btn btn-light ">
                  Back
                </button>
              </NavLink>
              <button type="submit" className="btn btn-light ">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ZipCode;
