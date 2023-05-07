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

const SymQ7 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const options = ['Yes', 'No', 'Not Sure'];
  const options2 = ['Yes', 'No', 'Not Sure'];

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

  const handleOptionClick2 = (option) => {
    const index = selectedOptions2.indexOf(option);
    if (index > -1) {
      // remove option if already selected
      setSelectedOptions2(selectedOptions2.filter((item) => item !== option));
    } else {
      // add option if not already selected
      setSelectedOptions2([...selectedOptions2, option]);
    }
  };

  let navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

  const handleBackClick = () => {
    navigate('/SymQ6');
  };

  const handleNextClick = () => {
    if (isValid) {
      navigate('/SymQ8');
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
            <h1>Regarding the tightness...</h1>
          </LeftContent>
          <RightContent>
            Does it feel like a pulled muscle?
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
            <br />
            {selectedOptions.includes('Yes') ? (
              <div>
                Does it get better with anti-inflammatory pain medication, such
                as Tylenol or Advil?
                {options2.map((option) => (
                  <SelectButton
                    onClick={() => handleOptionClick2(option)}
                    style={{
                      marginBottom: '20px',
                      padding: '10px 20px',
                      display: 'inline-block',
                      backgroundColor: selectedOptions2.includes(option)
                        ? 'rgba(128, 0, 128, 0.8)'
                        : null,
                      marginRight: '5px', // add margin-right to create space
                    }}
                  >
                    {option}
                  </SelectButton>
                ))}
              </div>
            ) : null}
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
export default SymQ7;
