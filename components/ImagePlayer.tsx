import Image from 'next/image'
import { cn } from '@/lib/utils'

interface EnhancedImageProps {
    src: string
    alt?: string | any
    width?: number
    height?: number
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
    return (
        <div className="relative w-full">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={!width && !height}
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