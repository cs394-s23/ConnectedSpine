import { useState, useContext } from 'react';
import AssessmentContext from '../helpers/Contexts';
import Header from './Header';
import Modal from './Modal';
import styled from 'styled-components';
import { Background, Content, NextButton, Link, Warning } from '../styles';
import { useAuthState } from '../utilities/firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const borderGrey = '#979797';

const Title = styled.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  max-width: 50%;
`;

const Form = styled.form`
  margin-top: 30px;
  label {
    font-weight: 400;
  }
`;

const Input = styled.div`
  margin: 10px 0;
  input {
    width: 227px;
    height: 45px;
    margin-right: 20px;
    padding-left: 10px;
    border: 1px solid ${borderGrey};
    border-radius: 4px;

    ::placeholder {
      font-style: italic;
    }
  }
`;

const text = 'this is why we do this';

function isValidUSZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

const ZipCode = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const { zipCode, setZipCode } = useContext(AssessmentContext);
  const [showModal, setShowModal] = useState(false);

  const user = getAuth().currentUser;
  console.log(`user: ${JSON.stringify(user)}`);
  console.log(`user email: ${user.email}`);

  const handleZipCodeChange = (event) => {
    const zip = event.target.value;
    setZipCode(zip);
    setIsValid(isValidUSZip(zip));
  };

  const handleNextClick = () => {
    if (isValid) {
      setAssessmentState('questions');
      setIsValid(false);
    }
  };

  return (
    <Background image="../../questions.png">
      <Header />
      <Content>
        <Title>Hi there! Before we begin, please enter your zipcode.</Title>
        <Form>
          <label>Zipcode</label>
          <Input>
            <input
              type="text"
              placeholder="Must be 5 digits"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
            <NextButton
              onClick={handleNextClick}
              isValid={isValid}
              disabled={!isValid}
              title={isValid ? undefined : 'Please enter a valid zip code'}
            >
              Next
            </NextButton>
            {isValid ? (
              <></>
            ) : (
              <Warning>* Please enter a valid zip code</Warning>
            )}
          </Input>
        </Form>
        <Link onClick={() => setShowModal(true)}>Why do we ask this?</Link>
        <Modal showModal={showModal} setShowModal={setShowModal} text={text} />
      </Content>
    </Background>
  );
};

export default ZipCode;
