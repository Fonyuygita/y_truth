import Image from 'next/image'
import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'

interface EnhancedImageProps {
    src: string
    alt?: string
    width?: number | string
    height?: number | string
    className?: string
    blurDataURL?: string
    priority?: boolean
    sizes?: string
}

export function EnhancedImage({
    src,
    alt,
    width,
    height,
    className,
    blurDataURL,
    priority = false,
    sizes = '(max-width: 768px) 100vw, 50vw'
}: EnhancedImageProps) {
    // Convert width and height to numbers if they're strings
    const parsedWidth = width ? Number(width) : undefined
    const parsedHeight = height ? Number(height) : undefined

    // Handle Sanity image URLs
    const imageUrl = src.startsWith('image-')
        ? urlFor(src).url()
        : src;

    return (
        <div className="relative w-full">
            <Image
                src={imageUrl}
                alt={alt || 'Image'}
                width={parsedWidth || 800}
                height={parsedHeight || 600}
                // fill={!parsedWidth && !parsedHeight}
                className={cn(
                    'object-cover transition-all duration-300 hover:scale-105',
                    className
                )}
                placeholder={blurDataURL ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                priority={priority}
                sizes={sizes}
            />
        </div>
    )
}