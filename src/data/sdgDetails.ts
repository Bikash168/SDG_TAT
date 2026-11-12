export interface SdgIndicatorItem {
  text: string;
  link: string | null;
  isPdf: boolean;
}

export interface SdgCategory {
  title: string;
  items: SdgIndicatorItem[];
}

export interface SdgDetail {
  num: number;
  slug: string;
  title: string;
  color: string;
  rank: string;
  unGoal: string;
  image: string;
  categories: SdgCategory[];
  pdfCount: number;
  itemCount: number;
}

export const SDG_DETAILS: Record<string, SdgDetail> = {
  "sdg-1-no-poverty": {
    "num": 1,
    "slug": "sdg-1-no-poverty",
    "title": "No Poverty",
    "color": "#E5243B",
    "rank": "601-800th",
    "unGoal": "End poverty in all its forms everywhere.",
    "categories": [
      {
        "title": "1.1 Research on Property",
        "items": [
          {
            "text": "1.1.1 Papers co-authored with low or lower-middle-income countries",
            "link": null,
            "isPdf": false
          },
          {
            "text": "1.1.3 No poverty: publications",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "1.2 Proportion of students receiving financial aid to attend university because of poverty",
        "items": [
          {
            "text": "1.2.1 Students Receiving Financial Aid Year: 2022-23",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "1.3 University anti-poverty programmes",
        "items": [
          {
            "text": "1.3.1 Bottom Financial Quintile Admission Target Year: 2022-2023",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/1.3.1-Bottom-Financial-Quintile-Admission-Target-Year-2023-24.pdf",
            "isPdf": true
          },
          {
            "text": "1.3.2 Bottom financial quintile student success",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/1.3.2-Bottom-financial-quintile-student-success.pdf",
            "isPdf": true
          },
          {
            "text": "1.3.3 Low-income student support Year: 2022",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/1.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "1.3.4 Bottom financial quintile student support",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/1.3.4.pdf",
            "isPdf": true
          },
          {
            "text": "1.3.5 Low or lower-middle income countries student support",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "1.4 Community anti-poverty programmes",
        "items": [
          {
            "text": "1.4.1 Local start-up assistance Year: 2022-2023",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/1.4.1.pdf",
            "isPdf": true
          },
          {
            "text": "1.4.2 Local start-up financial assistance",
            "link": null,
            "isPdf": false
          },
          {
            "text": "1.4.3 Programmes for Services Access Year: 2022-2023",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/1.4.3.pdf",
            "isPdf": true
          },
          {
            "text": "1.4.4 Policy Addressing Poverty Year: 2022-2023",
            "link": null,
            "isPdf": false
          }
        ]
      }
    ],
    "pdfCount": 6,
    "itemCount": 16,
    "image": "/images/sdg/goal-1.jpg"
  },
  "sdg-2-zero-hunger": {
    "num": 2,
    "slug": "sdg-2-zero-hunger",
    "title": "Zero Hunger",
    "color": "#DDA63A",
    "rank": "601-800th",
    "unGoal": "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    "categories": [
      {
        "title": "2.2 Campus food waste",
        "items": [
          {
            "text": "2.2.1 Campus food waste tracking",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/2.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "2.2.2 Campus food waste",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/2.2.2.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "2.3 Student hunger",
        "items": [
          {
            "text": "2.3.1 Student food insecurity and hunger",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/2.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "2.3.2 Students and Staff Hunger Interventions",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/2.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "2.3.3 Sustainable food choices on campus",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/2.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "2.3.4 Healthy food choices on campus",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/2.3.4.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "2.4 Proportion of graduates in agriculture and aquaculture including sustainability aspects",
        "items": [
          {
            "text": "2.4.1 Proportion of graduates in agriculture and aquaculture",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "2.5 National hunger",
        "items": [
          {
            "text": "2.5.1 Access to Food Security Knowledge",
            "link": null,
            "isPdf": false
          },
          {
            "text": "2.5.2 Events for local farmers and food producers",
            "link": null,
            "isPdf": false
          },
          {
            "text": "2.5.3 University access to local farmers and food producers",
            "link": null,
            "isPdf": false
          },
          {
            "text": "2.5.4 Sustainable food purchases",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/2.5.4.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 7,
    "itemCount": 15,
    "image": "/images/sdg/goal-2.jpg"
  },
  "sdg-3-good-health-well-being": {
    "num": 3,
    "slug": "sdg-3-good-health-well-being",
    "title": "Good Health and Well-Being",
    "color": "#4C9F38",
    "rank": "1501+",
    "unGoal": "Ensure healthy lives and promote well-being for all at all ages.",
    "categories": [
      {
        "title": "3.2 Number graduating in health professions",
        "items": [
          {
            "text": "3.2.1 Proportion of graduates in health professions",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "3.3 Collaborations and Health Services",
        "items": [
          {
            "text": "3.3.1 Current collaborations with health institutions",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/3.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "3.3.2 Health Outreach Programs",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/3.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "3.3.3 Shared Sports Facilities",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/3.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "3.3.4 Sexual and reproductive health care services for students",
            "link": null,
            "isPdf": false
          },
          {
            "text": "3.3.5 Mental Health Support provides students and Staff with access to mental health support",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/3.3.5.pdf",
            "isPdf": true
          },
          {
            "text": "3.3.6 Smoke-free policy",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/3.3.6.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 5,
    "itemCount": 9,
    "image": "/images/sdg/goal-3.jpg"
  },
  "sdg-4-quality-education": {
    "num": 4,
    "slug": "sdg-4-quality-education",
    "title": "Quality Education",
    "color": "#C5192D",
    "rank": "1001-1500th",
    "unGoal": "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
    "categories": [
      {
        "title": "4.2 Proportion of graduates with teaching qualification",
        "items": [
          {
            "text": "4.2.1 Proportion of Graduates with Relevant qualification for Teaching",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/4.2.1.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "4.3 Lifelong learning measures",
        "items": [
          {
            "text": "4.3.1 Free Access to Educational Resources",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/4.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "4.3.2 Public Event (Lifelong Learning)",
            "link": null,
            "isPdf": false
          },
          {
            "text": "4.3.3 Vocational Training Events (Lifelong Learning)",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/4.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "4.3.4 Education outreach activities beyond campus",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/4.3.4.pdf",
            "isPdf": true
          },
          {
            "text": "4.3.5 Lifelong Learning Access Policy",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/4.3.5.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "4.4 Proportion of first-generation students",
        "items": [
          {
            "text": "4.4.1 Proportion of Graduates with Relevant Qualification for Teaching",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/4.4.1.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 6,
    "itemCount": 10,
    "image": "/images/sdg/goal-4.jpg"
  },
  "sdg-5-gender-equality": {
    "num": 5,
    "slug": "sdg-5-gender-equality",
    "title": "Gender Equality",
    "color": "#FF3A21",
    "rank": "1001-1500th",
    "unGoal": "Achieve gender equality and empower all women and girls.",
    "categories": [
      {
        "title": "5.2 Proportion of first-generation female students",
        "items": [
          {
            "text": "5.2.1 Proportion of women first- generation",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.2.1.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "5.3 Student access measures",
        "items": [
          {
            "text": "5.3.1 Tracking Access Measures",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "5.3.2 Policy for women applications and entry",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "5.3.3 Women’s access schemes",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "5.3.4 Women’s application in underrepresented subjects",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "5.4 Proportion of senior female academics",
        "items": [
          {
            "text": "5.4.1 Proportion of Senior Female Academics",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.4.1.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "5.5 Proportion of Women Receiving Degrees",
        "items": [
          {
            "text": "5.5.1 Proportion of Female Degrees Awarded",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.5.1.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "5.6 Women’s Progress Measures",
        "items": [
          {
            "text": "5.6.1 Policy of non-discrimination vs women",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.6.1.pdf",
            "isPdf": true
          },
          {
            "text": "5.6.2 Non-discrimination policies for transgender",
            "link": null,
            "isPdf": false
          },
          {
            "text": "5.6.3 Maternity and paternity policies",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.6.3.pdf",
            "isPdf": true
          },
          {
            "text": "5.6.4 Childcare facilities for students",
            "link": null,
            "isPdf": false
          },
          {
            "text": "5.6.5 Childcare facilities for staff and faculty",
            "link": null,
            "isPdf": false
          },
          {
            "text": "5.6.6 Women’s mentoring schemes",
            "link": null,
            "isPdf": false
          },
          {
            "text": "5.6.7 Track women’s graduation rate",
            "link": null,
            "isPdf": false
          },
          {
            "text": "5.6.8 Policies protecting those reporting discrimination",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/5.6.8.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 9,
    "itemCount": 20,
    "image": "/images/sdg/goal-5.jpg"
  },
  "sdg-6-clean-water-sanitation": {
    "num": 6,
    "slug": "sdg-6-clean-water-sanitation",
    "title": "Clean Water and Sanitation",
    "color": "#26BDE2",
    "rank": "601-800th",
    "unGoal": "Ensure availability and sustainable management of water and sanitation for all.",
    "categories": [
      {
        "title": "6.2 Water consumption per person",
        "items": [
          {
            "text": "6.2.1 Water consumption tracking",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "6.2.2 Water consumption per person",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "6.3 Water usage and care",
        "items": [
          {
            "text": "6.3.1 Wastewater treatment",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "6.3.2 Preventing water system pollution",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "6.3.3 Free drinking water provided",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "6.3.4 Water-conscious building standards",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.3.4.pdf",
            "isPdf": true
          },
          {
            "text": "6.3.5 Water-conscious planting",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.3.5.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "6.4 Water reuse",
        "items": [
          {
            "text": "6.4.1 Water re-use policy",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.4.1.pdf",
            "isPdf": true
          },
          {
            "text": "6.4.2 Water re-use measurement",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.4.2.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "6.5 Water in the Community",
        "items": [
          {
            "text": "6.5.1 Water Management Educational Opportunities",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.5.1.pdf",
            "isPdf": true
          },
          {
            "text": "6.5.2 Promoting Conscious Water Usage",
            "link": null,
            "isPdf": false
          },
          {
            "text": "6.5.3 Off-campus Water Conservation Support",
            "link": null,
            "isPdf": false
          },
          {
            "text": "6.5.4 Sustainable water extraction on campus",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.5.4.pdf",
            "isPdf": true
          },
          {
            "text": "6.5.5 Cooperation on Water Security",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/6.5.5.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 11,
    "itemCount": 18,
    "image": "/images/sdg/goal-6.jpg"
  },
  "sdg-7-affordable-clean-energy": {
    "num": 7,
    "slug": "sdg-7-affordable-clean-energy",
    "title": "Affordable and Clean Energy",
    "color": "#FCC30B",
    "rank": "601-800th",
    "unGoal": "Ensure access to affordable, reliable, sustainable and modern energy for all.",
    "categories": [
      {
        "title": "7.2 University measures towards affordable and clean energy",
        "items": [
          {
            "text": "7.2.1 Energy-efficient renovation and building",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "7.2.2 Upgrade buildings to higher energy efficiency",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.2.2.pdf",
            "isPdf": true
          },
          {
            "text": "7.2.3 Carbon reduction and emission reduction process",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.2.3.pdf",
            "isPdf": true
          },
          {
            "text": "7.2.4 Plan to reduce energy consumption",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.2.4.pdf",
            "isPdf": true
          },
          {
            "text": "7.2.5 Energy wastage identification",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.2.5.pdf",
            "isPdf": true
          },
          {
            "text": "7.2.6 Divestment policy",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.2.6.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "7.3 Energy use density",
        "items": [
          {
            "text": "7.3.1 Energy usage per sqm",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.3.1.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "7.4 Energy and the Community",
        "items": [
          {
            "text": "7.4.1 Local community outreach for energy efficiency",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.4.1.pdf",
            "isPdf": true
          },
          {
            "text": "7.4.2 100% renewable energy pledge",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/7.4.2.pdf",
            "isPdf": true
          },
          {
            "text": "7.4.3 Energy efficiency services for industry",
            "link": null,
            "isPdf": false
          },
          {
            "text": "7.4.4 Policy development for clean energy tech",
            "link": null,
            "isPdf": false
          },
          {
            "text": "7.4.5 Assistance to low-carbon innovation",
            "link": null,
            "isPdf": false
          }
        ]
      }
    ],
    "pdfCount": 9,
    "itemCount": 15,
    "image": "/images/sdg/goal-7.jpg"
  },
  "sdg-8-decent-work-and-economic-growth": {
    "num": 8,
    "slug": "sdg-8-decent-work-and-economic-growth",
    "title": "Decent Work and Economic Growth",
    "color": "#A21942",
    "rank": "801-1000th",
    "unGoal": "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
    "categories": [
      {
        "title": "8.2 Employment practice",
        "items": [
          {
            "text": "8.2.1 Employment practice living wage",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG8.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "8.2.2 Employment Practice Unions",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG8.2.2.pdf",
            "isPdf": true
          },
          {
            "text": "8.2.3 Employment policy on discrimination",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG8.2.3.pdf",
            "isPdf": true
          },
          {
            "text": "8.2.4 Employment policy modern slavery",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG8.2.4.pdf",
            "isPdf": true
          },
          {
            "text": "8.2.5 Employment practice equivalent rights outsourcing",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG8.2.5.pdf",
            "isPdf": true
          },
          {
            "text": "8.2.6 Employment policy pay scale equity",
            "link": null,
            "isPdf": false
          },
          {
            "text": "8.2.7 Tracking pay scale for gender equity",
            "link": null,
            "isPdf": false
          },
          {
            "text": "8.2.8 Employment Practice Appeal Process",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG8.2.8.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "8.3 Expenditure per employee",
        "items": [
          {
            "text": "8.3.1 Expenditure per employee",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "8.4 Proportion of students taking work placements",
        "items": [
          {
            "text": "8.4.1 Proportion of students work with placements",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "8.5 Proportion of employees on secure contracts",
        "items": [
          {
            "text": "8.5.1 Proportion of employees on secure contracts",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG8.5.1.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 7,
    "itemCount": 18,
    "image": "/images/sdg/goal-8.jpg"
  },
  "sdg-9-industry-innovation-and-infrastructure": {
    "num": 9,
    "slug": "sdg-9-industry-innovation-and-infrastructure",
    "title": "Industry, Innovation and Infrastructure",
    "color": "#FD6925",
    "rank": "601-800th",
    "unGoal": "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
    "categories": [],
    "pdfCount": 0,
    "itemCount": 0,
    "image": "/images/sdg/goal-9.jpg"
  },
  "sdg-10-reducing-inequalities": {
    "num": 10,
    "slug": "sdg-10-reducing-inequalities",
    "title": "Reduced Inequalities",
    "color": "#DD1367",
    "rank": "1001+",
    "unGoal": "Reduce inequality within and among countries.",
    "categories": [
      {
        "title": "10.2 First generation students",
        "items": [
          {
            "text": "10.2.1 Proportion of first-generation students",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.2.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "10.3 International students from developing countries",
        "items": [
          {
            "text": "10.3.1 Proportion of international students from developing countries",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "10.4 Proportion of students with disabilities",
        "items": [
          {
            "text": "10.4.1 Proportion of students with disabilities",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.4.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "10.5 Proportion of employees with disabilities",
        "items": [
          {
            "text": "10.5.1 Proportion of employees with disabilities",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.5.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "10.6 Measures against discrimination",
        "items": [
          {
            "text": "10.6.1.Non-discriminatory admissions policy",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.1.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.1.b Admission Reservation Policy",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.2 Access to University Track Underrepresented Groups Applications",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.2.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.3 Access to university underrepresented groups recruit",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.3.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.3.a Access to University Underrepresented Groups Recruit",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.3.b Committee for Social Protection",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.4 Anti-discrimination policies",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.4.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.4.a Anti-discrimination policies",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.4.b Anti-Discrimination Equal Employment Opportunity",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.5 University Diversity Officer",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.5.a University Diversity Officer",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.5.b. Committees",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.6 Support for underrepresented groups",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.6.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.7 Accessible facilities",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.7.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.8 Disability support services",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.8.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.9 Disability Access Scheme",
            "link": null,
            "isPdf": false
          },
          {
            "text": "10.6.10.a Disability Accommodation Policy",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/10.6.10.pdf",
            "isPdf": true
          },
          {
            "text": "10.6.10.b Employee Accommodation Policy",
            "link": null,
            "isPdf": false
          }
        ]
      }
    ],
    "pdfCount": 11,
    "itemCount": 27,
    "image": "/images/sdg/goal-10.jpg"
  },
  "sdg-11-sustainable-cities-communities": {
    "num": 11,
    "slug": "sdg-11-sustainable-cities-communities",
    "title": "Sustainable Cities and Communities",
    "color": "#FD9D24",
    "rank": "601-800th",
    "unGoal": "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    "categories": [
      {
        "title": "11.2 Support of arts and heritage",
        "items": [
          {
            "text": "11.2.1 Public access to buildings",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "11.2.2 Public access to libraries",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.2.2.pdf",
            "isPdf": true
          },
          {
            "text": "11.2.3 Public access to museums",
            "link": null,
            "isPdf": false
          },
          {
            "text": "11.2.4 Public access to green spaces",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.2.4.pdf",
            "isPdf": true
          },
          {
            "text": "11.2.5 Arts and Heritage Contribution",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.2.5.pdf",
            "isPdf": true
          },
          {
            "text": "11.2.6 Record and preserve cultural heritage",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.2.6.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "11.3 Expenditure on arts and heritage",
        "items": [
          {
            "text": "11.3.1 Arts and Heritage Expenditure",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "11.4 Sustainable practices",
        "items": [
          {
            "text": "11.4.1 Sustainable Practices Targets",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.1.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.2 Promote sustainable commuting",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.2.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.3 Allow remote working",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.3.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.4 Affordable housing for employees",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.4.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.5 Affordable housing for students",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.5.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.6 Pedestrian priority on campus",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.6.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.7 Local Authority Collaboration Regarding Planning and Development",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.7.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.8 Planning development – new build standards",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.8.pdf",
            "isPdf": true
          },
          {
            "text": "11.4.9 Building on Brownfield Sites",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/SDG11.4.9.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 14,
    "itemCount": 19,
    "image": "/images/sdg/goal-11.jpg"
  },
  "sdg-12-responsible-consumption-production": {
    "num": 12,
    "slug": "sdg-12-responsible-consumption-production",
    "title": "Responsible Consumption and Production",
    "color": "#BF8B2E",
    "rank": "601-800th",
    "unGoal": "Ensure sustainable consumption and production patterns.",
    "categories": [
      {
        "title": "12.2 Operational measures",
        "items": [
          {
            "text": "12.2.1 “Ethical sourcing policy”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "12.2.3 “Policy waste disposal – hazardous materials”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.2.3.pdf",
            "isPdf": true
          },
          {
            "text": "12.2.4 “Policy waste disposal – landfill policy”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.2.4.pdf",
            "isPdf": true
          },
          {
            "text": "12.2.5 “Policy for minimisation of plastic use”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.2.5.pdf",
            "isPdf": true
          },
          {
            "text": "12.2.6 “Policy for minimisation of disposable items”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.2.6.pdf",
            "isPdf": true
          },
          {
            "text": "12.2.7 “Disposable policy: extensions to services”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.2.7.pdf",
            "isPdf": true
          },
          {
            "text": "12.2.8 “Minimisation policies extended to suppliers”",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "12.3 Proportion of recycled waste",
        "items": [
          {
            "text": "12.3.1 “Waste tracking”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "12.3.2 Proportion of waste recycled",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/12.3.2.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "12.4 Publication of a sustainability report",
        "items": [
          {
            "text": "12.4.1 “Publication of a sustainability report”",
            "link": null,
            "isPdf": false
          }
        ]
      }
    ],
    "pdfCount": 8,
    "itemCount": 13,
    "image": "/images/sdg/goal-12.jpg"
  },
  "sdg-13-climate-action": {
    "num": 13,
    "slug": "sdg-13-climate-action",
    "title": "Climate Action",
    "color": "#3F7E44",
    "rank": "601-800th",
    "unGoal": "Take urgent action to combat climate change and its impacts.",
    "categories": [
      {
        "title": "13.2 Low-carbon energy use",
        "items": [
          {
            "text": "13.2.1 Low carbon energy tracking",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/13.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "13.2.2 Low-carbon energy use",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "13.3 Environmental education measures",
        "items": [
          {
            "text": "13.3.1 Local education programmes on climate",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/13.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "13.3.2 Climate Action Plan, shared",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/13.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "13.3.3 Co-operative planning for climate change disasters",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/13.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "13.3.4 Inform and support government",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/13.3.4.pdf",
            "isPdf": true
          },
          {
            "text": "13.3.5 Environmental Education Collaborate with NGO",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/13.3.5.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "13.4 Commitment to carbon-neutral university",
        "items": [
          {
            "text": "13.4.1 Commitment to carbon-neutral university",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/13.4.1.pdf",
            "isPdf": true
          },
          {
            "text": "13.4.2 Achieve by date",
            "link": null,
            "isPdf": false
          }
        ]
      }
    ],
    "pdfCount": 7,
    "itemCount": 12,
    "image": "/images/sdg/goal-13.jpg"
  },
  "sdg-14-life-below-water": {
    "num": 14,
    "slug": "sdg-14-life-below-water",
    "title": "Life Below Water",
    "color": "#0A97D9",
    "rank": "Impact Focus",
    "unGoal": "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
    "categories": [],
    "pdfCount": 0,
    "itemCount": 0,
    "image": "/images/sdg/goal-14.jpg"
  },
  "sdg-15-life-on-land": {
    "num": 15,
    "slug": "sdg-15-life-on-land",
    "title": "Life on Land",
    "color": "#56C02B",
    "rank": "601-800th",
    "unGoal": "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt biodiversity loss.",
    "categories": [
      {
        "title": "15.2 Supporting Land Ecosystems Through Education",
        "items": [
          {
            "text": "15.2.1 Events about sustainable use of land",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/15.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "15.2.2 Sustainably farmed food on campus",
            "link": null,
            "isPdf": false
          },
          {
            "text": "15.2.3 Maintain and extend current ecosystems’ biodiversity",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/15.2.3.pdf",
            "isPdf": true
          },
          {
            "text": "15.2.4 Educational programmes on ecosystems",
            "link": null,
            "isPdf": false
          },
          {
            "text": "15.2.5 Sustainable management of land for agriculture and tourism (educational outreach)",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "15.3 Supporting land ecosystems through action",
        "items": [
          {
            "text": "15.3.1 Sustainable use, conservation and restoration of land (policy)",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/15.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "15.3.2 Monitoring IUCN and other conservation species (policies)",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/15.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "15.3.3 Local biodiversity included in planning and development",
            "link": null,
            "isPdf": false
          },
          {
            "text": "15.3.4 Alien species impact reduction (policies): Have a policy to reduce the impact of alien species on Campus",
            "link": null,
            "isPdf": false
          },
          {
            "text": "15.3.5 Collaboration for Shared Land Ecosystems",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "15.4 Land sensitive waste disposal",
        "items": [
          {
            "text": "15.4.1 Water discharge guidelines and standards",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/15.4.1.pdf",
            "isPdf": true
          },
          {
            "text": "15.4.2 Policy on Plastic Waste Reduction: Land-sensitive waste disposal",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/15.4.2.pdf",
            "isPdf": true
          },
          {
            "text": "15.4.3 Policy on Hazardous Waste Disposal",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/15.4.3.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 7,
    "itemCount": 16,
    "image": "/images/sdg/goal-15.jpg"
  },
  "sdg-16-peace-justice-strong-institutions": {
    "num": 16,
    "slug": "sdg-16-peace-justice-strong-institutions",
    "title": "Peace, Justice and Strong Institutions",
    "color": "#00689D",
    "rank": "1001+",
    "unGoal": "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
    "categories": [
      {
        "title": "16.2 University governance measures",
        "items": [
          {
            "text": "16.2.1 “Elected representation”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/16.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "16.2.2 “Students’ union”",
            "link": null,
            "isPdf": false
          },
          {
            "text": "16.2.3 “Identify and engage with local stakeholders”",
            "link": null,
            "isPdf": false
          },
          {
            "text": "16.2.4 “Participatory bodies for stakeholder engagement”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/16.2.4.pdf",
            "isPdf": true
          },
          {
            "text": "16.2.5 “University principles on corruption and bribery”",
            "link": null,
            "isPdf": false
          },
          {
            "text": "16.2.6 “Academic freedom policy”",
            "link": null,
            "isPdf": false
          },
          {
            "text": "16.2.7 “Publish financial data”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/16.2.7.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "16.3 Working with government",
        "items": [
          {
            "text": "16.3.1 “Provide expert advice to government”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/16.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "16.3.2 “Policy- and lawmakers outreach and education”",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/16.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "16.3.3 “Participation in government research”",
            "link": null,
            "isPdf": false
          },
          {
            "text": "16.3.4 “Neutral platform to discuss issues”",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "16.4 Proportion of graduates in law and civil enforcement",
        "items": [
          {
            "text": "16.4.1 Proportion of graduates in law",
            "link": null,
            "isPdf": false
          }
        ]
      }
    ],
    "pdfCount": 5,
    "itemCount": 15,
    "image": "/images/sdg/goal-16.jpg"
  },
  "sdg-17-partnership-to-achieve-the-goal": {
    "num": 17,
    "slug": "sdg-17-partnership-to-achieve-the-goal",
    "title": "Partnerships for the Goals",
    "color": "#19486A",
    "rank": "1501+",
    "unGoal": "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
    "categories": [
      {
        "title": "Institutional Indicators & Programs",
        "items": [
          {
            "text": "17.2 – Relationships to support the goals",
            "link": null,
            "isPdf": false
          },
          {
            "text": "17.2.1 Relationships with regional NGOs and Government for SDG policy",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.2.1.pdf",
            "isPdf": true
          },
          {
            "text": "17.2.2 Cross-sectoral Dialogue about SDGs",
            "link": null,
            "isPdf": false
          },
          {
            "text": "17.2.3 International Collaboration Data Gathering for SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.2.3.pdf",
            "isPdf": true
          },
          {
            "text": "17.2.4 Collaboration for SDG Best Practice",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.2.4.pdf",
            "isPdf": true
          },
          {
            "text": "17.2.5 Collaboration with NGOs for SDGs",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.2.5.pdf",
            "isPdf": true
          },
          {
            "text": "17.2.2 Cross-sectoral Dialogue about SDGs",
            "link": null,
            "isPdf": false
          },
          {
            "text": "17.2.3 International collaboration data gathering for SDG",
            "link": null,
            "isPdf": false
          },
          {
            "text": "17.2.4 Collaboration for SDG best practice",
            "link": null,
            "isPdf": false
          },
          {
            "text": "17.2.5 Collaboration with NGOs for SDGs",
            "link": null,
            "isPdf": false
          }
        ]
      },
      {
        "title": "17.3 Publication of SDG reports",
        "items": [
          {
            "text": "17.3.1 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.1.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.2 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.2.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.3 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.3.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.4 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.4.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.5 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.5.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.6 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.6.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.7 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.7.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.8 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.8.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.9 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.9.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.10 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.10.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.11 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.11.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.12 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.12.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.13 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.13.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.14 Publication of SDG reports – per SDG",
            "link": null,
            "isPdf": false
          },
          {
            "text": "17.3.15 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.15.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.16 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.16.pdf",
            "isPdf": true
          },
          {
            "text": "17.3.17 Publication of SDG reports – per SDG",
            "link": "https://tat.ac.in/wp-content/uploads/2025/11/17.3.17.pdf",
            "isPdf": true
          }
        ]
      },
      {
        "title": "17.4 Education for the SDGs",
        "items": [
          {
            "text": "17.4.1 Education for SDGs commitment to meaningful education",
            "link": null,
            "isPdf": false
          },
          {
            "text": "17.4.1 Education for SDGs commitment to meaningful education",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.4.1.pdf",
            "isPdf": true
          },
          {
            "text": "17.4.2 Education for SDGs specific courses on sustainability",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.4.2.pdf",
            "isPdf": true
          },
          {
            "text": "17.4.3 Education for SDGs in the wider community",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.4.3.pdf",
            "isPdf": true
          },
          {
            "text": "17.4.4",
            "link": "https://tat.ac.in/wp-content/uploads/2024/11/17.4.4.pdf",
            "isPdf": true
          }
        ]
      }
    ],
    "pdfCount": 24,
    "itemCount": 34,
    "image": "/images/sdg/goal-17.jpg"
  }
};

export const ALL_SDG_DETAILS_LIST: SdgDetail[] = Object.values(SDG_DETAILS);

export function getSdgBySlug(slug: string): SdgDetail | undefined {
  return SDG_DETAILS[slug] || ALL_SDG_DETAILS_LIST.find((s) => s.num === parseInt(slug, 10));
}
