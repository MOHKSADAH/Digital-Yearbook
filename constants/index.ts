import type { Student, Yearbook } from '../types';

export const students: Student[] = [
    {
        id: '1',
        firstName: 'Ahmad',
        lastName: 'Hassan',
        email: 'ahmad.hassan@email.com',
        major: 'Computer Science',
        graduationYear: 2024,
        profileImagePath:
            'https://ui-avatars.com/api/?name=Ahmad+Hassan&background=0D8ABC&color=fff',
        linkedInUrl: 'https://linkedin.com/in/ahmadhassan',
        portfolioUrl: 'https://ahmadhassan.dev',
        bio: 'Passionate full-stack developer with expertise in React and Node.js. Love solving complex problems and building user-friendly applications.',
    },
    {
        id: '2',
        firstName: 'Ali',
        lastName: 'Sameer',
        email: 'ali.sameer@email.com',
        major: 'Data Science',
        graduationYear: 2024,
        profileImagePath: 'https://ui-avatars.com/api/?name=Ali+Sameer&background=0D8ABC&color=fff',
        linkedInUrl: 'https://linkedin.com/in/alisameer',
        portfolioUrl: 'https://alisameer.github.io',
        bio: 'Data enthusiast with a strong background in machine learning and statistical analysis. Enjoys turning data into actionable insights.',
    },
    {
        id: '3',
        firstName: 'Mahdi',
        lastName: 'Saeed',
        email: 'mahdi.saeed@email.com',
        major: 'UX/UI Design',
        graduationYear: 2024,
        profileImagePath:
            'https://ui-avatars.com/api/?name=Mahdi+Saeed&background=0D8ABC&color=fff',
        linkedInUrl: 'https://linkedin.com/in/mahdisaeed',
        portfolioUrl: 'https://mahdisaeed.design',
        bio: 'Creative designer focused on user-centered design principles. Passionate about creating intuitive and accessible digital experiences.',
    },
];

export const yearbook: Yearbook[] = [
    {
        id: 'yearbook-2025',
        title: 'Digital Yearbook 2025',
        year: 2025,
        description:
            'Pioneers of the post-digital age, the class of 2025 pushed boundaries in AI ethics and sustainable tech',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2025&background=3a86ff&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2024',
        title: 'Legacy Yearbook 2024',
        year: 2024,
        description:
            'Overcoming pandemic challenges, these graduates demonstrated remarkable resilience in hybrid learning environments',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2024&background=8338ec&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2023',
        title: 'Visionaries Edition 2023',
        year: 2023,
        description:
            'The first class to experience full campus reopening, setting new standards for community engagement',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2023&background=ff006e&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2022',
        title: 'Phoenix Yearbook 2022',
        year: 2022,
        description:
            'Graduates who adapted to unprecedented changes, emerging stronger through remote collaboration',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2022&background=fb5607&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2021',
        title: 'Horizon Yearbook 2021',
        year: 2021,
        description:
            'Pioneers of virtual commencement, proving innovation thrives even in challenging times',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2021&background=ffbe0b&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2020',
        title: 'Resilience Edition 2020',
        year: 2020,
        description: 'The class that made history with our first fully digital graduation ceremony',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2020&background=3a86ff&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2019',
        title: 'Trailblazers Yearbook 2019',
        year: 2019,
        description:
            'Record-breaking research publications and startup launches from this exceptional class',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2019&background=8338ec&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2018',
        title: 'Golden Anniversary Edition',
        year: 2018,
        description: 'Celebrating 50 years of academic excellence with our most diverse class yet',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2018&background=ff006e&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2017',
        title: 'Innovators Yearbook',
        year: 2017,
        description: 'This class launched more student-led initiatives than any previous year',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2017&background=fb5607&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2016',
        title: 'Global Scholars Edition',
        year: 2016,
        description:
            'International collaboration reached new heights with this cohort of globally-minded graduates',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2016&background=ffbe0b&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2015',
        title: 'Milestone Yearbook',
        year: 2015,
        description: 'Our first class to achieve 100% internship participation before graduation',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2015&background=3a86ff&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2014',
        title: 'Renaissance Edition',
        year: 2014,
        description:
            'A perfect blend of arts and sciences defined this exceptionally creative class',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2014&background=8338ec&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2013',
        title: 'Vanguard Yearbook',
        year: 2013,
        description: 'Technology meet humanities in this forward-thinking graduating class',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2013&background=ff006e&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2012',
        title: 'Legends Edition',
        year: 2012,
        description:
            'Olympic athletes, published authors, and startup founders among these distinguished graduates',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2012&background=fb5607&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2011',
        title: 'Centennial Yearbook',
        year: 2011,
        description: 'Celebrating 100 years of tradition while embracing the future of education',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2011&background=ffbe0b&color=fff',
        students: students,
    },
    {
        id: 'yearbook-2010',
        title: 'Pioneer Edition',
        year: 2010,
        description: 'The first graduating class of our new millennium curriculum',
        coverImagePath: 'https://ui-avatars.com/api/?name=YB+2010&background=3a86ff&color=fff',
        students: students,
    },
];
