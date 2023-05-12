import { useContext } from 'react';
import AssessmentContext from '../helpers/Contexts';
import Select from './QuestionTypes/Select';
import MultiSelect from './QuestionTypes/MultiSelect';
import SingleButton from './QuestionTypes/SingleButton';
import MultiButton from './QuestionTypes/MultiButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Options = ({
  currQuestion,
  currSubQuestion,
  subQuestion,
  options,
  currQuestionType,
}) => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const { selectedOptions, setSelectedOptions, key, setKey } = useContext(AssessmentContext);
  console.log(`currQuestionType: ${currQuestionType}`);

  const HandleOnclick = (event) => {
    // const selected_value = parseInt(event.currentTarget.id);
    const selected_value = event.currentTarget.getAttribute('value');

    if (selectedOptions[key].includes(selected_value)) {
      setSelectedOptions(
        {
          ...selectedOptions, [key]:
            selectedOptions[key].filter((option) => option !== selected_value)
        })
        ;
    } else {
      if (currQuestionType == 'Select' || currQuestionType == 'Selectbutton') {
        setSelectedOptions({ ...selectedOptions, key: [selected_value] });
        //setSelectedOptions({ ...selectedOptions });

      } else {
        setSelectedOptions({ ...selectedOptions, key: selectedOptions[key].push(selected_value) });
        //setSelectedOptions({ ...selectedOptions });
      }
      setIsValid(true);
    }
  };
  console.log(JSON.stringify(selectedOptions))
  console.log("key", key)
  if (selectedOptions[key].length === 0) {
    setIsValid(false);
  }

  if (options) {
    switch (currQuestionType) {
      case 'Select':
        return (
          <Select
            options={options}
            selectedOptions={selectedOptions[key]}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Multiselect':
        return (
          <MultiSelect
            options={options}
            selectedOptions={selectedOptions[key]}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Multibutton':
        return (
          <MultiButton
            options={options}
            selectedOptions={selectedOptions[key]}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Selectbutton':
        return (
          <SingleButton
            options={options}
            selectedOptions={selectedOptions[key]}
            HandleOnclick={HandleOnclick}
          />
        );
      default:
        return <></>;
    }
  } else {
    return <></>;
  }
};

export default Options;
