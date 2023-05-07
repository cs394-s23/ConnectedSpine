import {
  BackButton,
  Background,
  Content,
  NextButton,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer
} from '../styles';
import Header from '../components/Header';
import './TermsAgreement.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAgreement = () => {
  // const myCheckbox = document.getElementById("myCheckbox");
  // const myNextButton = document.getElementById("myButton");
  let navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  function handleCheckboxClick() {
    setIsValid(!isValid);
  }

  const handleBackClick = () => {
    navigate('/zipcode');
  };
  const handleNextClick = () => {
    if (isValid) {
      navigate('/IntroQ2');
    } else {
    }
  };

  // myCheckbox.addEventListener("click", function() {
  //   myButton.disabled = !myCheckbox.checked;
  // });

  return (
    <Background image="../../public/Pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <h3>Section 1</h3>
            {/* Fix line below maybe */}
            <h2 style={{ 'font-weight': 'lighter' }}>Basic Info</h2>
            <h1>Terms of Service</h1>
          </LeftContent>
          <RightContent>
            <p>
              Before answering our questionnaire, please read the{' '}
              <b>Terms of Service.</b>
            </p>
            <br /> <br />
            <p>
              Remember that: <br /> <br />
              The results of this assessmenet are not a diagnosis. The
              assessment is for informational purposes and is not a qualified
              medical opinion. <br /> <br />
              Do not use in emergencies. In case of health emergency, call your
              local emergency number immediately. <br /> <br />
              Your data is safe. Information that you provide is anonymous and
              not shared with anyone. <br /> <br />
            </p>
            <label>
              <input
                type="checkbox"
                checked={isValid}
                onClick={handleCheckboxClick}
              />
              <span>
                I have read and accept the{' '}
                <b>
                  <u>Terms of Service</u>
                </b>{' '}
                and{' '}
                <b>
                  <u>Privacy Policy</u>
                </b>
                .
              </span>
            </label>
            <br />
            <BackNextButtonContainer>
              <BackButton onClick={handleBackClick}>Back</BackButton>
              <NextButton isValid={isValid} onClick={handleNextClick}>
                Next
              </NextButton>
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
      </Content>
    </Background >
  );
};
export default TermsAgreement;