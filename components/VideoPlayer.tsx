"use client"

import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

interface VideoPlayerProps {
    src: string
    poster?: string
    className?: string
    controls?: boolean
    autoPlay?: boolean
}

export function VideoPlayer({
    src,
    poster,
    className,
    controls = true,
    autoPlay = false
}: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay)

    const togglePlay = () => {
        const video = document.getElementById('custom-video') as HTMLVideoElement
        if (video) {
            const playing = isPlaying ? video.pause() : video.play()
            setIsPlaying(!playing)
        }
    }

    return (
        <div className={`relative w-full group ${className}`}>
            <video
                id="custom-video"
                src={src}
                poster={poster}
                controls={controls}
                autoPlay={autoPlay}
                className="w-full rounded-lg shadow-lg"
                onEnded={() => setIsPlaying(false)}
            />

            {!controls && (
                <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-black/50 text-white rounded-full p-4 
                     opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
            )}
        </div>
    )
}