import {
  BackButton,
  Background,
  Content,
  NextButton,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer,
  SelectButton,
} from '../styles';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
// import "bootstrap-icons/font/bootstrap-icons.css";

const SymQ6 = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const questions = [
    'Not at all difficult (Able to continue daily activities)',
    'Somewhat difficult (Able to work but not able to exercise)',
    'Very difficult (Cancelled work or other activities)',
    'Extremely difficult (Confined to bed or couch)',
  ];

  const handleQuestionSelect = (question) => {
    if (selectedQuestion === question) {
      setSelectedQuestion('');
    } else {
      setSelectedQuestion(question);
    }
  };

  let navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

  const handleBackClick = () => {
    navigate('/SymQ5');
  };

  const handleNextClick = () => {
    if (isValid) {
      navigate('/SymQ7');
    } else {
    }
  };

  useEffect(() => {
    if (selectedQuestion) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedQuestion]);

  return (
    <Background image="../../public/Pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <h3>Section 2</h3>
            <h2>Symptom Details</h2>
            <h1>
              How difficult has the dull, aching pain made your day-to-day
              activities?
            </h1>
          </LeftContent>
          <RightContent>
            <div>
              {questions.map((question) => (
                <div
                  key={question}
                  onClick={() => handleQuestionSelect(question)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 10,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      border: '2px solid black',
                      marginRight: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor:
                        selectedQuestion === question
                          ? 'purple'
                          : 'transparent',
                    }}
                  >
                    {selectedQuestion === question && (
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          backgroundColor: 'black',
                        }}
                      />
                    )}
                  </div>
                  <div>{question}</div>
                </div>
              ))}
            </div>
            <BackNextButtonContainer>
              <BackButton onClick={handleBackClick}>Back</BackButton>
              <NextButton onClick={handleNextClick} isValid={isValid}>
                Next
              </NextButton>
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
      </Content>
    </Background>
  );
};
export default SymQ6;
