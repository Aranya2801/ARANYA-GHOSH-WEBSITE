/**
 * Single source of truth for résumé / research content.
 * Everything here is taken from Aranya's own résumé document — edit freely.
 * Daily writing lives in /content (Markdown), not here.
 */

export interface Project {
  title: string
  category: string
  year: string
  summary: string
  tags: string[]
  github?: string
}

export interface Experience {
  kind: 'published' | 'conference' | 'award'
  badge: string
  role: string
  org: string
  place: string
  period: string
  title: string
  bullets: string[]
  tools: string[]
}

export interface Chapter {
  year: string
  era: string
  title: string
  body: string
}

export const STATS = [
  { value: '9.22', label: 'BTech CGPA' },
  { value: 'AIR 3', label: 'GATE DS & AI' },
  { value: '1', label: 'Published paper' },
  { value: '3', label: 'Research internships' },
  { value: '6', label: 'ML projects' },
]

export const EDUCATION = [
  {
    degree: 'MS — Information Technology & Analytics (MITA)',
    school: 'Rutgers Business School, Rutgers University',
    place: 'New Brunswick, NJ, USA',
    period: 'Fall 2026 – (incoming)',
    badge: 'INCOMING',
    notes: [
      'Focus: data science, machine learning, business analytics, database systems, IT strategy.',
      'Seeking Research Assistant (RA) and Teaching Assistant (TA) positions in AI/ML/Data Science.',
      'Long-term goal: PhD in Computer Science / AI / Data Science.',
    ],
  },
  {
    degree: 'BTech — Information Technology',
    school: 'Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar',
    place: 'Odisha, India',
    period: 'Sep 2020 – Sep 2024',
    badge: '9.22 / 10',
    notes: [
      'First Class with Distinction; top 5% of the department.',
      'Coursework: Machine Learning, Deep Learning, DSA, Computer Vision, DBMS, Cloud Computing, Software Engineering, Statistics.',
    ],
  },
  {
    degree: 'Class 12 — Science (WBCHSE)',
    school: 'Birbhum Zilla School',
    place: 'West Bengal, India',
    period: '2020',
    badge: '94.40%',
    notes: ['472 / 500.'],
  },
  {
    degree: 'Class 10 (WBBSE)',
    school: 'Birbhum Zilla School',
    place: 'West Bengal, India',
    period: '2018',
    badge: '95.42%',
    notes: ['668 / 700.'],
  },
]

export const EXAMS = [
  { exam: 'GATE 2026 — Data Science & AI', result: 'AIR 3 · 81.33 / 100', note: '998 normalised · 100,000+ candidates', year: '2026', highlight: true },
  { exam: 'GATE 2026 — CS & IT', result: 'AIR 147 · 73.89 / 100', note: '863 normalised', year: '2026', highlight: false },
  { exam: 'JEE Main', result: '94.23 percentile', note: 'National engineering entrance', year: '2020', highlight: false },
  { exam: 'KIITEE', result: '91.23%', note: 'University entrance exam', year: '2020', highlight: false },
  { exam: 'WBCHSE — Class 12', result: '94.40% (472/500)', note: 'Science stream', year: '2020', highlight: false },
  { exam: 'WBBSE — Class 10', result: '95.42% (668/700)', note: 'State board', year: '2018', highlight: false },
]

