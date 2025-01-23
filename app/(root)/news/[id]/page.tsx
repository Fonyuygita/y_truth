import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Eye, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/query';
import { notFound } from 'next/navigation';

// Dummy data
const dummyPost = {
    _id: '1',
    title: 'Revolutionary AI Startup Transforms Customer Service',
    description: 'An innovative AI solution that leverages advanced natural language processing to provide unprecedented customer support experiences.',
    pitch: 'Our AI-powered platform uses machine learning algorithms to understand customer intent, providing personalized and instant resolutions. By integrating cutting-edge NLP technology, we reduce support ticket resolution time by 70% and increase customer satisfaction rates.',
    image: 'https://i.ibb.co/wMYQ9JW/image-4.jpg',
    category: 'AI & Machine Learning',
    _createdAt: new Date().toISOString(),
    views: 12543,
    author: {
        name: 'Alex Rodriguez',
        url: 'https://pbs.twimg.com/profile_images/1715657711570780160/D9Zv44VS_400x400.jpg'
    },
    tags: ['AI', 'CustomerService', 'MachineLearning', 'Startup']
};

export default async function PostDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const post = dummyPost;
    const id = (await params).id;

    // fetch post
    const posts = await client.fetch(STARTUP_BY_ID_QUERY, { id })
    console.log("item post is", posts)
    const formattedDate = formatDistanceToNow(new Date(posts._createdAt), { addSuffix: true });


    if (!posts) return notFound()

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navigation Back */}
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm p-4">
                <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Posts</span>
                </Link>
            </div>

            {/* Hero Section with Cover Image */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                    src={posts.image}
                    alt={posts.title}
                    fill
                    className="object-cover opacity-30 filter brightness-50"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-3xl mx-auto w-full">
                        <Badge variant="secondary" className="mb-2">
                            {post.category}
                        </Badge>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {post.title}
                        </h1>

                        {/* Post Metadata */}
                        <div className="flex items-center space-x-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Eye className="h-5 w-5" />
                                <span>{post.views.toLocaleString()} views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-4 py-8">
                {/* Author Section */}
                <div className="flex items-center space-x-4 mb-8">
                    <Image
                        src={post.author.url}
                        alt={post.author.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">{post.author.name}</span>
                            <CheckCircle className="h-5 w-5 text-blue-500" />
                        </div>
                        <p className="text-gray-400 text-sm">Author</p>
                    </div>
                </div>

                {/* Description */}
                <Card className="mb-6 bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4 text-white">Description</h2>
                        <p className="text-gray-300">{post.description}</p>
                    </CardContent>
                </Card>

                {/* Pitch */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4 text-white">Pitch</h2>
                        <p className="text-gray-300">{post.pitch}</p>
                    </CardContent>
                </Card>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-gray-300">
                            #{tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}