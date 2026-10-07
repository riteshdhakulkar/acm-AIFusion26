import heroBackdropImg from '../assets/images/hero_tech_backdrop_1791384281241.jpg';
import cyberLaptopImg from '../assets/images/poster_cyber_laptop_1791384301218.jpg';
import campusLabImg from '../assets/images/campus_it_building_1791384317977.jpg';

export interface ChallengeDomain {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  problemStatement: string;
  keyFocusAreas: string[];
  suggestedAiCapabilities: string[];
  deliverableExample: string;
  accentColor: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  badge?: string;
}

export interface JudgingCriterion {
  id: string;
  title: string;
  percentage: number;
  description: string;
  keyQuestions: string[];
}

export interface JudgingStage {
  stage: string;
  title: string;
  duration?: string;
  description: string;
  points: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'submission' | 'judging';
}

export interface OrganizerPerson {
  name: string;
  role: string;
  department?: string;
}

export interface StudentContact {
  name: string;
  phone: string;
  cleanPhone: string;
  role: string;
}

export interface BlogPost {
  id: string;
  date: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
}

export const EVENT_CONFIG = {
  name: 'NATIONAL LEVEL AI-FUSION 2026',
  shortName: 'AI-FUSION 2026',
  tagline: 'BUILD WITH AI',
  secondaryTagline: 'Turn Your Ideas Into Impact',
  societyName: "LOKMANYA TILAK JANKALYAN SHIKSHAN SANSTHA'S",
  institution: 'Priyadarshini College of Engineering, Nagpur',
  institutionSubtitle:
    '(An Autonomous Institute Affiliated to Rashtrasant Tukdoji Maharaj Nagpur University)',
  department: 'Department of Computer Technology',
  chapters: ['PCE ACM Student Chapter', 'PCE ACM-W Student Chapter'],
  eventDate: '22 October 2026',
  eventDateISO: '2026-10-22T09:00:00+05:30',
  registrationDeadline: '15 October 2026',
  venue: 'Computer Laboratory, IT Building, Computer Technology Department, Priyadarshini College of Engineering, Nagpur',
  shortVenue: 'Computer Laboratory, IT Building · CT Department, PCE',
  format: 'Offline / On-site Webathon',
  totalDurationHours: 6,
  codingDurationHours: 4,
  teamSize: '1–3 Members',
  maxTeamSize: 3,
  registrationFeePerMember: 100,
  registrationFeeText: '₹100 per member',
  prizePool: '₹10,000',
  prizePoolNumeric: 10000,
  eligibility: 'Open to students from all colleges and all branches.',
  registrationUrl: 'https://forms.gle/ijX44sPpL7GuRHa4A',
  acmGithubPlaceholder: '[OFFICIAL ACM GITHUB USERNAME WILL BE PROVIDED]',
  developerCredit: 'Ritesh Dhakulkar',
  GeneratedAssets: {
    heroBackdrop: heroBackdropImg,
    cyberLaptop: cyberLaptopImg,
    campusLab: campusLabImg,
  },
};

export const HERO_COMPACT_STATS = [
  { label: 'EVENT DATE', value: '22 OCT 2026' },
  { label: 'TOTAL DURATION', value: '6 HOURS' },
  { label: 'DEVELOPMENT', value: '4 HOURS CODING' },
  { label: 'PRIZE POOL', value: '₹10,000 PRIZE POOL' },
  { label: 'TEAM FORMAT', value: 'TEAM SIZE 1–3' },
];

