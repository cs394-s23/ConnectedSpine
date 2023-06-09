import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import TermsAgreement from '../BasicInfo/TermsAgreement';
import Q2 from '../BasicInfo/Q2';
import Q3 from '../BasicInfo/Q3';
import Questions from '../../helpers/Questions';
import Options from '../QuestionTypes/Options';
import ProgressDots from '../../helpers/ProgressDots';
import styled from 'styled-components';
import {
  Background,
  Content,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer,
  Bold,
} from '../../styles';
import { NextButton, BackButton } from '../../buttonStyles';
import { getAuth } from 'firebase/auth';
import { useDbUpdate } from '../../utilities/firebase';

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
  margin-top: -40px;
  margin-bottom: 40px;
  max-width: 80%;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Questionaire = ({ data }) => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [currSubQuestion, setCurrSubQuestion] = useState(0);

  const [idTrail, setIdTrail] = useState([]);

  const [dateToday] = useState(Date.now());
  const user = getAuth().currentUser;
  const [userUpdate, userResult] = useDbUpdate(`/users/${user['uid']}`);
  const [answerUpdate, answerResult] = useDbUpdate(`/answers/${dateToday}`);

  let lastQuestion =
    (currQuestion === Questions.length - 1 &&
      Questions[currQuestion].sub_questions &&
      currSubQuestion === Questions[currQuestion].sub_questions.length - 1) ||
    (currQuestion === Questions.length - 1 &&
      !Questions[currQuestion].sub_questions);

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

  const proceedSensationQuestion = (currentQuestion) => {
    // if SENSATION question, then navigate to questions based on these answers
    let index = currentQuestion + 1;
    for (let i = currentQuestion + 1; i < Questions.length; i++) {
      if (
        currentQuestion + 1 > 11 &&
        Questions[currentQuestion + 1].qId.includes('06')
      ) {
        let filter;
        if (currentQuestion == 9) {
          filter = selectedOptions;
        } else {
          filter = answers['06'];
        }
        var qid = Questions[i].qId;
        qid = qid.split('-');
        const question = qid[1];
        for (let j = 0; j < filter.length; j++) {
          if (filter[j].includes(question)) {
            index = i;
            return index;
          } else {
            index = 17; 
            // change index based on next question after sensations questions
          }
        }
      }
    }
    return index;
  };

  const handleBackClick = () => {
    if (currQuestion === 0) {
      setAssessmentState('zipcode');
    } else {
      let index;
      let tempIdTrail = [];
      const currId = Questions[currQuestion].qId;
      tempIdTrail = idTrail.concat(currId);

      if (Questions[currQuestion].sub_questions) {
        if (currSubQuestion != 0) {
          setCurrSubQuestion(currSubQuestion - 1);
          return;
        }
      }

      for (let i = 0; i < tempIdTrail.length; i++) {
        if (tempIdTrail[i + 1] === currId) {
          const newLocationId = tempIdTrail[i];
          for (let j = 0; j < Questions.length; j++) {
            if (newLocationId === Questions[j].qId) {
              index = Questions[j].index;
              setCurrQuestion(index);
              if (Questions[index].sub_questions) {
                setCurrSubQuestion(Questions[index].sub_questions.length - 1);
              }
              return;
            }
          }
        }
      }
    }
  };

  const handleNextClick = () => {
    if (
      // if last question
      (currQuestion === Questions.length - 1 &&
        Questions[currQuestion].sub_questions &&
        currSubQuestion === Questions[currQuestion].sub_questions.length - 1) ||
      (currQuestion === Questions.length - 1 &&
        !Questions[currQuestion].sub_questions)
    ) {
      if (Questions[currQuestion].sub_questions) {
        // if last question and subquestion
        var qid = `${Questions[currQuestion].qId}-subq-${currSubQuestion}`;
      } else {
        // if last question and not subquestion
        var qid = Questions[currQuestion].qId;
      }
      const currentAnswer = { ...answers, [qid]: selectedOptions };
      setAnswers(currentAnswer);
      if (!idTrail.includes(Questions[currQuestion].qId)) {
        setIdTrail([...idTrail, Questions[currQuestion].qId]);
      }
      submitResults();
      setAssessmentState('result');
    } else if (isValid) {
      // if not last question
      setIsValid(false);
      if (
        // move onto next question
        !Questions[currQuestion].sub_questions ||
        currSubQuestion === Questions[currQuestion].sub_questions.length - 1
      ) {
        if (Questions[currQuestion].sub_questions) {
          var qid = `${Questions[currQuestion].qId}-subq-${currSubQuestion}`;
        } else {
          var qid = Questions[currQuestion].qId;
        }
        const currentAnswer = { ...answers, [qid]: selectedOptions };
        setAnswers(currentAnswer);
        if (!idTrail.includes(Questions[currQuestion].qId)) {
          setIdTrail([...idTrail, Questions[currQuestion].qId]);
        }

        const index = proceedSensationQuestion(currQuestion);
        setCurrQuestion(index);
        setCurrSubQuestion(0);
        setSelectedOptions([]);
      } else {
        // move onto next subquestion
        var qid = `${Questions[currQuestion].qId}-subq-${currSubQuestion}`;
        const currentAnswer = { ...answers, [qid]: selectedOptions };

        setAnswers(currentAnswer);
        if (!idTrail.includes(Questions[currQuestion].qId)) {
          setIdTrail([...idTrail, Questions[currQuestion].qId]);
        }

        setCurrSubQuestion(currSubQuestion + 1);
        setSelectedOptions([]);
      }
    }
  };

  window.addEventListener(
    'keydown',
    (event) => {
      switch (event.key) {
        case 'Enter':
          handleNextClick();
          break;
        default:
          return;
      }

      event.preventDefault();
    },
    true
  );

  const submitResults = () => {
    let dbResults = [];
    if (data[user['uid']] && data[user['uid']]['results']) {
      if (!Array.isArray(data[user['uid']]['results'])) {
        dbResults.push(data[user['uid']]['results']);
      } else {
        for (let element of data[user['uid']]['results']) {
          dbResults.push(element);
        }
      }

      dbResults.push(dateToday);
    } else {
      dbResults = dateToday;
    }

    answerUpdate({
      date: dateToday,
      answers,
    });

    userUpdate({
      email: user['email'],
      results: dbResults,
    });
  };

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
              {!lastQuestion ? (
                <NextButton isValid={isValid} onClick={handleNextClick}>
                  Next
                </NextButton>
              ) : (
                <NextButton isValid={isValid} onClick={handleNextClick}>
                  Submit
                </NextButton>
              )}
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
        <ProgressDots currentStep={Questions[currQuestion].section - 1} />
      </Content>
    </Background>
  );
};

export default Questionaire;