export const EXPERIENCE: Experience[] = [
  {
    kind: 'published',
    badge: 'Peer-reviewed publication',
    role: 'Research Intern — Machine Learning & Signal Processing',
    org: 'IIIT Nagpur',
    place: 'Nagpur, Maharashtra',
    period: 'May – Aug 2023',
    title: 'Deep Convolutional Autoencoder for Radar-Based Classification of Similar Aided and Unaided Human Activities',
    bullets: [
      'Designed and trained a deep convolutional autoencoder to distinguish subtle radar signatures between aided and unaided human motion — a hard classification problem with real surveillance applications.',
      'Built the full ML pipeline: radar data acquisition → preprocessing → feature extraction → autoencoder training → evaluation (accuracy, precision, recall).',
      'Co-authored and published a peer-reviewed journal paper; sole student contributor from KIIT among a team of senior researchers.',
    ],
    tools: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
  },
  {
    kind: 'conference',
    badge: 'IIT Kharagpur',
    role: 'Research Intern — AI & Robotics',
    org: 'IIT Kharagpur',
    place: 'Kharagpur, West Bengal',
    period: 'May – Jul 2023',
    title: 'AI-Powered Navigation for Autonomous Vehicles & Hadoop Cluster Fault Monitoring',
    bullets: [
      'Contributed to an AI-based path-planning and obstacle-avoidance system using reinforcement learning and computer vision.',
      'Investigated real-time fault detection in Hadoop clusters via log analysis and anomaly detection.',
      'Supported testing and validation across simulated navigation environments; the project received positive recognition at a national conference.',
    ],
    tools: ['Python', 'OpenCV', 'TensorFlow', 'Hadoop', 'Linux'],
  },
  {
    kind: 'award',
    badge: 'Best Research Initiative',
    role: 'Research Intern — Medical AI & Deep Learning',
    org: 'School of Computer Engineering, KIIT University',
    place: 'Bhubaneswar, Odisha',
    period: 'May – Oct 2022',
    title: 'Predicting Heart Attack Risk Using AI & CNN-Based Species Classification',
    bullets: [
      'Developed CNN-based models to predict early-stage cardiac risk from patient health data and imaging features.',
      'Applied transfer learning (VGG-16, ResNet) and custom CNNs; evaluated with AUC-ROC, F1-score and confusion matrices.',
      'Awarded “Best Research Initiative” at KIIT DU for the quality and impact of the research.',
    ],
    tools: ['Python', 'Keras', 'TensorFlow', 'Pandas', 'Scikit-Learn', 'OpenCV'],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Deep Radar Activity Classification',
    category: 'Published',
    year: '2023',
    summary: 'Deep convolutional autoencoder for radar-based classification of human activities — the primary contribution to a co-authored journal paper (IIIT Nagpur).',
    tags: ['Python', 'TensorFlow', 'Signal Processing', 'Autoencoder'],
  },
  {
    title: 'Breast Cancer Detection — Medical Imaging AI',
    category: 'Full stack',
    year: '2023',
    summary: 'VGG-16 and ResNet fine-tuned on mammogram datasets for binary classification, with a React.js + Flask interface for upload, inference and visualisation.',
    tags: ['CNN', 'Transfer Learning', 'React.js', 'Flask'],
  },
  {
    title: 'Multi-Model Sentiment Analysis Platform',
    category: 'NLP',
    year: '2023',
    summary: 'Benchmarked Logistic Regression, Naive Bayes and LSTM on social-media and review data; shipped the best model as a RESTful Flask API.',
    tags: ['BERT', 'LSTM', 'Flask', 'NLTK', 'spaCy'],
  },
  {
    title: 'Stock Price & Sales Forecasting Engine',
    category: 'Time series',
    year: '2023',
    summary: 'ARIMA and LSTM forecasters with walk-forward validation for realistic backtesting; financial-API ingestion and an interactive dashboard.',
    tags: ['LSTM', 'ARIMA', 'Pandas', 'APIs'],
  },
  {
    title: 'Hybrid Recommender Engine',
    category: 'ML systems',
    year: '2023',
    summary: 'Matrix factorisation, KNN and content-based filtering on e-commerce interactions, compared with precision@k, recall@k and RMSE.',
    tags: ['Scikit-Learn', 'Matrix Factorization', 'KNN'],
  },
  {
    title: 'Activity Recognition via Wearable Sensors',
    category: 'IoT',
    year: '2023',
    summary: 'Real-time activity classifier (walking, running, sleeping) from smartwatch accelerometer/gyroscope data using CNN and Random Forest.',
    tags: ['CNN', 'Random Forest', 'IoT', 'Real-time'],
  },
]