export const EVENT_AT_A_GLANCE = [
  {
    id: 'date',
    label: 'DATE',
    value: '22 October 2026',
    detail: 'Thursday · On-Site Event',
    numericTarget: 22,
    suffix: ' Oct 2026',
  },
  {
    id: 'venue',
    label: 'VENUE',
    value: 'Computer Laboratory, IT Building',
    detail: 'CT Department, PCE Nagpur',
  },
  {
    id: 'total-event',
    label: 'TOTAL EVENT',
    value: '6 Hours',
    detail: 'Orientation, Coding & Judging',
    numericTarget: 6,
    suffix: ' Hours',
  },
  {
    id: 'coding-time',
    label: 'CODING TIME',
    value: '4 Hours',
    detail: 'Focused Sprint Development',
    numericTarget: 4,
    suffix: ' Hours',
  },
  {
    id: 'team-size',
    label: 'TEAM SIZE',
    value: '1–3 Members',
    detail: 'Solo or Collaborative Squads',
  },
  {
    id: 'entry-fee',
    label: 'ENTRY FEE',
    value: '₹100 / Member',
    detail: 'Official Registration Fee',
    numericTarget: 100,
    prefix: '₹',
    suffix: ' / Member',
  },
  {
    id: 'prize-pool',
    label: 'PRIZE POOL',
    value: '₹10,000',
    detail: 'Cash Prizes & Special Awards',
    numericTarget: 10000,
    prefix: '₹',
  },
  {
    id: 'eligibility',
    label: 'ELIGIBILITY',
    value: 'All Colleges & All Branches',
    detail: 'National Level Participation',
  },
  {
    id: 'brunch',
    label: 'BRUNCH',
    value: 'Included',
    detail: 'Refreshments Provided On-Site',
  },
  {
    id: 'certificate',
    label: 'CERTIFICATE',
    value: 'For All Participants',
    detail: 'Official PCE ACM & ACM-W Recognition',
  },
];

