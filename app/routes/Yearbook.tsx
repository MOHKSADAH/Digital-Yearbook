import React, { useState } from 'react';
import type { Student, Yearbook } from '../../types';
import YearBookCard from '../components/YearbookCard';
import StudentCard from '../components/StudentCard';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import { yearbook } from '../../constants';

const Yearbook = () => {
    const [selectedYearbook, setSelectedYearbook] = useState<Yearbook | null>(null);

    return (
        <main>
            <div className="min-h-screen">
                <NavBar />
                <div className="p-8">
                    {!selectedYearbook ? (
                        <div>
                            <h1 className="text-3xl font-bold mb-8 text-center">
                                Choose a Yearbook
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                                {yearbook.map((book: Yearbook) => (
                                    <div
                                        key={book.id}
                                        className="cursor-pointer transform hover:scale-105 transition-transform"
                                        onClick={() => setSelectedYearbook(book)}
                                    >
                                        <YearBookCard yearbook={book} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h1 className="text-3xl font-bold">{selectedYearbook.title}</h1>
                                <Button onClick={() => setSelectedYearbook(null)}>
                                    Back to Yearbooks
                                </Button>
                            </div>
                            <p className="text-gray-600 mb-6">{selectedYearbook.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {selectedYearbook.students.map((student: Student) => (
                                    <StudentCard key={student.id} student={student} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Yearbook;
