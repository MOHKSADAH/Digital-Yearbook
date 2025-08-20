import NavBar from '../components/NavBar';
import Footer from '~/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen ">
            <div>
                <NavBar />
                <div className="flex flex-col items-center justify-center mt-32">
                    <h1 className="text-6xl font-extrabold text-blue-900 mb-8 text-center drop-shadow-lg">
                        Welcome to the Digital Yearbook
                    </h1>
                    <p className="text-2xl text-gray-700 mb-12 text-center max-w-2xl">
                        Explore memories, achievements, and connections. Browse yearbooks, discover
                        student profiles, and celebrate every class.
                    </p>
                    <a href="/yearbook">
                        <button className="px-12 py-6 bg-blue-900 text-white rounded-full text-2xl font-semibold shadow-xl hover:bg-blue-700 transition-all duration-150">
                            View Yearbooks
                        </button>
                    </a>
                </div>
            </div>
            <Footer />
        </main>
    );
}
