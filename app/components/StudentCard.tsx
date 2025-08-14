import React from 'react';

const StudentCard = ({
    student: {
        id,
        firstName,
        lastName,
        email,
        major,
        graduationYear,
        profileImagePath,
        linkedInUrl,
        portfolioUrl,
        bio,
    },
}: {
    student: Student;
}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
            <img
                src={profileImagePath}
                alt={`${firstName} ${lastName}`}
                className="w-24 h-24 rounded-full object-cover mb-4 block mx-auto border-4 border-black-100"
            />
            <h2 className="text-2xl font-semibold mb-1">{`${firstName} ${lastName}`}</h2>
            <p className="text-sm text-gray-500 mb-2">
                {major} • {graduationYear}
            </p>
            <p className="text-sm text-gray-400 mb-2">{email}</p>
            {bio && <p className="text-sm text-gray-700 mb-2">{bio}</p>}
            <div className="flex gap-3 justify-center mt-2">
                {linkedInUrl && (
                    <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                    >
                        LinkedIn
                    </a>
                )}
                {portfolioUrl && (
                    <a
                        href={portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                    >
                        Portfolio
                    </a>
                )}
            </div>
        </div>
    );
};

export default StudentCard;
