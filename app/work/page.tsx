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
                <p>I joined <a href={'https://adswizz.com'}>Adswizz</a> straight out of the uni in the Research and
                    Innovation team led by the CTO at the time. Straight away I was thrown into performing analyses over
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Universitat Autonoma de Barcelona</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    PhD Candidate/ Marie Curie Early Stage Researcher, 2013 — 2016
                </p>
                <p>I was a part of the Marie Curie Initial Training Network -<a
                    href={"https://www.transact-itn.eu/index.php"}>TRANSACT</a>
                    {' '}where I researched well brain cancer using a modality called Magnetic Resonance
                    Spectroscopy. I was on the signal processing and machine learning side of things - focused primarily
                    on matrix factorisation algorithms applied to spectroscopic data.
                    Pretty useful for recommender systems as well and it looks like in <a
                        href={"https://arxiv.org/pdf/2203.01155.pdf"}>2022</a> they were still a valid approach.
                    If you're interested in the topic you can see me present some of my work <a
                        href={"https://vimeo.com/141385711"}>here</a>
                    {' '}and if you're really really interested drop me a line and we can chat. </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Publications and Patents</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Publications
                </p>
                <ul>
                    <li>
                        <a href="https://link.springer.com/chapter/10.1007/978-3-319-31744-1_62" target="_blank"
                           rel="noopener noreferrer">Automated
                            Quality Control for Proton Magnetic Resonance Spectroscopy Data Using Convex Non-negative
                            Matrix Factorization </a>
                    </li>
                    <li>
                        <a href="https://researchonline.ljmu.ac.uk/id/eprint/5464/" target="_blank"
                           rel="noopener noreferrer">A machine learning pipeline for supporting differentiation of
                            glioblastomas from single brain metastases
                        </a>
                    </li>
                    <li>
                        <a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-015-0796-5"
                           target="_blank" rel="noopener noreferrer">From
                            raw data to data-analysis for magnetic resonance spectroscopy – the missing link: jMRUI2XML
                        </a>
                    </li>
                </ul>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Patents
                </p>
                <ul>
                    <li>
                        <a href="https://patents.justia.com/patent/11645675" target="_blank" rel="noopener noreferrer">Identifying
                            personal characteristics using sensor-gathered data </a>
                    </li>
                    <li>
                        <a href="https://patents.justia.com/patent/10051327" target="_blank" rel="noopener noreferrer">Determination
                            of user perspicaciousness during a content stream
                        </a>
                    </li>
                    <li>
                        <a href="https://patents.justia.com/patent/11588866" target="_blank" rel="noopener noreferrer">Delivering
                            tailored audio segments within live audio streams
                        </a>
                    </li>
                    <li>
                        <a href="https://patents.justia.com/patent/11695546" target="_blank" rel="noopener noreferrer">Decoupled
                            custom event system based on ephemeral tokens for enabling secure custom services on a
                            digital audio stream
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
