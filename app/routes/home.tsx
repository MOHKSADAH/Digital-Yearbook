import type { Route } from './+types/home';
import Button from '../components/Button';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Digital Yearbook - Home' },
        { name: 'description', content: 'Welcome to our Digital Yearbook!' },
    ];
}

export default function Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Digital Yearbook Home</h1>
            <Button>Home</Button>
        </div>
    );
}
