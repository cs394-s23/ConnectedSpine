import './ZipCode.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const ZipCode = () => {
    return (
        <div className="container-fluid">
            <div class="row left-row ">
                <div className="col-md-6  text-start">
                    <h1 className="title">Hi there! Before we begin, please enter your zipcode.</h1>
                    <form className="form">
                        <div className="form-group mb-2">
                            <label for="zipcode" class="sr-only font-weight-bold">Zipcode</label>
                            <input type="text" class="form-control" id="zipcode" />
                        </div>
                        <div className="form-group mb-2">
                            <button type="submit" class="btn btn-light ">Next</button>
                        </div>

                    </form>
                </div>

            </div >
        </div >

    );
};


export default ZipCode;
