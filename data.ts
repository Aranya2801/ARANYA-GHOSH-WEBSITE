import type { Project, ResearchWork, VlogEntry, FavSong, FavMovie, LifeChapter } from '@/types'

export const LIFE_CHAPTERS: LifeChapter[] = [
  { year: '2002', era: 'the beginning', title: 'Born in West Bengal', body: 'Started this incredible journey in West Bengal, India. Grew up with deep curiosity about how things work — that curiosity would become the engine for everything.' },
  { year: '2018', era: 'school days', title: 'Class 10 — 95.42%', body: 'Birbhum Zilla School. Scored 668/700 in WBBSE. Friendships, first lessons in discipline, and a hunger to go further.' },
  { year: '2020', era: 'higher secondary', title: 'Class 12 Science — 94.40%', body: 'Pushed through the pandemic years to score 472/500. JEE Mains 94.23 percentile. The world was closing; my ambitions were opening.' },
  { year: '2020', era: 'college begins', title: 'BTech IT @ KIIT, Bhubaneswar', body: 'Left home for Bhubaneswar. Discovered machine learning, fell in love with AI research. Led the Data Science Group, photographed every campus memory.' },
  { year: '2023', era: 'research years', title: 'IIT-KGP + IIIT Nagpur Internships', body: 'The most transformative summer — two research internships, a published paper, and the realization that I want to spend my life at the frontier of AI.' },
  { year: '2024', era: 'graduation', title: 'BTech Complete — CGPA 9.22, Top 5%', body: 'Graduated with distinction. Four years of late nights, research papers, hackathons, and growth. Ready for the next chapter.' },
  { year: '2026', era: "what's next", title: 'GATE AIR 3 · Rutgers MS-MITA', body: 'GATE 2026 AIR 3 in DS & AI — ranked 3rd in India out of 100,000+ candidates. Heading to Rutgers Business School, NJ. PhD is the destination.' },
]

export const FAV_SONGS: FavSong[] = [
  { num: '01', title: 'Add your favourite song', artist: 'Artist name' },
  { num: '02', title: 'Add your favourite song', artist: 'Artist name' },
  { num: '03', title: 'Add your favourite song', artist: 'Artist name' },
  { num: '04', title: 'Add your favourite song', artist: 'Artist name' },
  { num: '05', title: 'Add your favourite song', artist: 'Artist name' },
  { num: '06', title: 'Add your favourite song', artist: 'Artist name' },
]

export const FAV_MOVIES: FavMovie[] = [
  { rank: '01', title: 'Add your fav film', genre: 'Genre', year: '—' },
  { rank: '02', title: 'Add your fav film', genre: 'Genre', year: '—' },
  { rank: '03', title: 'Add your fav film', genre: 'Genre', year: '—' },
  { rank: '04', title: 'Add your fav film', genre: 'Genre', year: '—' },
  { rank: '05', title: 'Add your fav film', genre: 'Genre', year: '—' },
  { rank: '06', title: 'Add your fav film', genre: 'Genre', year: '—' },
]

export const VLOG_ENTRIES: VlogEntry[] = [
  { id: '1', date: 'Apr 20, 2026', title: 'First day journaling on my website — this is the beginning of everything' },
  { id: '2', date: 'Apr 15, 2026', title: 'Got my GATE AIR 3 result — couldn\'t believe it. Called home immediately.' },
]

export const PROJECTS: Project[] = [
  { id: '1', num: '01', badge: 'PUBLISHED', title: 'Deep Radar Activity Classification', description: 'Deep convolutional autoencoder for radar-based classification of aided vs. unaided human activities. Co-authored journal paper from IIIT Nagpur internship.', tags: ['Python', 'TensorFlow', 'Signal Processing', 'AutoEncoder'], github: '#' },
  { id: '2', num: '02', badge: 'FULL STACK', title: 'Breast Cancer Detection — Medical AI', description: 'VGG-16 & ResNet with fine-tuning on mammogram datasets. React.js + Flask full-stack diagnostic interface with image upload & inference.', tags: ['CNN', 'Transfer Learning', 'React.js', 'Flask'], github: '#' },
  { id: '3', num: '03', badge: 'NLP', title: 'Multi-Model Sentiment Analysis', description: 'Benchmarked Logistic Regression, Naive Bayes & LSTM for sentiment classification. Deployed as a RESTful Flask API with BERT tokenizers.', tags: ['BERT', 'LSTM', 'Flask', 'NLTK'], github: '#' },
  { id: '4', num: '04', badge: 'TIME SERIES', title: 'Stock & Sales Forecasting Engine', description: 'ARIMA & LSTM models for stock price / sales forecasting. Walk-forward validation integrated with financial APIs as an interactive dashboard.', tags: ['LSTM', 'ARIMA', 'Pandas', 'APIs'], github: '#' },
  { id: '5', num: '05', badge: 'ML SYS', title: 'Hybrid Recommender Engine', description: 'Matrix Factorization, KNN & content-based filtering evaluated with precision@k, recall@k and RMSE on e-commerce data.', tags: ['Scikit-Learn', 'Matrix Factorization', 'KNN'], github: '#' },
  { id: '6', num: '06', badge: 'IoT', title: 'Activity Recognition via Wearables', description: 'Real-time physical activity classifier from smartwatch sensor data. CNN + Random Forest pipeline with live inference deployment.', tags: ['CNN', 'Random Forest', 'IoT', 'Real-time'], github: '#' },
]

