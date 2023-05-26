import React from 'react';
import {
  faPerson,
  faHospital,
  faUserDoctor,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons';
import InfoCard from './InfoCard';
import { BackButton } from '../../buttonStyles';
import { ResultDetails } from '../../helpers/RecommendedDetails';
import {
  Container,
  Subtitle,
  Title,
  Recomendation,
  Recomended,
  Cards,
  Save,
} from './styles';
import { useDbUpdate } from '../../utilities/firebase';
import { getAuth } from 'firebase/auth';

const Providers = ({ resultIndex, data }) => {
  const diagnosis = [];
  const user = getAuth().currentUser;
  const dateTodayLength = data[user['uid']]['results'].length;
  const dateToday = data[user['uid']]['results'][dateTodayLength - 1];
  console.log('DateToday', dateToday);
  const [answerUpdate, answerResult] = useDbUpdate(
    `/answers/${dateToday}/answers`
  );

  resultIndex.map((index) => {
    diagnosis.push(ResultDetails[index]);
  });
  answerUpdate({
    diagnosis: diagnosis,
  });

  return (
    <Container>
      <Subtitle>Results</Subtitle>
      <Title>
        Your answers suggests that your symptoms are related to{' '}
        {diagnosis.map((condition) => (
          <span>{condition}, </span>
        ))}
      </Title>
      <Recomendation>
        <Recomended>Recommended providers</Recomended>
        <Cards>
          {diagnosis.includes('Metastatic disease') ||
          diagnosis.includes('Infection') ||
          diagnosis.includes('Cauda Equina') ||
          diagnosis.includes('Myocardial Ischemia') ? (
            <InfoCard
              icon={faHospital}
              provider={'ER/Urgent Care'}
              bold={'90% of people'}
              text={' with your answers seek care from the ER or urgent care'}
            />
          ) : null}
          {diagnosis.includes('Facet Arthropathy') ? (
            <InfoCard
              icon={faPerson}
              provider={'Primary Care Physician'}
              bold={'90% of people'}
              text={
                ' with your answers seek care from a primary care physician'
              }
            />
          ) : null}
          {diagnosis.includes('Myelopathy') ||
          diagnosis.includes('Lumbar Stenosis') ? (
            <InfoCard
              icon={faUserDoctor}
              provider={'Neurosurgeon'}
              bold={'90% of people'}
              text={' with your answers seek care from a neurosurgeon'}
            />
          ) : null}
          {diagnosis.includes('Myelopathy') ? (
            <InfoCard
              icon={faStethoscope}
              provider={'Neurologist'}
              bold={'90% of people'}
              text={' with your answers seek care from a neurologist'}
            />
          ) : null}
          {diagnosis.includes('Lumbar Radiculopathy') ||
          diagnosis.includes('Facet Arthropathy') ? (
            <InfoCard
              icon={faPerson}
              provider={'Interventional Pain Physician'}
              bold={'90% of people'}
              text={
                ' with your answers seek care from an interventional pain physician'
              }
            />
          ) : null}
        </Cards>
      </Recomendation>
      <Save>
        <p>Save your answers to reference with your provider.</p>
        <BackButton>Download</BackButton>
        <BackButton>Email</BackButton>
        <BackButton>Text</BackButton>
      </Save>
    </Container>
  );
};

export default Providers;
