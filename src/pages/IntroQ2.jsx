import {
  BackButton,
  Background,
  Content,
  NextButton,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer,
} from '../styles';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUsers } from 'react-icons/fa';
import { IconContext } from 'react-icons';
// import "bootstrap-icons/font/bootstrap-icons.css";

const Card = ({ myselfButton, someoneElseButton, myselfButtonClick, someoneElseButtonClick }) => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-md-6">
          <div class="card card-square" style={{ height: '200px', backgroundColor: myselfButton ? '#CBC3E3' : null }}>
            <div class="card-body d-flex flex-column justify-content-end">
            <IconContext.Provider value={{ size: '2em', color: myselfButton ? '#000' : '#888' }}>
                <div>
                  <button class="btn btn-light btn-large" onClick={myselfButtonClick}>
                  <span><FaUser /></span> Myself
                  </button>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card-square" style={{ height: '200px', backgroundColor: someoneElseButton ? '#CBC3E3' : null }}>
            <div class="card-body d-flex flex-column justify-content-end">
            <IconContext.Provider value={{ size: '2em', color: someoneElseButton ? '#000' : '#888' }}>
                <div>
                  <button class="btn btn-light btn-large" onClick={someoneElseButtonClick}>
                    <span><FaUsers /></span> Someone Else
                  </button>
                </div>
              </IconContext.Provider>
              {/* <button class="btn btn-light btn-large" onClick={someoneElseButtonClick}>
                {' '}
                Someone Else
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const IntroQ2 = () => {
  let navigate = useNavigate();

  const [myselfButton, setMyselfButton] = useState(false);
  const [someoneElseButton, setSomeoneElseButton] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const myselfButtonClick = () => {
    setMyselfButton(prevMyselfButton => !prevMyselfButton);
    setSomeoneElseButton(false); // reset the other button state
  }
  
  const someoneElseButtonClick = () => {
    setSomeoneElseButton(prevSomeoneElseButton => !prevSomeoneElseButton);
    setMyselfButton(false); // reset the other button state
  }
  
  useEffect(() => {
    if ((myselfButton && !someoneElseButton) || (!myselfButton && someoneElseButton)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [myselfButton, someoneElseButton]);

  const handleBackClick = () => {
    navigate('/termsagreement');
  };
  const handleNextClick = () => {
    if (isValid) {
      navigate('/IntroQ3');
    } else {
    }
  };
  return (
    <Background image="../../public/Pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <h3>Section 1</h3>
            <h2>Basic Info</h2>
            <h1>Who are you answering this questionnaire for?</h1>
          </LeftContent>
          <RightContent>
            <Card myselfButton={myselfButton} someoneElseButton={someoneElseButton} myselfButtonClick={myselfButtonClick} someoneElseButtonClick={someoneElseButtonClick} />
            <BackNextButtonContainer>
              <BackButton onClick={handleBackClick}>Back</BackButton>
              <NextButton isValid={isValid} onClick={handleNextClick}>
                Next
              </NextButton>
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
      </Content>
    </Background>
  );
};
export default IntroQ2;
