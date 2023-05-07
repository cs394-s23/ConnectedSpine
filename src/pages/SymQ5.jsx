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

const SymQ5 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    'Stand Up',
    'Sit Down',
    'Lean Forward',
    'Lean Back',
    'Am Moving',
    'Am At Rest',
    'None of the Above',
  ];

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
    navigate('/SymQ4');
  };

  const handleNextClick = () => {
    if (isValid) {
      navigate('/SymQ6');
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
            <h1>How does the dull, aching pain change?</h1>
          </LeftContent>
          <RightContent>
            Choose all that apply. I get some relief from the sensation when
            I...
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              {options.map((option) => (
                <div key={option}>
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
export default SymQ5;
