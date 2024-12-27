import Image from 'next/image';
import { CheckCircle, Eye, Clock } from 'lucide-react';
// import { Post } from './post-types';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '@/type';
import { STARTUPS_QUERY } from '@/sanity/lib/query';
import { client } from '@/sanity/lib/client';

interface PostCardProps {
    post: Post;
}


const posts = await client.fetch(STARTUPS_QUERY)
console.log(JSON.stringify(posts, null, 2));
const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const formattedDate = formatDistanceToNow(new Date(post._createdAt), { addSuffix: true });

    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            {post.imageUrl && (
                <div className="relative h-48 w-full">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                    <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs">
                        {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm space-x-2">
                        <Clock className="size-4" />
                        <span>{formattedDate}</span>
                    </div>
                </div>

                <h2 className="text-lg font-bold text-white line-clamp-2">
                    {post.title}
                </h2>

                <p className="text-gray-400 line-clamp-3">
                    {post.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div>
                            <div className="flex items-center space-x-1">
                                <span className="text-sm font-semibold text-white">
                                    {post.author.name}
                                </span>
                                {post.author.verified && (
                                    <CheckCircle className="size-4 text-blue-500" />
                                )}
                            </div>
                            <p className="text-xs text-gray-500">Author</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400">
                        <Eye className="size-5" />
                        <span className="text-sm">
                            {post.views.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;