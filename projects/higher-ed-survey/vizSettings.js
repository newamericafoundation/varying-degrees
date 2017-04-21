import colors from './utilities/colors.js';

const vizSettings = [
  { 
    topic: 'Higher Education & the Economy', 
    questions: [
      { 
        text: "Compared to when your parents were your age, do you think doing the following goals have gotten easier to attain, harder to attain, or are about the same?",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
        subquestions: [
          { 
            text: "Finding a good paying job", 
            collection: "higher_ed_economy_0_0",
          },
          { 
            text: "Getting a good education", 
            collection: "higher_ed_economy_0_0",
          },
          { 
            text: "Being able to afford a family", 
            collection: "higher_ed_economy_0_0",
          },
          { 
            text: "Being treated with respect by society", 
            collection: "higher_ed_economy_0_0",
          },
        ]
      },
      { 
        text: "Agree or disagree: There are lots of good-paying jobs that do not require college.",
        collection: "higher_ed_economy_0_0",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
      },
      { 
        text: "Agree or disagree: American society respects people who did not go to college.",
        collection: "higher_ed_economy_0_0",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
      },
      { 
        text: "Agree or disagree: It is easier to be successful with a college degree than without.",
        collection: "higher_ed_economy_0_0",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
      },
    ] 
  },
  { 
    topic: 'Students & Funding', 
    questions: [
      { 
        text: "To the best of your knowledge, please tell me if the following statements about higher education funding are true or false.",
        subquestions: [
          { text: "State governments have increased their spending on higher education in the last ten years."},
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
  { 
    topic: 'Sector-by-Sector', 
    questions: [
      { 
        text: "Agree or disagree: [Institution type] are for people in my situation.",
        subquestions: [
          { text: "Two-year community colleges"},
          { text: "Four-year public colleges or universities"},
          { text: "Four-year private colleges or universities"},
          { text: "For-profit colleges or universities"},
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] prepare people to be successful.",
        subquestions: [
          { text: "Two-year community colleges"},
          { text: "Four-year public colleges or universities"},
          { text: "Four-year private colleges or universities"},
          { text: "For-profit colleges or universities"},
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] are worth the cost.",
        subquestions: [
          { text: "Two-year community colleges"},
          { text: "Four-year public colleges or universities"},
          { text: "Four-year private colleges or universities"},
          { text: "For-profit colleges or universities"},
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] contribute to a strong American workforce.",
        subquestions: [
          { text: "Two-year community colleges"},
          { text: "Four-year public colleges or universities"},
          { text: "Four-year private colleges or universities"},
          { text: "For-profit colleges or universities"},
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] always put their students first.",
        subquestions: [
          { text: "Two-year community colleges"},
          { text: "Four-year public colleges or universities"},
          { text: "Four-year private colleges or universities"},
          { text: "For-profit colleges or universities"},
        ]
      },
    ] 
  },
  { 
    topic: 'Purpose & Accountability', 
    questions: [
      { 
        text: "In your opinion, is higher education mainly about getting a degree or gaining knowledge?",
      },
      { 
        text: "In your opinion, is a higher education system good for society or is higher education mostly a private benefit for individual graduates?",
      },
      { 
        text: "Which of the following is closer to your point of view regarding success of students in higher education? The student is solely responsible, or the university needs to assist in the success of its students.",
      },
      { 
        text: "In your opinion, do higher education leaders generally put the needs and interests of students first or put the long-term interests of their schools first?",
      },
      { 
        text: "Agree or disagree: Higher education in America is fine how it is.",
      },
      { 
        text: "Agree or disagree: All Americans have a decent chance of getting into a good college.",
      },
      { 
        text: "Agree or disagree: Most people who enroll in higher education benefit.",
      },
    ] 
  },
  { 
    topic: 'Government Involvement', 
    questions: [
      { 
        text: "Agree or disagree: The federal government is having a positive impact on the higher education system.",
      },
      { 
        text: "Agree or disagree: My state government is having a positive impact on the higher education system.",
      },
      { 
        text: "Agree or disagree: Higher education institutions in my state should act with greater independence from the government.",
      },
    ] 
  },
  { 
    topic: 'Paying for College', 
    questions: [
      { 
        text: "How confident, if at all, are you that you made the right financial decisions regarding how you are paying or paid for college?",
      },
      { 
        text: "Did you use any sources to help you pay for your higher education?",
      },
    ] 
  },
];

export default vizSettings;