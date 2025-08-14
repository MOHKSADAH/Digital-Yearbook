import type { Route } from './+types/home';
import Button from '../components/Button';
import StudentCard from '../components/StudentCard';
import NavBar from '../components/NavBar';
import { students } from '../../constants';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Digital Yearbook - Home' },
        { name: 'description', content: 'Welcome to our Digital Yearbook!' },
    ];
}

export default function Home() {
    return (
        <main>
            <div className="min-h-screen bg-gray-50">
                <NavBar />
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {students.map((student: Student) => (
                            <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