// Modular Challenge Tracks — Problem statements will be displayed on the event day (no domains revealed right now)
export const CHALLENGE_DOMAINS: ChallengeDomain[] = [
  {
    id: 'track-01',
    number: '01',
    title: 'CHALLENGE TRACK 01',
    shortDescription:
      'Confidential Problem Statement — Will be displayed live at the venue on Event Day (22 October 2026).',
    problemStatement:
      'Problem statements will be displayed on the event day during the on-site orientation session. Teams will be able to review all tracks and select their preferred problem statement on the spot.',
    keyFocusAreas: [
      'Real-world problem statement revealed on 22 October 2026',
      'Full-stack or interactive frontend web application',
      'Responsive UI/UX and clean user workflow',
      'Live deployment and GitHub source code submission',
    ],
    suggestedAiCapabilities: [
      'AI-assisted ideation & architecture planning',
      'Rapid UI & component generation during the 4-hour sprint',
      'Smart AI feature integration tailored to the revealed problem',
    ],
    deliverableExample:
      'A functional, deployed AI-powered website or web application solving the revealed problem statement within the 4-hour coding window.',
    accentColor: 'violet',
  },
  {
    id: 'track-02',
    number: '02',
    title: 'CHALLENGE TRACK 02',
    shortDescription:
      'Confidential Problem Statement — Will be displayed live at the venue on Event Day (22 October 2026).',
    problemStatement:
      'Problem statements will be displayed on the event day during the on-site orientation session. Teams will be able to review all tracks and select their preferred problem statement on the spot.',
    keyFocusAreas: [
      'Real-world problem statement revealed on 22 October 2026',
      'Practical solution design & user-centric experience',
      'Effective utilization of modern AI tools',
      'Working live production URL & GitHub repository',
    ],
    suggestedAiCapabilities: [
      'AI-powered workflow automation or intelligent assistant features',
      'Code generation, debugging & responsive styling with AI tools',
      'Clear technical explanation during the 7-minute pitch',
    ],
    deliverableExample:
      'A functional, deployed AI-powered website or web application solving the revealed problem statement within the 4-hour coding window.',
    accentColor: 'cyan',
  },
  {
    id: 'track-03',
    number: '03',
    title: 'CHALLENGE TRACK 03',
    shortDescription:
      'Confidential Problem Statement — Will be displayed live at the venue on Event Day (22 October 2026).',
    problemStatement:
      'Problem statements will be displayed on the event day during the on-site orientation session. Teams will be able to review all tracks and select their preferred problem statement on the spot.',
    keyFocusAreas: [
      'Real-world problem statement revealed on 22 October 2026',
      'Innovative feature execution & clean architecture',
      'High-contrast, responsive interface across devices',
      'Complete GitHub repository with ACM collaborator access',
    ],
    suggestedAiCapabilities: [
      'Rapid prototyping with Google AI Studio, Gemini, ChatGPT, or Cursor',
      'Smart data processing and interactive UI components',
      'End-to-end deployment readiness within 4 hours',
    ],
    deliverableExample:
      'A functional, deployed AI-powered website or web application solving the revealed problem statement within the 4-hour coding window.',
    accentColor: 'amber',
  },
  {
    id: 'track-04',
    number: '04',
    title: 'CHALLENGE TRACK 04',
    shortDescription:
      'Confidential Problem Statement — Will be displayed live at the venue on Event Day (22 October 2026).',
    problemStatement:
      'Problem statements will be displayed on the event day during the on-site orientation session. Teams will be able to review all tracks and select their preferred problem statement on the spot.',
    keyFocusAreas: [
      'Real-world problem statement revealed on 22 October 2026',
      'End-to-end functional web application',
      'Intuitive UI/UX & seamless live demonstration',
      'Deployed live link ready for Pre-Judging & Final Pitch',
    ],
    suggestedAiCapabilities: [
      'AI-assisted research, UI generation & code implementation',
      'Intelligent user flows addressing the event-day challenge',
      'Structured 4–5 minute live demo + 2 minute Q&A',
    ],
    deliverableExample:
      'A functional, deployed AI-powered website or web application solving the revealed problem statement within the 4-hour coding window.',
    accentColor: 'blue',
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 'STEP 01',
    title: 'Registration',
    subtitle: 'Online Team Enrollment (Deadline: 15 Oct 2026)',
    description:
      'Register individually or as a team of 1–3 members using the official registration form. Entry fee is ₹100 per member.',
    badge: 'Pre-Event',
  },
  {
    step: 'STEP 02',
    title: 'Check-In & Orientation',
    subtitle: 'Venue Reporting & Briefing',
    description:
      'Participants report to the Computer Laboratory, IT Building, CT Department, PCE Nagpur for ID verification, lab seating, and official rules orientation.',
    badge: 'On-Site Morning',
  },
  {
    step: 'STEP 03',
    title: 'Problem Statements',
    subtitle: 'Displayed Live on Event Day',
    description:
      'Problem statements will be displayed on the event day! Four challenge tracks will be revealed on-site, and participants can choose ANY ONE problem statement to build.',
    badge: 'On-Site Reveal',
  },
  {
    step: 'STEP 04',
    title: 'Understand & Plan',
    subtitle: 'Architecture & Wireframing',
    description:
      'Analyze the problem, structure your core user journey, decide your tech stack, and plan your solution approach with your team.',
    badge: 'Strategy',
  },
  {
    step: 'STEP 05',
    title: 'BUILD WITH AI',
    subtitle: '4 Hours Actual Coding & Development',
    description:
      'Participants get 4 hours of dedicated coding and development time. You may freely use AI development tools to accelerate building.',
    highlights: [
      'Google AI Studio',
      'Gemini',
      'ChatGPT',
      'GitHub Copilot',
      'Cursor',
      'Other permitted AI development tools',
    ],
    badge: '4-Hour Sprint',
  },
  {
    step: 'STEP 06',
    title: 'GitHub + Deployment',
    subtitle: 'Source Code Push & Live Hosting',
    description:
      'Push the complete project to a GitHub repository, add the official ACM account as a collaborator, and deploy the working website/web application live.',
    badge: 'Submission',
  },
  {
    step: 'STEP 07',
    title: 'Pre-Judging',
    subtitle: 'Initial Technical & UI Evaluation',
    description:
      'Judges evaluate the submitted repositories and live deployed applications based on the official judging criteria.',
    badge: 'Evaluation',
  },
  {
    step: 'STEP 08',
    title: 'Final Presentation',
    subtitle: '4–5 Min Pitch + 2 Min Q&A',
    description:
      'Each team gets 4–5 minutes for project presentation and live demo, followed by 2 minutes of Q&A with the judging panel.',
    badge: '7-Min Pitch',
  },
  {
    step: 'STEP 09',
    title: 'Final Judging & Results',
    subtitle: 'Winner Announcement & Recognition',
    description:
      'Final evaluation scores are compiled, followed by winner announcements, ₹10,000 prize distribution, and certificates for all participants.',
    badge: 'Grand Finale',
  },
];

