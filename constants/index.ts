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

export const yearbook: Yearbook = {
    id: 'yearbook-2024',
    title: 'Digital Yearbook 2024',
    year: 2024,
    description: 'Celebrating the achievements and memories of our graduating class of 2024',
    coverImagePath: 'https://ui-avatars.com/api/?name=Yearbook+2024&background=0D8ABC&color=fff',
    students: students,
};
