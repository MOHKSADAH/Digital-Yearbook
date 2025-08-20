import React from 'react';
import type { Yearbook } from '../../types';

const YearBookCard = ({
    yearbook: { id, title, year, description, coverImagePath, students },
}: {
    yearbook: Yearbook;
}) => {
    return (
        <div className="bg-white rounded-md shadow-lg p-6 pt-4 flex flex-col justify-evenly hover:shadow-xl transition-shadow relative min-h-[230px] md:height-[280px]">
            <img
                src={coverImagePath}
                alt=""
                className="rounded-full object-cover absolute top-2.5 right-2.5 h-10 w-10"
            />
            <h3 className="font-bold font-mono">Class of {year}</h3>
            <p className="text-sm font-mono font-light">{description}</p>
        </div>
    );
};

export default YearBookCard;