export const WHAT_TO_BUILD_REQUIREMENTS = [
  'Functional website/web application',
  'Meaningful solution to the selected problem',
  'Good UI/UX',
  'Responsive design',
  'AI integration/use where relevant',
  'Working deployment',
  'GitHub repository',
  'Clean and understandable code',
];

export const PERMITTED_TECH_STACKS = [
  'React',
  'HTML/CSS/JavaScript',
  'Next.js',
  'Vue',
  'Angular',
  'Node.js',
  'Any suitable web technology',
];

export const AI_ALLOWED_USES = [
  'Brainstorming',
  'Research',
  'UI generation',
  'Code generation',
  'Debugging',
  'Documentation',
  'Content generation',
  'Development assistance',
];

export const AI_TOOL_EXAMPLES = [
  'Google AI Studio',
  'Gemini',
  'ChatGPT',
  'GitHub Copilot',
  'Cursor',
  'Claude',
  'Other AI development tools',
];

export const SUBMISSION_CHECKLIST = [
  {
    number: '01',
    title: 'GitHub Repository Link',
    description: 'Complete source code pushed to an accessible repository with clear structure.',
  },
  {
    number: '02',
    title: 'Live Deployed Website / Web Application Link',
    description: 'Publicly reachable production URL (e.g., Vercel, Netlify, GitHub Pages, Render, Cloud Run).',
  },
  {
    number: '03',
    title: 'Team Details',
    description: 'Accurate names, college details, and contact info for all 1–3 team members.',
  },
  {
    number: '04',
    title: 'Selected Problem Statement / Domain',
    description: 'Clearly specify which of the 4 official challenge domains your project solves.',
  },
  {
    number: '05',
    title: 'Short Project Description',
    description: 'Concise overview of the problem addressed, core features, tech stack, and how AI was used.',
  },
];

export const JUDGING_STAGES: JudgingStage[] = [
  {
    stage: 'Stage 01',
    title: 'PRE-JUDGING',
    duration: 'Repository & Live URL Review',
    description: 'Submitted projects are reviewed by the evaluation panel based on:',
    points: [
      'Functionality',
      'Problem understanding',
      'Innovation',
      'AI usage',
      'UI/UX',
      'Technical implementation',
      'Deployment quality',
    ],
  },
  {
    stage: 'Stage 02',
    title: 'LIVE PRESENTATION',
    duration: '4–5 Minutes per Team',
    description: 'Participants present their working application live and explain:',
    points: [
      'Problem',
      'Solution',
      'Key features',
      'AI usage',
      'Technology used',
      'Live demonstration',
    ],
  },
  {
    stage: 'Stage 03',
    title: 'Q&A',
    duration: '2 Minutes per Team',
    description: 'Judges ask targeted questions to verify understanding and depth:',
    points: [
      'Technical decisions',
      'AI usage',
      'Architecture',
      'Features',
      'Challenges faced',
      'Future improvements',
    ],
  },
  {
    stage: 'Stage 04',
    title: 'FINAL JUDGMENT',
    duration: 'Cumulative Scoring & Awards',
    description: 'Final scores are calculated across all weighted criteria and winners are announced.',
    points: [
      '100-point weighted rubric compilation',
      'Overall Winner + Special Category selection',
      'On-stage prize & certificate presentation',
    ],
  },
];

