import Image from 'next/image';
import me_touching_grass from 'public/images/me_touching_grass.png';
import crete from 'public/images/crete.jpg';
import malaiesti from 'public/images/malaiesti.jpg';
import camping from 'public/images/camping.jpg';
import barceloneta from 'public/images/barceloneta.jpg';
import me_at_barceloneta from 'public/images/me_at_barceloneta.jpg';
import logo from 'public/tetr/tetrdev-high-resolution-logo.png';


import avatar from 'app/avatar.jpg';
import ViewCounter from 'app/blog/view-counter';
import {
    // getLeeYouTubeSubs,
    // getVercelYouTubeSubs,
    // getViewsCount,
} from 'app/db/queries';
import {Suspense} from 'react';
import Link from 'next/link';

function Badge(props) {
    return (
        <a
            {...props}
            target="_blank"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
        />
    );
}

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

function ChannelLink({img, link, name}) {
    return (
        <div className="group flex w-full">
            <a
                href={link}
                target="_blank"
                className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
            >
                <div className="flex items-center space-x-3">
                    <div className="relative h-16">
                        <Image
                            alt={name}
                            src={img}
                            height={64}
                            width={64}
                            sizes="33vw"
                            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
                            priority
                        />
                        <div
                            className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
                            <img
                                alt="YouTube logo"
                                src="/youtube-logo.svg"
                                width="15"
                                height="11"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {name}
                        </p>
                        {/*<Suspense fallback={<p className="h-6"/>}>*/}
                        {/*    <Subs name={name}/>*/}
                        {/*</Suspense>*/}
                    </div>
                </div>
                <div
                    className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                    <ArrowIcon/>
                </div>
            </a>
        </div>
    );
}

async function Subs({name}: { name: string }) {
    let subscribers;
    if (name === '@tetr') {
        // subscribers = await getLeeYouTubeSubs();
    } else {
        // subscribers = await getVercelYouTubeSubs();
    }

    return (
        <p className="text-neutral-600 dark:text-neutral-400">
            {subscribers} subscribers
        </p>
    );
}

function BlogLink({slug, name}) {
    return (
        <div className="group">
            <a
                href={`/blog/${slug}`}
                className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
            >
                <div className="flex flex-col">
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">
                        {name}
                    </p>
                    {/*<Suspense fallback={<p className="h-6"/>}>*/}
                    {/*    <Views slug={slug}/>*/}
                    {/*</Suspense>*/}
                </div>
                <div
                    className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                    <ArrowIcon/>
                </div>
            </a>
        </div>
    );
}

async function Views({slug}: { slug: string }) {
    // let views = await getViewsCount();
    // return <ViewCounter allViews={views} slug={slug}/>;
}

export default function Page() {
    return (
//         (
//             <section>
//                 <h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
//                 <p className="prose prose-neutral dark:prose-invert">
//                     This is your new portfolio.
//                 </p>
//             </section>
//         );
// }
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                hey, I'm tetr 👋
            </h1>
            <p className="prose prose-neutral dark:prose-invert">
                {`I'm a backend software engineer, geek, and avid builder. I currently `}
                <Link href="/work">work</Link>
                {` as staff software engineer at `}
                <span className="not-prose">
          <Badge href="https://www.adswizz.com/">
            Adswizz
          </Badge>
        </span>
                {`, in the  `}
                <span className="not-prose">
                <Badge href="https://www.adswizz.com/innovation-labs/">
                    Innovation Labs
                </Badge>
                      </span>
                {` team, crafting backend systems that are blazingly fast and handle massive concurrency while delivering business value. 
                It's all about building highly available systems and pushing the limits of digital audio tech. 
                Constantly innovating to integrate ads seamlessly with user experience.
                It's an engineer's playground where code meets creativity in the realm of audio advertising.
                `}
            </p>
            <div className="columns-2 sm:columns-3 gap-4 my-8">
                <div className="relative h-40 mb-4">
                    <Image
                        alt="Me speaking on stage at React Summit about the future of Next.js"
                        src={me_touching_grass}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80 mb-4 sm:mb-0">
                    <Image
                        alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                        src={crete}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-[-16px] sm:object-center"
                    />
                </div>
                <div className="relative h-40 sm:h-80 sm:mb-4">
                    <Image
                        alt="Me standing on stage at Reactathon delivering the keynote"
                        src={malaiesti}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-top sm:object-center"
                    />
                </div>
                <div className="relative h-40 mb-4 sm:mb-0">
                    <Image
                        alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                        src={camping}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-40 mb-4">
                    <Image
                        alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                        src={barceloneta}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80">
                    <Image
                        alt="My badge on top of a pile of badges from a Vercel meetup we held"
                        src={me_at_barceloneta}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    This site however is for my personal projects. Here I drop my personal thoughts on
                    various topics that are separate from my work at Adswizz. I just like to nerd out on stuff and write
                    about
                    things I've learned and built.
                </p>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Also it would be nice if <Link href="https://www.twitch.tv/theprimeagen">the
                    Primeagen</Link>{' would react to any of the conten'}
                    t <Link href="/blog">here</Link>. I'm a big fan of his content and I think he is definitly worth
                    checking out.
                    He works at <Link href={"https://www.netflix.com/"}>Netflix</Link>, btw.
                </p>
            </div>
            <div className="my-8 flex flex-col space-y-4 w-full">
                <BlogLink
                    name="Hello world!"
                    slug="hello-world"
                />

            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    The inspiration for this site came from:{' '}
                    <Link href="https://leerob.io/">leerob.io</Link>. I liked the format and the tech stack
                    (not to mention the content) so I decided to fork it and make it my own. I'm a big fan of open
                    source and I think it's a crucial part of the tech ecosystem.
                </p>
                <p>In my leisure time I enjoy hiking, trail running, cooking, and playing Elden Ring</p>
            </div>
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/tetr_cloud"
                    >
                        <ArrowIcon/>
                        <p className="h-7 ml-2">follow me</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://tetr1.substack.com/"
                    >
                        <ArrowIcon/>
                        <p className="h-7 ml-2">get email updates</p>
                    </a>
                </li>
            </ul>

        </section>
    );
}
