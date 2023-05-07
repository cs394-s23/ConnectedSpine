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

const SymQ9 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Yes', 'No', 'Not Sure'];

  const handleOptionClick = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index > -1) {
      // remove option if already selected
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // add option if not already selected
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  let navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

  const handleBackClick = () => {
    navigate('/SymQ8');
  };

  const handleNextClick = () => {
    if (isValid) {
      navigate('/SymQ10');
    } else {
    }
  };

  useEffect(() => {
    if (selectedOptions.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedOptions]);

  return (
    <Background image="../../public/Pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <h3>Section 2</h3>
            <h2>Symptom Details</h2>
            <h1>Have you had similar pain before?</h1>
          </LeftContent>
          <RightContent>
            <div>
              {options.map((option) => (
                <SelectButton
                  onClick={() => handleOptionClick(option)}
                  style={{
                    marginBottom: '20px',
                    padding: '10px 20px',
                    display: 'inline-block',
                    backgroundColor: selectedOptions.includes(option)
                      ? 'rgba(128, 0, 128, 0.8)'
                      : null,
                    marginRight: '5px', // add margin-right to create space
                  }}
                >
                  {option}
                </SelectButton>
              ))}
            </div>{' '}
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
export default SymQ9;