export const SKILLS = [
  { group: 'AI / ML / DL', items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn', 'Hugging Face Transformers', 'YOLO', 'OpenCV', 'NLTK', 'spaCy'] },
  { group: 'Data science', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Apache NiFi', 'Airflow', 'Hadoop', 'Spark'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Firebase', 'Redis'] },
  { group: 'Programming', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'R', 'SQL'] },
  { group: 'Cloud & MLOps', items: ['AWS (SageMaker, EC2, S3, Lambda)', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'] },
  { group: 'Web & APIs', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Django', 'REST APIs', 'Spring Boot', 'AngularJS'] },
  { group: 'Research tools', items: ['Jupyter', 'LaTeX', 'Git / GitHub', 'VS Code', 'Linux', 'Colab', 'Weights & Biases', 'MLflow'] },
  { group: 'Other', items: ['Salesforce', 'Apache Kafka', 'Terraform', 'Agile / Scrum', 'Cybersecurity fundamentals'] },
]

export const CERTIFICATIONS = [
  { name: 'AWS Academy — Cloud Foundations', org: 'Amazon Web Services', date: 'Jan 2022' },
  { name: 'AWS Academy — Machine Learning Foundations', org: 'Amazon Web Services', date: 'Jun 2022' },
  { name: 'Introduction to Generative AI', org: 'Google Cloud Skills Boost', date: 'Jul 2023' },
  { name: 'Machine Learning A-Z™ (AI, Python & R)', org: 'Udemy', date: 'Jul 2023' },
  { name: 'Artificial Intelligence A-Z™ 2023', org: 'Udemy', date: 'Jul 2023' },
  { name: 'Data Structures & Algorithms (C/C++)', org: 'Udemy', date: 'Jul 2023' },
  { name: 'CCNA: Introduction to Networks', org: 'Cisco', date: 'Jul 2023' },
  { name: 'Cybersecurity Essentials', org: 'Cisco', date: 'Jul 2023' },
  { name: 'Introduction to Cybersecurity', org: 'Cisco', date: 'Jul 2023' },
  { name: 'Problem Solving (Intermediate)', org: 'HackerRank', date: 'Sep 2022' },
  { name: 'Software Engineering Virtual Experience', org: 'JPMorgan Chase (Forage)', date: 'Jul 2023' },
  { name: 'Advanced Software Engineering Virtual Experience', org: 'Walmart Global Tech (Forage)', date: 'Jul 2023' },
  { name: 'Data Visualisation: Business Insights', org: 'Tata Group (Forage)', date: 'Jul 2023' },
  { name: 'Agile Methodology Virtual Experience', org: 'Cognizant (Forage)', date: 'Jul 2023' },
  { name: 'Salesforce Developer Virtual Internship', org: 'Salesforce', date: 'Jul 2023' },
  { name: 'AMCAT Business Certification', org: 'SHL', date: 'Nov 2022' },
]

export const LEADERSHIP = [
  {
    role: 'Student Coordinator — Data Science Group',
    org: 'KIIT University',
    period: 'Jul 2021 – May 2024',
    body: 'Organised ML workshops, hackathons, study groups and research-awareness events for 200+ members. Mentored juniors in Python, ML fundamentals and research methods; helped 10+ students finish their first ML projects.',
  },
  {
    role: 'Volunteer & Photographer — Khawab (social initiative)',
    org: 'Khawab',
    period: 'Jun 2021 – May 2024',
    body: 'Community outreach focused on education and social welfare; documented the initiatives through photography.',
  },
  {
    role: 'Still Photographer — Kreative Eye & TPH',
    org: 'KIIT campus media',
    period: 'Feb 2021 – May 2024',
    body: 'Covered technical fests, cultural events and research symposia.',
  },
]

export const INTERESTS = [
  { title: 'Deep learning', sub: 'Neural architectures, autoencoders, transfer learning' },
  { title: 'Computer vision', sub: 'Detection, medical imaging, OpenCV pipelines' },
  { title: 'NLP', sub: 'Sentiment analysis, transformers, BERT' },
  { title: 'Signal processing', sub: 'Radar data, wearable sensors, activity recognition' },
  { title: 'Autonomous systems', sub: 'Path planning, obstacle avoidance, RL navigation' },
  { title: 'Medical AI', sub: 'Diagnostic models and clinical ML' },
  { title: 'Data mining', sub: 'Pattern discovery and knowledge extraction' },
  { title: 'Intelligent agents', sub: 'Autonomous agents and reinforcement learning' },
]

/** Facts only — add your own words in `body` whenever you like. */
export const CHAPTERS: Chapter[] = [
  { year: '2017', era: 'School', title: 'Birbhum Zilla School', body: 'Secondary and higher-secondary schooling in West Bengal — Class 10 (95.42%, 2018) and Class 12 Science (94.40%, 2020).' },
  { year: '2020', era: 'Entrance exams', title: 'JEE Main & KIITEE', body: 'JEE Main 94.23 percentile; KIITEE 91.23%. Joined KIIT University, Bhubaneswar, in September.' },
  { year: '2021', era: 'College', title: 'Data Science Group, photography & Khawab', body: 'Became Student Coordinator of the KIIT Data Science Group, and started shooting campus events and volunteering with Khawab.' },
  { year: '2022', era: 'First research', title: 'Medical AI at KIIT', body: 'Six months of research on cardiac-risk prediction with CNNs — awarded Best Research Initiative.' },
  { year: '2023', era: 'Research summer', title: 'IIT Kharagpur & IIIT Nagpur', body: 'Autonomous-vehicle navigation at IIT-KGP and radar-based activity classification at IIIT-N, leading to a peer-reviewed paper.' },
  { year: '2024', era: 'Graduation', title: 'BTech in IT — 9.22 CGPA', body: 'Graduated with First Class with Distinction, top 5% of the department.' },
  { year: '2026', era: 'Next', title: 'GATE AIR 3 · Rutgers', body: 'GATE 2026 — AIR 3 in Data Science & AI (81.33/100) and AIR 147 in CS & IT. Starting the MITA programme at Rutgers Business School in Fall 2026, with a PhD in AI/ML as the long-term goal.' },
]

export const HOBBIES = [
  { title: 'Photography', body: 'Still photographer for KIIT campus media (Kreative Eye & TPH) — fests, symposia, and community events.' },
  { title: 'Volunteering', body: 'Three years with Khawab, a social initiative focused on education and welfare.' },
  { title: 'Teaching & community', body: 'Running workshops and mentoring juniors through their first ML projects.' },
]

/** Fill these in and the "Favourites" section appears on /diary. Empty = hidden. */
export const FAV_SONGS: { title: string; artist: string }[] = []
export const FAV_MOVIES: { title: string; note?: string }[] = []
