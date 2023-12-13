import './global.css';
import type {Metadata} from 'next';
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono';
import {Navbar} from './components/nav';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    metadataBase: new URL('https://tetr.dev'),
    title: {
        default: 'tetr.dev',
        template: '%s | tetr.dev',
    },
    description: 'backend software engineer, geek, and avid builder.',
    openGraph: {
        title: 'tetr.dev',
        description: 'backend software engineer, geek, and avid builder.',
        url: 'https://tetr.dev',
        siteName: 'tetr.dev',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'ELVzbSkyP1zd3wN43mYgbejLbm2xrSUxw6tvlk1QubU',
    }
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-[#111010]',
                GeistSans.variable,
                GeistMono.variable
            )}
        >
        <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar/>
            {children}
            <Analytics/>
            <SpeedInsights/>
        </main>
        </body>
        </html>
    );
}
