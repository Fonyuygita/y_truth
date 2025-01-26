import { Startup } from '@/sanity/types'
import { Eye } from 'lucide-react'
import React from 'react'

const View = ({ post }: { post: Startup }) => {
    return (
        <>
            <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>{post?.views?.toLocaleString()} views</span>
            </div>

        </>
    )
}

export default View
