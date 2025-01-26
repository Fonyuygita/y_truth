import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/query'
// import { Startup } from '@/sanity/types'
import { Eye } from 'lucide-react'
import React from 'react'


// using ppr will be rendered dynamically while the page is being rendered
const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id });

    return (
        <>
            <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>{totalViews?.toLocaleString()} views</span>
            </div>

        </>
    )
}

export default View
