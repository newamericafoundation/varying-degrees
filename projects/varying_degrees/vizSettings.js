import colors from './utilities/colors.js';

const vizSettings = [
  { 
    topic: 'I. Higher Education & the Economy', 
    questions: [
      { 
        text: "Compared to when your parents were your age, do you think doing the following goals have gotten easier to attain, harder to attain, or are about the same?",
        variables: [
          {variable:"much_easier", displayName:"Much Easier", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_easier", displayName:"Somewhat Easier", format:"percent", color: colors.turquoise.light},
          {variable:"about_the_same", displayName:"About the Same", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_harder", displayName:"Somewhat Harder", format:"percent", color: colors.red.light},
          {variable:"much_harder", displayName:"Much Harder", format:"percent", color: colors.red.dark},
          {variable:"dont_know_refused", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
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
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
      },
      { 
        text: "Agree or disagree: American society respects people who did not go to college.",
        collection: "higher_ed_economy_2_0",
        base: "Total Answering",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
      },
      { 
        text: "Agree or disagree: It is easier to be successful with a college degree than without.",
        collection: "higher_ed_economy_3_0",
        base: "Total Answering",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
      },
    ] 
  },
  { 
    topic: 'II. Students & Funding', 
    questions: [
      { 
        text: "To the best of your knowledge, please tell me if the following statements about higher education funding are true or false.",
        variables: [
          {variable:"true", displayName:"True", format:"percent", color: colors.turquoise.light},
          {variable:"false", displayName:"False", format:"percent", color: colors.red.light},
          {variable:"dont_know_refused", displayName:"Don't Know/Refused", format:"percent", color: colors.grey.medium_dark},
        ],
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
        variables: [
          {variable:"true", displayName:"True", format:"percent", color: colors.turquoise.light},
          {variable:"false", displayName:"False", format:"percent", color: colors.red.light},
          {variable:"dont_know_refused", displayName:"Don't Know/Refused", format:"percent", color: colors.grey.medium_dark},
        ],
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
    topic: 'III. Paying for College', 
    questions: [
      { 
        text: "How confident, if at all, are you that you made the right financial decisions regarding how you are paying or paid for college?",
        collection: "paying_for_college_0_0",
        variables: [
          {variable:"completely_confident", displayName:"Completely Confident", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_confident", displayName:"Somewhat Confident", format:"percent", color: colors.turquoise.light},
          {variable:"neither_confident_nor_unconfident", displayName:"Neither Confident nor Unconfident", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_unconfident", displayName:"Somewhat Confident", format:"percent", color: colors.red.light},
          {variable:"not_at_all_confident", displayName:"Not at all Confident", format:"percent", color: colors.red.dark},
          {variable:"dont_know_refused", displayName:"Don't Know/Refused", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Respondents",
      },
      { 
        text: "Did you use any sources to help you pay for your higher education?",
        base: "College Graduation/Some College or Current Student",
        subquestions: [
          { 
            text: "Grants or Scholarships",
            collection: "paying_for_college_1_0",
            variables: [{variable:"grants_or_scholarships", displayName:"Grants or Scholarships", format:"percent", color: colors.turquoise.dark}],
          },
          { 
            text: "Loans or Debt",
            collection: "paying_for_college_1_0",
            variables: [{variable:"loans_or_debt", displayName:"Loans or Debt", format:"percent", color: colors.turquoise.light}],
          
          },
          { 
            text: "Financial Support from Family",
            collection: "paying_for_college_1_0",
            variables: [{variable:"financial_support_from_family", displayName:"Financial Support from Family", format:"percent", color: colors.blue.dark}],
          },
          { 
            text: "Income from a Job",
            collection: "paying_for_college_1_0",
            variables: [{variable:"income_from_a_job", displayName:"Income from Job", format:"percent", color: colors.blue.light}],
          },
          { 
            text: "Savings",
            collection: "paying_for_college_1_0",
            variables: [{variable:"savings", displayName:"Savings", format:"percent", color: colors.purple.dark}],
          },
          { 
            text: "No/None",
            collection: "paying_for_college_1_0",
            variables: [{variable:"no_none", displayName:"No one", format:"percent", color: colors.grey.medium_dark}],
          },
        ]
   
        
      },
    ] 
  },
  { 
    topic: 'IV. Sector-by-Sector',
    questions: [
      { 
        text: "Agree or disagree: [Institution type] are for people in my situation.",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
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
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
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
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
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
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
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
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
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
    topic: 'V. Purpose & Accountability', 
    questions: [
      { 
        text: "In your opinion, is higher education mainly about getting a degree or gaining knowledge?",
        collection: "purpose_accountability_0_0",
        variables: [
          {variable:"strongly_getting_a_degree", displayName:"Strongly - Getting a Degree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_getting_a_degree", displayName:"Somewhat - Getting a Degree", format:"percent", color: colors.turquoise.light},
          {variable:"both___the_same", displayName:"Both/the Same", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_gaining_knowledge", displayName:"Somewhat - Gaining Knowledge", format:"percent", color: colors.purple.light},
          {variable:"strongly_gaining_knowledge", displayName:"Strongly - Gaining Knowledge", format:"percent", color: colors.purple.dark},
          {variable:"neither", displayName:"Neither", format:"percent", color: colors.red.light},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Respondents",
      },
      { 
        text: "In your opinion, is a higher education system good for society or is higher education mostly a private benefit for individual graduates?",
        collection: "purpose_accountability_1_0",
        variables: [
          {variable:"strongly_an_accessible_higher_education_system_good_for_society", displayName:"Strongly - Good for Society", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_an_accessible_higher_education_system_good_for_society", displayName:"Somewhat - Good for Society", format:"percent", color: colors.turquoise.light},
          {variable:"both___the_same", displayName:"Both/the Same", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_higher_education_mostly_a_private_benefit_for_individual_graduates", displayName:"Somewhat - Individual Benefit", format:"percent", color: colors.purple.light},
          {variable:"strongly_higher_education_mostly_a_private_benefit_for_individual_graduates", displayName:"Strongly - Individual Benefit", format:"percent", color: colors.purple.dark},
          {variable:"neither", displayName:"Neither", format:"percent", color: colors.red.light},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Respondents",
      },
      { 
        text: "Which of the following is closer to your point of view regarding success of students in higher education? The student is solely responsible, or the university needs to assist in the success of its students.",
        collection: "purpose_accountability_2_0",
        variables: [
          {variable:"strongly_the_student_is_solely_responsible", displayName:"Strongly - Student Solely Responsible", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_the_student_is_solely_responsible", displayName:"Somewhat - Student Solely Responsible", format:"percent", color: colors.turquoise.light},
          {variable:"both___the_same", displayName:"Both/the Same", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_the_university_needs_to_assist_in_the_success_of_its_students", displayName:"Somewhat - University Should Assist", format:"percent", color: colors.purple.light},
          {variable:"strongly_the_university_needs_to_assist_in_the_success_of_its_students", displayName:"Strongly - University Should Assist", format:"percent", color: colors.purple.dark},
          {variable:"neither", displayName:"Neither", format:"percent", color: colors.red.light},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Respondents",
      },
      { 
        text: "In your opinion, do higher education leaders generally put the needs and interests of students first or put the long-term interests of their schools first?",
        collection: "purpose_accountability_3_0",
        variables: [
          {variable:"strongly_put_the_needs_and_interests_of_students_first", displayName:"Strongly - Students First", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_put_the_needs_and_interests_of_students_first", displayName:"Somewhat - Students First", format:"percent", color: colors.turquoise.light},
          {variable:"both___the_same", displayName:"Both/the Same", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_put_the_long_term_interests_of_their_schools_first", displayName:"Somewhat - Interest of School First", format:"percent", color: colors.purple.light},
          {variable:"strongly_put_the_long_term_interests_of_their_schools_first", displayName:"Strongly - Interest of School First", format:"percent", color: colors.purple.dark},
          {variable:"neither", displayName:"Neither", format:"percent", color: colors.red.light},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Respondents",
      },
      { 
        text: "Agree or disagree: Higher education in America is fine how it is.",
        collection: "purpose_accountability_4_0",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: All Americans have a decent chance of getting into a good college.",
        collection: "purpose_accountability_5_0",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: Most people who enroll in higher education benefit.",
        collection: "purpose_accountability_6_0",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Answering",
      },
    ] 
  },
  { 
    topic: 'VI. Government Involvement', 
    questions: [
      { 
        text: "Agree or disagree: The federal government is having a positive impact on the higher education system.",
        collection: "government_involvement_0_0",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: My state government is having a positive impact on the higher education system.",
        collection: "government_involvement_1_0",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Answering",
      },
      { 
        text: "Agree or disagree: Higher education institutions in my state should act with greater independence from the government.",
        collection: "government_involvement_2_0",
        variables: [
          {variable:"strongly_agree", displayName:"Strongly Agree", format:"percent", color: colors.turquoise.dark},
          {variable:"somewhat_agree", displayName:"Somewhat Agree", format:"percent", color: colors.turquoise.light},
          {variable:"neither_agree_nor_disagree", displayName:"Neither Agree nor Disagree", format:"percent", color: colors.grey.medium_light},
          {variable:"somewhat_disagree", displayName:"Somewhat Disagree", format:"percent", color: colors.red.light},
          {variable:"strongly_disagree", displayName:"Strongly Disagree", format:"percent", color: colors.red.dark},
          {variable:"dont_know", displayName:"Don't Know", format:"percent", color: colors.grey.medium_dark},
        ],
        base: "Total Answering",
      },
    ] 
  },
  
];

export default vizSettings;