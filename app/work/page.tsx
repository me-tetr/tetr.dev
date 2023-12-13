import Link from "next/link";

export default function Page() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p></p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Adsiwzz</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Staff Software Engineer, 2016 — 2023
                </p>
                <p>I joined <Link href={'https://adswizz.com'}>Adswizz</Link> straight out of the uni in the Research and
                    Innovation team led by the CTO at the time. Focus was and still is on building *the next big thing*
                    in audio advertising. Started out with building java spring services and custom ETL pipelines for
                    our VIP customers. At that time things got mainly done using AWS EC2 instances and unfortunately for
                    me, who only previously dealt with (very) small data and no concern whatsoever for performance, we
                    were dealing with real big data. I learned a lot about distributed systems, performance and
                    scalability.

                    I was fortunate to have a very talented team around me and I learned a lot from them.
                    Things changed since those early days and today the combination of Redash and AWS Athena (along with
                    other major infra changes across the org) serves us well. Then AWS lambda also became a thing so we
                    explored that avenue as well and even though serverless is (definitely) not a silver bullet it does
                    have its place. Nowadays with the ubiquity of containers we use a mix of AWS ECS and kube for our
                    workloads.

                    Although I can't disclose everything I've done here are some of the highlights:
                    <ul>
                        <li>Software Engineer.

                            Built a {' '}
                            <Link href={"https://www.adswizz.com/navigating-identity-and-privacy-concerns-in-audio-advertising/"}>system</Link>
                            {' '}that was
                            responsible for raising {' '}
                            <Link href={"https://www.comscore.com/Insights/Blog/What-is-Advertising-Addressability"}>addressability</Link>.
                            The system is still maintained today and was continuously evolved and changed from
                            its initial design to accommodate for current data privacy policies.
                            Researched, implemented and wrote two patents. See below.
                        </li>
                        <li> In 2018 , I was promoted to Senior Software Engineer.
                            Built and validated a proof of concept system for retargeting listeners.
                            Today it lives in {' '}
                            <Link href={"//www.adswizz.com/resources/case-studies/mercatino-case-study/"}>prod</Link>.
                            Researched, implemented and wrote two patents. See below.
                        </li>
                        <li> In 2020 , I was promoted to Staff Software Engineer. Let's just say AI, LLMs and NLP -
                            <Link href="https://www.adswizz.com/voice-ads-a-primer-for-publishers/">stuff</Link> {' '}
                            and <Link href="https://www.adswizz.com/resources/case-studies/corona-case-study/">stuff</Link>.
                        </li>
                    </ul>
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Universitat Autonoma de Barcelona</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    PhD Candidate/ Marie Curie Early Stage Researcher, 2013 — 2016
                </p>
                <p>I was a part of the Marie Curie Initial Training Network -<Link
                    href={"https://www.transact-itn.eu/index.php"}>TRANSACT</Link>
                    {' '}where I researched brain cancer using a modality called Magnetic Resonance
                    Spectroscopy. I was on the signal processing and machine learning side of things; cleaning up the
                    data,
                    extracting features and building supervised and unsupervised models.
                    I focused primarily on matrix factorisation algorithms [1] applied to
                    spectroscopic data.
                    If you're interested in the topic you can see me present some of my work <Link
                        href={"https://vimeo.com/141385711"}>here</Link>
                    {' '}and if you're really really interested drop me a line and we can chat. </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Publications and Patents</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Publications
                </p>
                <ul>
                    <li>
                        <Link href="https://link.springer.com/chapter/10.1007/978-3-319-31744-1_62" target="_blank"
                           rel="noopener noreferrer">Automated
                            Quality Control for Proton Magnetic Resonance Spectroscopy Data Using Convex Non-negative
                            Matrix Factorization </Link>
                    </li>
                    <li>
                        <Link href="https://researchonline.ljmu.ac.uk/id/eprint/5464/" target="_blank"
                           rel="noopener noreferrer">A machine learning pipeline for supporting differentiation of
                            glioblastomas from single brain metastases
                        </Link>
                    </li>
                    <li>
                        <Link href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-015-0796-5"
                           target="_blank" rel="noopener noreferrer">From
                            raw data to data-analysis for magnetic resonance spectroscopy – the missing link: jMRUI2XML
                        </Link>
                    </li>
                </ul>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Patents
                </p>
                <ul>
                    <li>
                        <Link href="https://patents.justia.com/patent/11645675" target="_blank" rel="noopener noreferrer">Identifying
                            personal characteristics using sensor-gathered data </Link>
                    </li>
                    <li>
                        <Link href="https://patents.justia.com/patent/10051327" target="_blank" rel="noopener noreferrer">Determination
                            of user perspicaciousness during a content stream
                        </Link>
                    </li>
                    <li>
                        <Link href="https://patents.justia.com/patent/11588866" target="_blank" rel="noopener noreferrer">Delivering
                            tailored audio segments within live audio streams
                        </Link>
                    </li>
                    <li>
                        <Link href="https://patents.justia.com/patent/11695546" target="_blank" rel="noopener noreferrer">Decoupled
                            custom event system based on ephemeral tokens for enabling secure custom services on a
                            digital audio stream
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    References
                </p>
                [1] Pretty useful for recommender systems as well and it looks like in <Link
                href={"https://arxiv.org/pdf/2203.01155.pdf"}>2022</Link> they were still a valid approach.
            </div>
        </section>
    );
}
