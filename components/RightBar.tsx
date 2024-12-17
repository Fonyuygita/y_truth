import Link from 'next/link'
import { X, CheckCircle } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'
import MobileRightSideBar from './MobileRightSideBar';
import Image from 'next/image';
import CustomScrollBar from './CustomScrollBar'

const TrustedNewsSources = [
    {
        name: "Reuters",
        description: "Global news organization",
        verified: true,
        logo: "/reuters-logo.png"
    },
    {
        name: "Associated Press",
        description: "Independent news agency",
        verified: true,
        logo: "/ap-logo.png"
    },
    {
        name: "BBC News",
        description: "British public service broadcaster",
        verified: true,
        logo: "/bbc-logo.png"
    },
    {
        name: "NPR",
        description: "Non-profit media organization",
        verified: true,
        logo: "/npr-logo.png"
    }
];

const RecentNewsUpdates = [
    {
        id: 1,
        title: "Global Climate Summit Announces Ambitious Targets",
        source: {
            name: "World News Network",
            logo: "/world-news-logo.png",
            verified: true
        },
        link: "/news/climate-summit"
    },
    {
        id: 2,
        title: "Tech Innovation Driving Sustainable Solutions",
        source: {
            name: "Tech Insight",
            logo: "/tech-insight-logo.png",
            verified: true
        },
        link: "/news/tech-innovation"
    },
    {
        id: 3,
        title: "Economic Trends Shaping Global Markets",
        source: {
            name: "Financial Times",
            logo: "/ft-logo.png",
            verified: true
        },
        link: "/news/economic-trends"
    },
    {
        id: 4,
        title: "Healthcare Breakthrough in Pandemic Research",
        source: {
            name: "Medical Today",
            logo: "/medical-today-logo.png",
            verified: true
        },
        link: "/news/healthcare-breakthrough"
    },
    {
        id: 5,
        title: "Space Exploration Milestone Achieved",
        source: {
            name: "Space Gazette",
            logo: "/space-gazette-logo.png",
            verified: true
        },
        link: "/news/space-exploration"
    },
    {
        id: 6,
        title: "Renewable Energy Investment Surge",
        source: {
            name: "Green Future",
            logo: "/green-future-logo.png",
            verified: true
        },
        link: "/news/renewable-energy"
    },
    {
        id: 7,
        title: "Global Education Reform Initiatives",
        source: {
            name: "Education Today",
            logo: "/education-today-logo.png",
            verified: true
        },
        link: "/news/education-reform"
    }
];

const MarkedAsFakeNews = [
    {
        id: 1,
        title: "Alien Invasion Imminent",
        description: "Completely fabricated story with no credible sources",
        image: "/fake.png"
    },
    {
        id: 2,
        title: "Miracle Cure Discovered",
        description: "Unverified medical claim spreading misinformation",
        image: "/fake1.png"
    },
    {
        id: 3,
        title: "Government Conspiracy Exposed",
        description: "Baseless conspiracy theory with zero evidence",
        image: "/fake.png"
    },
    {
        id: 4,
        title: "Celebrity Scandal Revealed",
        description: "Fabricated story designed to generate clicks",
        image: "/fake2.png"
    }
];


const RightBar = () => {
    return (
        <>
            <aside className="hidden lg:block lg:w-[350px] lg:p-4 overflow-y-auto custom-scrollbar max-h-screen">
                <div className="sticky top-0 bg-black/70 backdrop-blur-md z-10 pt-4">
                    <Input
                        placeholder="Search"
                        className="w-full mb-4 bg-gray-800 text-white border-none"
                    />
                </div>

                <div className="space-y-6 pr-2">
                    {/* Trusted News Sources */}
                    <div className="bg-gray-900 rounded-xl p-4 space-y-4">
                        <h3 className="text-xl font-bold mb-4">News Sources to Trust</h3>
                        {TrustedNewsSources.map((source, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <Avatar className="size-10">
                                    <AvatarImage src={source.logo} alt={source.name} />
                                    <AvatarFallback>{source.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="flex items-center space-x-1">
                                        <span className="font-semibold">{source.name}</span>
                                        {source.verified && (
                                            <CheckCircle className="size-4 text-blue-500" />
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-sm">{source.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent News Updates */}
                    <div className="bg-gray-900 rounded-xl p-4 space-y-4">
                        <h3 className="text-xl font-bold mb-4">Recent News Updates</h3>
                        {RecentNewsUpdates.map((news) => (
                            <Link
                                key={news.id}
                                href={news.link}
                                className="block hover:bg-gray-800 p-3 rounded-lg transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <Avatar className="size-10">
                                        <AvatarImage src={news.source.logo} alt={news.source.name} />
                                        <AvatarFallback>{news.source.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center space-x-1">
                                            <span className="font-semibold text-sm">{news.source.name}</span>
                                            {news.source.verified && (
                                                <CheckCircle className="size-4 text-blue-500" />
                                            )}
                                        </div>
                                        <p className="text-white text-sm font-medium">{news.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Marked as Fake News */}
                    <div className="bg-gray-900 rounded-xl p-4 space-y-4">
                        <h3 className="text-xl font-bold mb-4 text-red-500">Marked as Fake</h3>
                        {MarkedAsFakeNews.map((fake) => (
                            <div
                                key={fake.id}
                                className="relative overflow-hidden rounded-lg"
                            >
                                <div className="relative">
                                    <Image
                                        src={fake.image}
                                        alt={fake.title}
                                        width={350}
                                        height={200}
                                        className="w-full h-40 object-cover opacity-30 blur-sm"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center p-4 bg-black/70">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <X className="size-6 text-red-500" />
                                            <span className="text-red-500 font-bold">Fake News</span>
                                        </div>
                                        <p className="text-gray-300 text-sm">Anonymous Source</p>
                                        <p className="text-white font-semibold">{fake.title}</p>
                                        <p className="text-gray-400 text-xs mt-1">{fake.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
            <MobileRightSideBar />

            <CustomScrollBar />
        </>
    )
}

export default RightBar