'use client'

import React, { useState } from 'react'
import { MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Comment {
    id: number
    author: string
    text: string
    timestamp: string
}

export function CommentsAndVoting() {
    const [showComments, setShowComments] = useState(false)
    const [votes, setVotes] = useState({ upvotes: 42, downvotes: 3 })
    const [comments, setComments] = useState<Comment[]>([
        {
            id: 1,
            author: 'Tech Enthusiast',
            text: 'This AI solution looks promising for customer service optimization!',
            timestamp: '2 hours ago'
        },
        {
            id: 2,
            author: 'Business Strategist',
            text: 'Interesting approach to reducing support ticket resolution time.',
            timestamp: '5 hours ago'
        }
    ])
    const [newComment, setNewComment] = useState('')

    const handleVote = (type: 'up' | 'down') => {
        setVotes(prev => ({
            ...prev,
            upvotes: type === 'up' ? prev.upvotes + 1 : prev.upvotes,
            downvotes: type === 'down' ? prev.downvotes + 1 : prev.downvotes
        }))
    }

    const addComment = () => {
        if (newComment.trim()) {
            const newCommentObj = {
                id: comments.length + 1,
                author: 'Current User',
                text: newComment,
                timestamp: 'Just now'
            }
            setComments([...comments, newCommentObj])
            setNewComment('')
        }
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="flex items-center space-x-4 mb-6">
                {/* Voting Section */}
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleVote('up')}
                        className="text-green-500 hover:bg-green-50"
                    >
                        <ThumbsUp className="h-5 w-5" />
                    </Button>
                    <span className="font-semibold">{votes.upvotes}</span>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleVote('down')}
                        className="text-red-500 hover:bg-red-50"
                    >
                        <ThumbsDown className="h-5 w-5" />
                    </Button>
                    <span className="font-semibold">{votes.downvotes}</span>
                </div>

                {/* Comments Toggle */}
                <Button
                    variant="outline"
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center space-x-2"
                >
                    <MessageCircle className="h-5 w-5" />
                    <span>{comments.length} Comments</span>
                </Button>
            </div>

            {/* Comments Section */}
            {showComments && (
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="pb-2">
                        <h3 className="text-xl font-bold text-white">Comments</h3>
                    </CardHeader>
                    <CardContent>
                        {/* Comment Input */}
                        <div className="mb-4 flex space-x-2">
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                                className="flex-grow p-2 bg-gray-800 text-white rounded border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Button
                                onClick={addComment}
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                Post
                            </Button>
                        </div>

                        {/* Comments List */}
                        <ScrollArea className="h-64">
                            {comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="border-b border-gray-800 py-3 last:border-b-0"
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-white">{comment.author}</span>
                                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                                    </div>
                                    <p className="text-gray-300">{comment.text}</p>
                                </div>
                            ))}
                        </ScrollArea>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}