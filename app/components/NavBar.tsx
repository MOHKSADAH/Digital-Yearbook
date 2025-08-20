import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav className="bg-black py-4 max-w-xl mx-auto flex flex-col items-center justify-between rounded-4xl mt-5  outline-white-3 hover:shadow-xl shadow-lg transition-shadow duration-200">
            <div className="flex gap-12 justify-center">
                <Link
                    to="/"
                    className="text-white text-2xl hover:text-blue-100 font-medium transition"
                >
                    Home
                </Link>
                <Link
                    to="/yearbook"
                    className="text-white text-2xl hover:text-blue-100 font-medium transition"
                >
                    Yearbook
                </Link>
                <Link
                    to="/search"
                    className="text-white text-2xl hover:text-blue-100 font-medium transition"
                >
                    Search
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
