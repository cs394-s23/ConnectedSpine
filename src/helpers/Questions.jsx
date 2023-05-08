const Questions = [
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Terms of Service',
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Who are you answering this questionaire for?',
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: "Let's get some basic info about you first.",
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'What brings you here today?',
    options: [
      'A new pain or sensation in the back and/or neck',
      'Back and/or neck pain that has been chronic or occuring for some time',
      'A potential emergency or urgent care visit',
    ],
    type: 'Multiselect',
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Do any of the following apply?',
    options: [
      'I have fallen recently',
      'I lifted something heavy (moving, picking up children, weightligting, etc.',
      'I was injured or hurt myself (in a sports-related activity or otherwise)',
      'I was involved in motor vehicle accident',
      'None of the above',
    ],
    type: 'Select',
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Did your symptoms start after the incident?',
    options: ['Yes', 'No', 'Not sure'],
    type: 'Select',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How long have you been experiencing these symptoms?',
    options: ['A few minutes', 'A few hours', 'A few days', 'Weeks', 'Month +'],
    type: 'Select',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Choose the area(s) where you are feeling pain and/or discomfort',
    options: ['Neck', 'Upper Back', 'Middle Back', 'Lower Back'],
    type: 'Multibutton',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Where are you feeling pain/discomfort in your lower back?',
    options: ['ON THE LEFT', 'IN THE MIDDLE', 'ON THE RIGHT'],
    type: 'Multibutton',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How would you describe the sensation you are feeling?',
    options: [
      'SHARP PAIN',
      'SHOOTING PAIN',
      'NUMBNESS AND/OR TINGLING',
      'DULL, ACHING PAIN',
      'TIGHTNESS AND LIMITED MOVEMENT',
    ],
    type: 'Multibutton',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How does the dull, aching pain change?',
    sub_questions: ['Choose all that apply. The sensation gets worse when I...', 'Choose all that apply.I get some relief from the sensation when I...'],
    options: [
      'STAND UP',
      'SIT DOWN',
      'LEAN FORWARD',
      'LEAN BACK',
      'AM MOVING',
      'AM AT REST',
      'NONE OF THE ABOVE',
    ],
    type: 'Multibutton',
  },

  {
    section: 2,
    section_name: 'Symptoms',
    prompt:
      'How difficult has the dull, aching pain made your day-to-day activites?',
    options: [
      'Not at all difficult',
      'Somewhat difficult',
      'Very difficult',
      'Extremely difficult',
    ],
    type: 'Select',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Regarding the tightness',
    sub_questions: ['Does it feel like a pulled muscle?', 'Does it get better with anti - inflammatory pain medication, such as Tylenol or Advil'],

    options: ['YES', 'NO', 'NOT SURE'],
    type: 'Selectbutton',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Have you taken medication for your symptoms?',
    options: [
      'Yes, I have taken over-the-counter relievers or anti-inflammatory medication(Advil, Tylenol, Aspirin,etc.)',
      'Yes, I have taken prescription pain relievers',
      'Yes, I have taken muscle relaxers',
      'No',
      'Not sure',
    ],
    type: 'Select',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Have you had similar pain before?',
    options: ['YES', 'NO', 'NOT SURE'],
    type: 'Selectbutton',
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Are you experiencing weakness in your arms and legs?',
    options: [
      'Yes, I am experiencing weakness on one sife of my body',
      'Yes, I am experiencing weakness on both sides of my body',
      'No',
      'Not sure',
    ],
    type: 'Select',
  },

  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Are you experiencing any of the following?',
    options: ["Fever(temperatures higher than 101.5)", "Chills", "Shortness of breath", "Abdominal pain"],
    type: 'Multibutton'
  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Are you experiencing any of the following?',
    options: ["Cannot control when I go to the bathroom", "Groin/scrotum pain", "Chest pain", "Nausea"],
    type: 'Multibutton'
  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt:
      'Are you experiencing any pain near your kidneys (deep within one or both sides, just under ribs)?',
    options: ["Yes", "No", "Not Sure"],
    type: 'Selectbutton'

  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Regarding your symptoms...',
    sub_questions: ["Are you feeling light headed?", "Did you pass out?", "Have you noticed any blood in your urine?"],
    options: ["Yes", "No", "Not Sure"],
    type: 'Selectbutton'
  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Regarding your history...',
    sub_questions: ["Have you ever been diagnosed with cancer?", "Has any direct family member of your family been diagnosed with cancer", "Have you had your bone health checked recently?", "Are you currently sexually active?", "Do you currently smoke?", "Have you smoked in the past?"],
    options: ["Yes", "No", "Not Sure"],
    type: 'Selectbutton'
  }

];
export default Questions;