export const RESEARCH_WORKS: ResearchWork[] = [
  {
    id: '1', type: 'published',
    badge: 'PEER-REVIEWED PUBLICATION',
    title: 'Deep Convolutional Autoencoder for Radar-Based Classification of Similar Aided and Unaided Human Activities',
    institution: 'IIIT Nagpur', period: 'May – Aug 2023',
    description: 'Designed and trained a deep convolutional autoencoder to distinguish subtle radar signatures between aided and unaided human motion. Built the full ML pipeline from radar data acquisition to preprocessing, feature extraction, autoencoder training, and evaluation. Co-authored and published in a peer-reviewed academic journal — sole student contributor.',
    tools: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
  },
  {
    id: '2', type: 'conference',
    badge: 'IIT KHARAGPUR',
    title: 'AI-Powered Navigation System for Autonomous Vehicles & Hadoop Cluster Fault Monitoring',
    institution: 'IIT Kharagpur', period: 'May – Jul 2023',
    description: 'Contributed to an AI-based path planning and obstacle avoidance system for autonomous vehicles using reinforcement learning and computer vision. Also investigated real-time fault detection in Hadoop distributed clusters through log analysis and anomaly detection. Recognized at a national conference.',
    tools: ['Python', 'OpenCV', 'TensorFlow', 'Hadoop', 'Linux'],
  },
  {
    id: '3', type: 'award',
    badge: 'BEST RESEARCH INITIATIVE AWARD',
    title: 'Heart Attack Risk Prediction Using AI & CNN-Based Species Classification',
    institution: 'KIIT University', period: 'May – Oct 2022',
    description: 'Developed CNN-based classification models to predict early-stage cardiac risk from patient health data. Applied VGG-16, ResNet with transfer learning; evaluated using AUC-ROC, F1-score, and confusion matrix. Awarded Best Research Initiative at KIIT DU.',
    tools: ['Python', 'Keras', 'TensorFlow', 'Pandas', 'Scikit-Learn', 'OpenCV'],
  },
]

export const SKILLS = [
  { cat: 'AI / ML / DL', items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn', 'Hugging Face', 'YOLO', 'OpenCV', 'NLTK', 'spaCy'] },
  { cat: 'Data Science', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Airflow', 'Spark', 'Hadoop'] },
  { cat: 'Programming', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C / C++', 'R', 'SQL'] },
  { cat: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'Firebase', 'Redis'] },
  { cat: 'Cloud / MLOps', items: ['AWS SageMaker', 'EC2 / S3', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'] },
  { cat: 'Web / APIs', items: ['React.js', 'Next.js', 'Node.js', 'Flask', 'Django', 'REST APIs', 'Spring Boot'] },
  { cat: 'Research Tools', items: ['Jupyter', 'LaTeX', 'Git / GitHub', 'W&B', 'MLflow', 'Linux', 'Colab'] },
]

export const CERTIFICATIONS = [
  { icon: '☁️', name: 'AWS Academy — Cloud Foundations', org: 'Amazon Web Services · Jan 2022' },
  { icon: '🤖', name: 'AWS Academy — ML Foundations', org: 'Amazon Web Services · Jun 2022' },
  { icon: '✨', name: 'Introduction to Generative AI', org: 'Google Cloud · Jul 2023' },
  { icon: '🐍', name: 'Machine Learning A-Z™', org: 'Udemy · Jul 2023' },
  { icon: '🧠', name: 'Artificial Intelligence A-Z™', org: 'Udemy · Jul 2023' },
  { icon: '🌐', name: 'CCNA: Introduction to Networks', org: 'Cisco · Jul 2023' },
  { icon: '🔒', name: 'Cybersecurity Essentials', org: 'Cisco · Jul 2023' },
  { icon: '💹', name: 'Data Visualisation: Business Insights', org: 'Tata Group (Forage) · Jul 2023' },
  { icon: '🏦', name: 'Software Engg Virtual Experience', org: 'JPMorganChase (Forage) · Jul 2023' },
  { icon: '🛒', name: 'Advanced Software Engg', org: 'Walmart Global Tech (Forage) · Jul 2023' },
  { icon: '⚡', name: 'Agile Methodology', org: 'Cognizant (Forage) · Jul 2023' },
  { icon: '☁️', name: 'Salesforce Developer Virtual', org: 'Salesforce · Jul 2023' },
]

export const INTERESTS = [
  { icon: '🧠', title: 'Deep Learning', sub: 'Neural architectures, transformers, autoencoders' },
  { icon: '👁️', title: 'Computer Vision', sub: 'Object detection, segmentation, medical imaging' },
  { icon: '💬', title: 'NLP', sub: 'Sentiment analysis, language models, BERT' },
  { icon: '📡', title: 'Signal Processing', sub: 'Radar data, sensor fusion, activity recognition' },
  { icon: '🚗', title: 'Autonomous Systems', sub: 'Path planning, obstacle avoidance, RL navigation' },
  { icon: '🏥', title: 'Medical AI', sub: 'Diagnostic models, cancer detection, clinical ML' },
  { icon: '⛏️', title: 'Data Mining', sub: 'Pattern discovery, knowledge extraction' },
  { icon: '🤖', title: 'Intelligent Agents', sub: 'Multi-agent systems, reinforcement learning' },
]
