const vizSettings = [
  { 
    topic: 'Higher Education & the Economy', 
    questions: [
      { 
        text: "Compared to when your parents were your age, do you think doing the following goals have gotten easier to attain, harder to attain, or are about the same?",
        subquestions: [
          { text: "Finding a good paying job"},
          { text: "Getting a good education"},
          { text: "Being able to afford a family"},
          { text: "Being treated with respect by society"},
        ]
      },
      { 
        text: "Agree or disagree: There are lots of good-paying jobs that do not require college.",
      },
      { 
        text: "Agree or disagree: American society respects people who did not go to college.",
      },
      { 
        text: "Agree or disagree: It is easier to be successful with a college degree than without.",
      },
    ] 
  },
  { 
    topic: 'Students & Funding', 
    questions: [
      { 
        text: "To the best of your knowledge, please tell me if the following statements about higher education funding are true or false.",
        subquestions: [
          { text: "State governments have increased their spending on higher education in the last ten years. "},
          { text: "The federal government has increased its spending on higher education in the last ten years."},
          { text: "Students pay the majority of the costs (tuition, room and board, etc.) involved in their higher education."},
          { text: "Government currently pays less than half the costs associated with higher education."},
          { text: "Most financial aid goes to minority students."},
        ]
      },
      { 
        text: "To the best of your knowledge, please tell me if the following statements about the typical college student are true or false.",
        subquestions: [
          { text: "Most people who go to college finish with a degree. "},
          { text: "There are more students in two-year and technical programs than there are in four-year bachelor degree programs."},
          { text: "The average college student is 20 years old."},
          { text: "Most college students attend school full time."},
        ]
      },
    ] 
  },
];

export default vizSettings;