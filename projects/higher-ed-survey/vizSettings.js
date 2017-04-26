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
          {variable:"about_the_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know_refused", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
        base: "Total Respondents",
        subquestions: [
          { 
            text: "Finding a good paying job", 
            collection: "higher_ed_economy_0_0",
          },
          { 
            text: "Getting a good education", 
            collection: "higher_ed_economy_0_1",
          },
          { 
            text: "Being able to afford a family", 
            collection: "higher_ed_economy_0_2",
          },
          { 
            text: "Being treated with respect by society", 
            collection: "higher_ed_economy_0_3",
          },
        ]
      },
      { 
        text: "Agree or disagree: There are lots of good-paying jobs that do not require college.",
        collection: "higher_ed_economy_1_0",
        base: "Total Answering",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_the_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know_refused", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
      },
      { 
        text: "Agree or disagree: American society respects people who did not go to college.",
        collection: "higher_ed_economy_2_0",
        base: "Total Answering",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_the_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know_refused", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
      },
      { 
        text: "Agree or disagree: It is easier to be successful with a college degree than without.",
        collection: "higher_ed_economy_3_0",
        base: "Total Answering",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_the_same", displayName:"About the Same", format:"percent", color: colors.grey.light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know_refused", displayName:"Don't Know", format:"percent", color: colors.grey.medium},
        ],
      },
    ] 
  },
  { 
    topic: 'Students & Funding', 
    questions: [
      { 
        text: "To the best of your knowledge, please tell me if the following statements about higher education funding are true or false.",
        base: "Total Respondents",
        subquestions: [
          { 
            text: "State governments have increased their spending on higher education in the last ten years.",
            collection: "students_funding_0_0"
          },
          { 
            text: "The federal government has increased its spending on higher education in the last ten years.",
            collection: "students_funding_0_1"
          },
          { 
            text: "Students pay the majority of the costs (tuition, room and board, etc.) involved in their higher education.",
            collection: "students_funding_0_2"
          },
          { 
            text: "Government currently pays less than half the costs associated with higher education.",
            collection: "students_funding_0_3"
          },
          { 
            text: "Most financial aid goes to minority students.",
            collection: "students_funding_0_4"
          },
        ]
      },
      { 
        text: "To the best of your knowledge, please tell me if the following statements about the typical college student are true or false.",
        base: "Total Respondents",
        subquestions: [
          { 
            text: "Most people who go to college finish with a degree.",
            collection: "students_funding_1_0"
          },
          { 
            text: "There are more students in two-year and technical programs than there are in four-year bachelor degree programs.",
            collection: "students_funding_1_1"
          },
          { 
            text: "The average college student is 20 years old.",
            collection: "students_funding_1_2"
          },
          { 
            text: "Most college students attend school full time.",
            collection: "students_funding_1_3"
          },
        ]
      },
    ] 
  },
  { 
    topic: 'Sector-by-Sector',
    questions: [
      { 
        text: "Agree or disagree: [Institution type] are for people in my situation.",
        base: "Total Asked",
        subquestions: [
          { 
            text: "Two-year community colleges",
            collection: "sector_by_sector_0_0"
          },
          { 
            text: "Four-year public colleges or universities",
            collection: "sector_by_sector_0_1"
          },
          { 
            text: "Four-year private colleges or universities",
            collection: "sector_by_sector_0_2"
          },
          { 
            text: "For-profit colleges or universities",
            collection: "sector_by_sector_0_3"
          },
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] prepare people to be successful.",
        base: "Total Asked",
        subquestions: [
          { 
            text: "Two-year community colleges",
            collection: "sector_by_sector_1_0"
          },
          { 
            text: "Four-year public colleges or universities",
            collection: "sector_by_sector_1_1"
          },
          { 
            text: "Four-year private colleges or universities",
            collection: "sector_by_sector_1_2"
          },
          { 
            text: "For-profit colleges or universities",
            collection: "sector_by_sector_1_3"
          },
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] are worth the cost.",
        base: "Total Asked",
        subquestions: [
          { 
            text: "Two-year community colleges",
            collection: "sector_by_sector_2_0"
          },
          { 
            text: "Four-year public colleges or universities",
            collection: "sector_by_sector_2_1"
          },
          { 
            text: "Four-year private colleges or universities",
            collection: "sector_by_sector_2_2"
          },
          { 
            text: "For-profit colleges or universities",
            collection: "sector_by_sector_2_3"
          },
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] contribute to a strong American workforce.",
        base: "Total Asked",
        subquestions: [
          { 
            text: "Two-year community colleges",
            collection: "sector_by_sector_3_0"
          },
          { 
            text: "Four-year public colleges or universities",
            collection: "sector_by_sector_3_1"
          },
          { 
            text: "Four-year private colleges or universities",
            collection: "sector_by_sector_3_2"
          },
          { 
            text: "For-profit colleges or universities",
            collection: "sector_by_sector_3_3"
          },
        ]
      },
      { 
        text: "Agree or disagree: [Institution type] always put their students first.",
        base: "Total Asked",
        subquestions: [
          { 
            text: "Two-year community colleges",
            collection: "sector_by_sector_4_0"
          },
          { 
            text: "Four-year public colleges or universities",
            collection: "sector_by_sector_4_1"
          },
          { 
            text: "Four-year private colleges or universities",
            collection: "sector_by_sector_4_2"
          },
          { 
            text: "For-profit colleges or universities",
            collection: "sector_by_sector_4_3"
          },
        ]
      },
    ] 
  },
  { 
    topic: 'Purpose & Accountability', 
    questions: [
      { 
        text: "In your opinion, is higher education mainly about getting a degree or gaining knowledge?",
        collection: "purpose_accountability_0_0",
        base: "Total Respondents",
      },
      { 
        text: "In your opinion, is a higher education system good for society or is higher education mostly a private benefit for individual graduates?",
        collection: "purpose_accountability_1_0",
        base: "Total Respondents",
      },
      { 
        text: "Which of the following is closer to your point of view regarding success of students in higher education? The student is solely responsible, or the university needs to assist in the success of its students.",
        collection: "purpose_accountability_2_0",
        base: "Total Respondents",
      },
      { 
        text: "In your opinion, do higher education leaders generally put the needs and interests of students first or put the long-term interests of their schools first?",
        collection: "purpose_accountability_3_0",
        base: "Total Respondents",
      },
      { 
        text: "Agree or disagree: Higher education in America is fine how it is.",
        collection: "purpose_accountability_4_0",
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: All Americans have a decent chance of getting into a good college.",
        collection: "purpose_accountability_5_0",
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: Most people who enroll in higher education benefit.",
        collection: "purpose_accountability_6_0",
        base: "Total Answering",
      },
    ] 
  },
  { 
    topic: 'Government Involvement', 
    questions: [
      { 
        text: "Agree or disagree: The federal government is having a positive impact on the higher education system.",
        collection: "government_involvement_0_0",
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: My state government is having a positive impact on the higher education system.",
        collection: "government_involvement_1_0",
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: Higher education institutions in my state should act with greater independence from the government.",
        collection: "government_involvement_2_0",
        base: "Total Answering",
      },
    ] 
  },
  { 
    topic: 'Paying for College', 
    questions: [
      { 
        text: "How confident, if at all, are you that you made the right financial decisions regarding how you are paying or paid for college?",
        collection: "paying_for_college_0_0",
        base: "Total Respondents",
      },
      { 
        text: "Did you use any sources to help you pay for your higher education?",
        collection: "College ",
        base: "College Graduation/Some College or Current Student",
      },
    ] 
  },
];

export default vizSettings;