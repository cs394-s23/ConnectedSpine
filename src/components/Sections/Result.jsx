import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { ResultDetails } from '../../helpers/RecommendedDetails';
import Header from '../Header';
import Providers from '../Recommend/Providers';
import { Background, Content } from '../../styles';
import { getAuth } from 'firebase/auth';
import { useDbUpdate } from '../../utilities/firebase';

const Result = ({ data }) => {
  const { answers } = useContext(AssessmentContext);
  const [resultIndex, setResultIndex] = useState([]);

  // if shooting pain, Lumbar Radiculopathy
  if (answers['06'].includes('SHOOTING PAIN')) {
    !resultIndex.includes(0) ? setResultIndex(resultIndex.concat(0)) : null;
  }

  // if pain on walking or leaning forward but not at rest or leaning backward, Lumbar Stenosis
  if (
    answers['07-subq-0'].includes('LEAN FORWARD') &&
    (!answers['07-subq-0'].includes('AM AT REST') ||
      !answers['07-subq-0'].includes('LEAN BACK'))
  ) {
    !resultIndex.includes(1) ? setResultIndex(resultIndex.concat(1)) : null;
  }
  // if bilateral back pain, but no shooting pain or numbness/tingling, Facet arthropathy
  // TODO idk if this is right
  if (
    answers['05'].includes('ON THE LEFT') &&
    answers['05'].includes('ON THE RIGHT')
  ) {
    !resultIndex.includes(2) ? setResultIndex(resultIndex.concat(2)) : null;
  }

  // if hand symptoms and/or balance is off, Myelopathy
  if (
    answers['06-NUMBNESS-02-subq-3'] &&
    (answers['06-NUMBNESS-02-subq-3'].includes('YES') ||
      answers['06-NUMBNESS-02-subq-4'].includes('YES'))
  ) {
    !resultIndex.includes(3) ? setResultIndex(resultIndex.concat(3)) : null;
  }

  // if hx of cancer, Metastatic disease
  if (answers['16-subq-0'].includes('Yes')) {
    !resultIndex.includes(4) ? setResultIndex(resultIndex.concat(4)) : null;
  }

  // if fevers/chills, Infection
  if (
    answers['12'].includes('Fever (temperatures higher than 101.5)') ||
    answers['12'].includes('Chills')
  ) {
    !resultIndex.includes(5) ? setResultIndex(resultIndex.concat(5)) : null;
  }
  // if can’t control bowel/bladder and duration a few minutes/hours/days/weeks, Cauda Equina
  // I DONT SEE QUESTIONS RELATED TO THIS but includes 6 in theory
  if (answers['13'].includes('Cannot control when I go to the bathroom')) {
    !resultIndex.includes(6) ? setResultIndex(resultIndex.concat(6)) : null;
  }

  // if chest pain, short of breath, Myocardial Ischemia
  // idk if this was a both or j one or the other thing
  if (
    answers['13'].includes('Chest pain') &&
    answers['12'].includes('Shortness of breath')
  ) {
    !resultIndex.includes(7) ? setResultIndex(resultIndex.concat(7)) : null;
  }

  resultIndex.map((index) => {});
  // console.log("DateTodayResults", dateToday)
  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <Providers resultIndex={resultIndex} data={data} />
      </Content>
    </Background>
  );
};

export default Result;
