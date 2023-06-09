import { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { IconContext } from 'react-icons';
import { FaUser, FaUsers } from 'react-icons/fa';
import styled from 'styled-components';
import {
  boxBackground,
  selected,
  selectedBackground,
} from '../../buttonStyles';

const textBlue = '#1d2556';
const iconPurple = '#8992CD';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 60%;
    font-weight: 300;
  }
  margin: 0 10px;
  width: 167px;
  height: 184px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.25px;
  font-size: 16px;
  line-height: 16px;
  color: ${textBlue};
  border: none;
  ${(props) =>
    props.selected &&
    `
      border: 1px solid ${selected};
    `}
  background-color: ${(props) =>
    props.selected ? selectedBackground : boxBackground};
`;

const Q2 = () => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const { selectedOptions, setSelectedOptions } = useContext(AssessmentContext);
  const { answers, setAnswers } = useContext(AssessmentContext);
  const [usage, setUsage] = useState('');

  const handleButtonClick = (choice) => {
    setUsage(choice);
    setSelectedOptions(choice);
  };

  useEffect(() => {
    if (answers['identity']) {
      if (usage && usage != answers['identity']) {
        setSelectedOptions(usage);
      } else {
        setSelectedOptions(answers['identity']);
      }
    }
    if (usage || selectedOptions) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [usage, setIsValid]);

  return (
    <Container>
      <IconContext.Provider value={{ color: `${iconPurple}`, size: '50px' }}>
        <Button
          selected={selectedOptions === 'myself'}
          onClick={() => handleButtonClick('myself')}
        >
          <div>
            <FaUser />
            Myself
          </div>
        </Button>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: `${iconPurple}`, size: '70px' }}>
        <Button
          selected={selectedOptions === 'others'}
          onClick={() => handleButtonClick('others')}
        >
          <div>
            <FaUsers />
            Someone Else
          </div>
        </Button>
      </IconContext.Provider>
    </Container>
  );
};

export default Q2;
