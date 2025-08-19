import React from 'react';
import YearBookCard from "~/components/YearbookCard";
import NavBar from "~/components/NavBar";
import { yearbook } from '../../constants';

const Yearbook = () => {
    return (
        <main>
            <div className="min-h-screen bg-gray-50">
                <NavBar />
                <div className="p-8">
                    <YearBookCard yearbook={yearbook[0]} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {yearbook.slice(1).map((yearbook: Yearbook) => (
                            <YearBookCard key={yearbook.id} yearbook={yearbook} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Yearbook;