// Editable Judging Criteria Data Object (Total = 100%)
export const JUDGING_CRITERIA: JudgingCriterion[] = [
  {
    id: 'innovation',
    title: 'Innovation & Creativity',
    percentage: 25,
    description: 'Originality of the concept, creative problem-solving angle, and standout feature differentiation.',
    keyQuestions: ['Does the solution offer a fresh approach?', 'Are features thoughtfully conceived for real users?'],
  },
  {
    id: 'problem-understanding',
    title: 'Problem Understanding & Relevance',
    percentage: 20,
    description: 'Depth of alignment with the chosen challenge domain and practical utility for the target audience.',
    keyQuestions: ['Does it directly solve the domain challenge?', 'Is the user workflow realistic and impactful?'],
  },
  {
    id: 'functionality',
    title: 'Functionality & Technical Implementation',
    percentage: 20,
    description: 'Completeness of working features, code quality, responsiveness, and error-free execution.',
    keyQuestions: ['Do core workflows run smoothly without breaking?', 'Can the team explain their code architecture?'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Design',
    percentage: 15,
    description: 'Visual clarity, intuitive navigation, mobile/desktop responsiveness, and accessible interface polish.',
    keyQuestions: ['Is the interface intuitive at first glance?', 'Is layout responsive across screen sizes?'],
  },
  {
    id: 'ai-usage',
    title: 'Effective AI Usage',
    percentage: 10,
    description: 'Meaningful integration of AI features in the product and/or smart usage of AI tools during development.',
    keyQuestions: ['How effectively was AI leveraged to build or power the app?', 'Does the team understand the AI-generated code?'],
  },
  {
    id: 'deployment-presentation',
    title: 'Deployment & Presentation',
    percentage: 10,
    description: 'Live accessible deployment URL, clean GitHub repository setup, and clarity of the 7-minute pitch.',
    keyQuestions: ['Is the live URL deployed and accessible?', 'Was the demo structured and delivered within time?'],
  },
];

export const PRESENTATION_STRUCTURE = [
  { step: '01', title: 'Problem', detail: 'Define the real-world pain point and who it affects.' },
  { step: '02', title: 'Solution', detail: 'Introduce your web application and its core value proposition.' },
  { step: '03', title: 'Key Features', detail: 'Highlight the standout workflows built during the 4 hours.' },
  { step: '04', title: 'AI Usage', detail: 'Explain which AI tools/models were used and how they helped.' },
  { step: '05', title: 'Technology Stack', detail: 'Share the frontend, backend, and deployment tools chosen.' },
  { step: '06', title: 'Live Demo', detail: 'Walk through the live deployed application in real time.' },
  { step: '07', title: 'Future Scope', detail: 'Outline how the project can scale next.' },
];

export const WHY_PARTICIPATE_ITEMS = [
  {
    title: 'Build with AI',
    description: 'Experience rapid full-stack product creation by combining your coding skills with modern AI tools.',
  },
  {
    title: 'Solve Real-World Problems',
    description: 'Tackle meaningful real-world problem statements revealed live on the event day.',
  },
  {
    title: 'Compete at National Level',
    description: 'Benchmark your speed, creativity, and engineering against top student builders across institutions.',
  },
  {
    title: 'Showcase UI/UX Skills',
    description: 'Craft high-contrast, responsive, user-centric interfaces with dedicated recognition for Best UI/UX.',
  },
  {
    title: 'Explore Modern AI Tools',
    description: 'Freely utilize Google AI Studio, Gemini, ChatGPT, GitHub Copilot, Cursor, and Claude in a live sprint.',
  },
  {
    title: 'Win Prizes',
    description: 'Compete for a ₹10,000 total prize pool along with special awards for Innovation and UI/UX.',
  },
  {
    title: 'Network with Developers',
    description: 'Collaborate on-site with fellow student developers, ACM chapter peers, and faculty mentors.',
  },
  {
    title: 'Certificate for Every Participant',
    description: 'Every registered participant who competes receives an official certificate of participation.',
  },
  {
    title: 'Recognition for Innovation',
    description: 'Stand out during live presentations in front of domain judges and institutional leadership.',
  },
];

export const PRIZE_CATEGORIES = [
  {
    badge: 'TOP HONOR',
    title: 'WINNER',
    subtitle: 'Prize + Recognition',
    description: 'Awarded to the highest-scoring team across all judging criteria for excellence in execution, problem-solving, and live presentation.',
    featured: true,
  },
  {
    badge: 'SPECIAL AWARD',
    title: 'BEST INNOVATION',
    subtitle: 'Special Prize',
    description: 'Recognizes the team that demonstrates the most creative concept, novel use of AI, and impactful problem-solving architecture.',
    featured: false,
  },
  {
    badge: 'SPECIAL AWARD',
    title: 'BEST UI/UX',
    subtitle: 'Special Prize',
    description: 'Celebrates exceptional visual design, intuitive user flow, responsive layout craft, and front-end polish.',
    featured: false,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Q1. Who can participate?',
    answer: 'Students from all colleges and all branches can participate.',
    category: 'general',
  },
  {
    id: 'q2',
    question: 'Q2. What is the team size?',
    answer: '1–3 members per team.',
    category: 'general',
  },
  {
    id: 'q3',
    question: 'Q3. How much is the registration fee?',
    answer: '₹100 per member.',
    category: 'general',
  },
  {
    id: 'q4',
    question: 'Q4. Can we use AI tools?',
    answer: 'Yes. Participants are free to use AI tools during development.',
    category: 'technical',
  },
  {
    id: 'q5',
    question: 'Q5. How much coding time is available?',
    answer: 'The overall event duration is 6 hours, including 4 hours of actual coding/development time.',
    category: 'technical',
  },
  {
    id: 'q6',
    question: 'Q6. Do we need to deploy our project?',
    answer: 'Yes. Teams must submit a working live deployment link.',
    category: 'submission',
  },
  {
    id: 'q7',
    question: 'Q7. Do we need a GitHub repository?',
    answer: 'Yes. The complete source code must be pushed to GitHub.',
    category: 'submission',
  },
  {
    id: 'q8',
    question: 'Q8. What should we submit?',
    answer: 'GitHub repository link, deployed website link, team details, selected challenge and project information.',
    category: 'submission',
  },
  {
    id: 'q9',
    question: 'Q9. Do we need to add ACM as a collaborator?',
    answer: 'Yes. Participants must add the official ACM GitHub account provided by the organizers as a collaborator.',
    category: 'submission',
  },
  {
    id: 'q10',
    question: 'Q10. How long is the presentation?',
    answer: '4–5 minutes presentation/demo followed by 2 minutes of Q&A.',
    category: 'judging',
  },
  {
    id: 'q11',
    question: 'Q11. Is the event online?',
    answer: 'No. It is an offline/on-site event at Priyadarshini College of Engineering, Nagpur.',
    category: 'general',
  },
  {
    id: 'q12',
    question: 'Q12. Will participants receive certificates?',
    answer: 'Yes. Certificates will be provided to all participants.',
    category: 'general',
  },
];

export const FACULTY_ORGANIZERS: OrganizerPerson[] = [
  {
    name: 'Mrs. Priyanka Padmane',
    role: 'Event Co-Coordinator',
    department: 'Department of Computer Technology',
  },
  {
    name: 'Dr. (Mrs.) R. A. Khan',
    role: 'Event Coordinator',
    department: 'Department of Computer Technology',
  },
  {
    name: 'Dr. (Mrs.) A. V. Dehankar',
    role: 'HOD, Computer Technology',
    department: 'Priyadarshini College of Engineering',
  },
  {
    name: 'Dr. G. M. Asutkar',
    role: 'Vice-Principal, PCE',
    department: 'Priyadarshini College of Engineering',
  },
  {
    name: 'Dr. S. A. Dhale',
    role: 'Principal, PCE',
    department: 'Priyadarshini College of Engineering',
  },
];

export const STUDENT_CONTACTS: StudentContact[] = [
  {
    name: 'Ritesh Dhakulkar',
    phone: '+91 85520 35048',
    cleanPhone: '+918552035048',
    role: 'Student Coordinator',
  },
  {
    name: 'Prem Rahangdale',
    phone: '+91 77748 60589',
    cleanPhone: '+917774860589',
    role: 'Student Coordinator',
  },
  {
    name: 'Tejas Chaudhary',
    phone: '+91 93568 02767',
    cleanPhone: '+919356802767',
    role: 'Student Coordinator',
  },
  {
    name: 'Kunjal Pardhi',
    phone: '+91 72498 15650',
    cleanPhone: '+917249815650',
    role: 'Student Coordinator',
  },
  {
    name: 'Alisha Sheikh',
    phone: '+91 77961 17495',
    cleanPhone: '+917796117495',
    role: 'Student Coordinator',
  },
];

export const COMMUNITY_BLOG_UPDATES: BlogPost[] = [
  {
    id: 'prep-guide-4hr-sprint',
    date: '05 October 2026',
    category: 'Preparation Guide',
    readTime: '3 min read',
    title: 'Mastering the 4-Hour AI Webathon Sprint: How to Plan, Build & Deploy on Time',
    excerpt:
      'With 4 hours of focused coding time at AI-FUSION 2026, structuring your time between ideation, AI-assisted scaffolding, deployment, and pitch prep is critical.',
    author: 'PCE ACM & ACM-W Technical Team',
    content: [
      'Minute 0–30: Review the official problem statements displayed on the event day and lock in a single high-impact user workflow rather than ten unfinished screens.',
      'Minute 30–180: Use AI tools like Google AI Studio, Gemini, Cursor, or Copilot to scaffold components rapidly—while reviewing every module so you can explain the architecture to judges.',
      'Minute 180–210: Push your source code to GitHub, invite the official ACM collaborator account, and verify your live production deployment link.',
      'Minute 210–240: Polish responsive UI states and rehearse your 4–5 minute live demo plus 2-minute Q&A.',
    ],
  },
  {
    id: 'ai-policy-explained',
    date: '02 October 2026',
    category: 'Official Rulebook',
    readTime: '2 min read',
    title: 'Why AI Tools Are Fully Permitted at AI-FUSION 2026 — And What Judges Actually Look For',
    excerpt:
      'AI can help you build it, but you must be able to explain it. Learn how our 100-point rubric evaluates both effective AI usage and deep technical comprehension.',
    author: 'Department of Computer Technology, PCE',
    content: [
      'Modern software engineering blends human architectural judgment with AI acceleration. At AI-FUSION 2026, you are encouraged to use any AI assistant for brainstorming, UI drafting, debugging, or documentation.',
      'During the 2-minute Q&A and pre-judging code review, judges will ask specific questions about your state management, component structure, and trade-offs.',
      'Teams that understand their code deeply and use AI to solve real domain pain points will score highest across Innovation (25%), Problem Relevance (20%), and Technical Implementation (20%).',
    ],
  },
  {
    id: 'github-deployment-checklist',
    date: '28 September 2026',
    category: 'Submission Protocol',
    readTime: '2 min read',
    title: 'GitHub Collaboration & Live Deployment Checklist for Webathon Teams',
    excerpt:
      'Every participating squad must submit a live working URL and a GitHub repository with the official ACM account added as a collaborator.',
    author: 'PCE ACM Student Chapter',
    content: [
      'Before the 4-hour coding window closes, ensure your project builds cleanly without local-only dependencies or broken asset paths.',
      'Deploy early (even after hour 2!) so that continuous pushes automatically update your live URL.',
      'In your GitHub repository, navigate to Settings → Collaborators → Add People, and invite the official ACM GitHub username announced during on-site orientation.',
    ],
  },
];
