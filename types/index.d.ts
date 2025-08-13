export interface Yearbook {
    id: string;
    title: string;
    year: number;
    description?: string;
    coverImagePath: string;
    students: Student[];
}

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    major?: string;
    graduationYear: number;
    profileImagePath: string;
    linkedInUrl?: string;
    portfolioUrl?: string;
    bio?: string;
}
