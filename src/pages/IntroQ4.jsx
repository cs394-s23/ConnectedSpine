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
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
// import "bootstrap-icons/font/bootstrap-icons.css";

const IntroQ4 = () => {
  let navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleBackClick = () => {
    navigate('/IntroQ3');
  };

  const handleNextClick = () => {
    if (isValid) {
      navigate('/IntroQ5');
    } else {
    }
  };

  useEffect(() => {
    if (selectedItems.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedItems]);

  return (
    <Background image="../../public/Pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <h3>Section 1</h3>
            <h2>Basic Info</h2>
            <h1>What brings you here today?</h1>
          </LeftContent>
          <RightContent>
            <div>
              <label style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  value="option1"
                  checked={selectedItems.includes('option1')}
                  onChange={handleChange}
                />
                A new pain or sensation in the back and/or neck
              </label>
              <label style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  value="option2"
                  checked={selectedItems.includes('option2')}
                  onChange={handleChange}
                />
                Back and/or neck pain that has been chronic or occuring for some
                time
              </label>
              <label style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  value="option3"
                  checked={selectedItems.includes('option3')}
                  onChange={handleChange}
                />
                A potential emergency or urgent care visit
              </label>
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
export default IntroQ4;
