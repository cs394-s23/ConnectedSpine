import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../helpers/Contexts';
import Header from './Header';
import TermsAgreement from './BasicInfo/TermsAgreement';
import Q2 from './BasicInfo/Q2';
import Q3 from './BasicInfo/Q3';
import Questions from '../helpers/Questions';
import Options from './Options';
import styled from 'styled-components';
import {
  BackButton,
  Background,
  Content,
  NextButton,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer,
  Bold,
} from '../styles';

const Section = styled.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 100;
  line-height: 24px;
  text-transform: uppercase;
`;

const Prompt = styled.h1`
  margin-top: 20px;
  max-width: 80%;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
`;

const SubQuestion = styled.p`
  /* margin-top: -40px;
  margin-bottom: 40px; */
  max-width: 80%;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Questionaire = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [currSubQuestion, setCurrSubQuestion] = useState(0);

  const {
    AssessmentState,
    setAssessmentState,
    isValid,
    setIsValid,
    selectedOptions,
    setSelectedOptions,
    answers,
    setAnswers,
  } = useContext(AssessmentContext);

  const handleBackClick = () => {
    if (currQuestion === 0) {
      setAssessmentState('zipcode');
    } else {
      if (!Questions[currQuestion].sub_questions || currSubQuestion == 0) {
        setCurrQuestion(currQuestion - 1);
        if (Questions[currQuestion].sub_questions) {
          setCurrSubQuestion(Questions[currQuestion].sub_questions.length - 1);
        } else {
          setCurrSubQuestion(0);
        }
      } else {
        setCurrSubQuestion(currSubQuestion - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (
      currQuestion === Questions.length - 1 &&
      currSubQuestion === Questions[currQuestion].sub_questions.length - 1
    ) {
      setAssessmentState('result');
    } else if (isValid) {
      setIsValid(false);
      if (
        !Questions[currQuestion].sub_questions ||
        currSubQuestion === Questions[currQuestion].sub_questions.length - 1
      ) {
        var qid = Questions[currQuestion].qId;
        // var currentAnswer = selectedOptions;
        const currentAnswer = { ...answers, [qid]: selectedOptions };
        console.log('selected options', selectedOptions);
        console.log('qid', qid);
        setAnswers(currentAnswer);
        setCurrQuestion(currQuestion + 1);
        setCurrSubQuestion(0);
        setSelectedOptions([]);
      } else {
        var qid = Questions[currQuestion].qId;
        // var currentAnswer = selectedOptions;
        const currentAnswer = { ...answers, [qid]: selectedOptions };
        console.log('selected options', selectedOptions);
        console.log('qid', qid);
        setAnswers(currentAnswer);
        setCurrSubQuestion(currSubQuestion + 1);
        setSelectedOptions([]);
      }
    }
  };

  useEffect(() => {
    console.log('answers:', answers);
  }, [answers]);

  return (
    <Background image="../../pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <Section>Section {Questions[currQuestion].section}</Section>
            <Name>{Questions[currQuestion].section_name}</Name>
            <Prompt>{Questions[currQuestion].prompt}</Prompt>
          </LeftContent>
          <RightContent>
            {currQuestion === 0 && <TermsAgreement />}
            {currQuestion === 1 && <Q2 />}
            {currQuestion === 2 && <Q3 />}
            <OptionsContainer>
              {Questions[currQuestion].sub_questions && (
                <SubQuestion>
                  <Bold>
                    {Questions[currQuestion].sub_questions[currSubQuestion]}
                  </Bold>
                </SubQuestion>
              )}
              <Options
                currQuestion={currQuestion}
                currSubQuestion={currSubQuestion}
                subQuestion={Questions[currQuestion].sub_questions}
                options={Questions[currQuestion].options}
                currQuestionType={Questions[currQuestion].type}
              />
            </OptionsContainer>
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

export default Questionaire;
