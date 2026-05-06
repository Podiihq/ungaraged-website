import { Link } from "react-router-dom";
import React, { useState, useEffect, ReactNode } from "react";
import Logo from "../assets/Logo/Logo.svg"


interface NavSection {
    id: string;
    number: string;
    title: string;
}

interface BulletListProps {
    items: string[];
}

interface SubSectionProps {
    title: string;
    children: ReactNode;
}

interface SectionHeaderProps {
    number: string;
    title: string;
}

interface LegalBasis {
    label: string;
    desc: string;
}

interface RetentionRow {
    label: string;
    period: string;
    note: string;
}

interface RightItem {
    right: string;
    desc: string;
}


const sections: NavSection[] = [
    { id: "about", number: "1", title: "About Us" },
    { id: "collect", number: "2", title: "Information We Collect" },
    { id: "use", number: "3", title: "How We Use Your Information" },
    { id: "legal", number: "4", title: "Legal Basis for Processing" },
    { id: "share", number: "5", title: "How We Share Your Information" },
    { id: "meta", number: "6", title: "Meta Advertising & Tracking" },
    { id: "retention", number: "7", title: "Data Retention" },
    { id: "security", number: "8", title: "Data Security" },
    { id: "rights", number: "9", title: "Your Rights" },
    { id: "deletion", number: "10", title: "Data Deletion Requests" },
    { id: "children", number: "11", title: "Children's Privacy" },
    { id: "transfers", number: "12", title: "International Data Transfers" },
    { id: "changes", number: "13", title: "Changes to This Policy" },
    { id: "contact", number: "14", title: "Contact Us" },
];

const legalBases: LegalBasis[] = [
    {
        label: "Contract performance",
        desc: "Where processing is necessary to provide the services you have requested.",
    },
    {
        label: "Legitimate interests",
        desc: "Where we have a legitimate business interest in processing your data, such as improving our services and running our marketing activities.",
    },
    {
        label: "Consent",
        desc: "Where you have given us explicit consent, such as signing up for our newsletter or engaging with our WhatsApp advisory service.",
    },
    {
        label: "Legal obligation",
        desc: "Where we are required to process your data to comply with applicable law.",
    },
];

const retentionRows: RetentionRow[] = [
    {
        label: "Customer & service records",
        period: "Up to 7 years",
        note: "Following the last service interaction, in line with Kenyan legal requirements",
    },
    {
        label: "Marketing data & subscription preferences",
        period: "Until withdrawn",
        note: "Retained until you withdraw your consent or unsubscribe",
    },
    {
        label: "Website analytics data",
        period: "Up to 26 months",
        note: "Anonymised after this period",
    },
];

const rightItems: RightItem[] = [
    { right: "Access", desc: "Request a copy of the personal data we hold about you" },
    { right: "Correction", desc: "Request that we correct inaccurate or incomplete data" },
    { right: "Deletion", desc: "Request that we delete your personal data, subject to our legal obligations" },
    { right: "Objection", desc: "Object to processing of your data for direct marketing purposes" },
    { right: "Restriction", desc: "Request that we restrict processing of your data in certain circumstances" },
    { right: "Portability", desc: "Request your data in a structured, machine-readable format" },
    { right: "Withdraw Consent", desc: "Where processing is based on consent, you may withdraw at any time" },
];


function BulletList({ items }: BulletListProps) {
    return (
        <ul className="mt-3 space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-300 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FE5C43] flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function SubSection({ title, children }: SubSectionProps) {
    return (
        <div className="mt-6">
            <h3 className="text-sm font-semibold tracking-widest text-[#FE5C43] uppercase mb-2">
                {title}
            </h3>
            {children}
        </div>
    );
}

function SectionHeader({ number, title }: SectionHeaderProps) {
    return (
        <div className="mb-6">
            <div className="flex items-baseline gap-3">
                <span className="text-[#FE5C43] font-mono text-sm font-bold">{number}.</span>
                <h2
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "sans-serif", letterSpacing: "-0.01em" }}
                >
                    {title}
                </h2>
            </div>
            <div className="mt-2 h-px bg-gradient-to-r from-[#FE5C43]/30 to-transparent" />
        </div>
    );
}


export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState<string>("about");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-20% 0px -70% 0px" }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string): void => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setSidebarOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-zinc-950 text-stone-100" style={{ fontFamily: "'Georgia', serif" }}>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
                <div className="flex items-center justify-between w-full lg:px-20 py-5 px-4">
                    <Link to="/">
                        <div className="flex-shrink-0">
                            <img src={Logo} alt="" className="w-32 lg:w-auto" />
                        </div>
                    </Link>
                    <div className="flex gap-4">
                        <a
                            href="/"
                            className="hover:underline hover:text-[#FE5C43]"
                        >
                            Home
                        </a>
                        <a
                            href="/contact"
                            className="hover:underline hover:text-[#FE5C43]"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </header>

            {/* ── Mobile overlay ── */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/70 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className="max-w-7xl mx-auto flex pt-14">

                {/* ── Sidebar ── */}
                <aside
                    className={`fixed lg:sticky top-14 h-[calc(100vh-3.5rem)] w-64 bg-zinc-900 lg:bg-transparent border-r border-zinc-800 overflow-y-auto z-40 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                        }`}
                >
                    <div className="p-6">
                        <p className="text-xs tracking-widest text-zinc-500 uppercase mb-4">Contents</p>
                        <nav className="space-y-0.5">
                            {sections.map(({ id, number, title }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`w-full text-left flex items-start gap-2.5 px-3 py-2 rounded text-xs transition-all duration-200 group ${activeSection === id
                                        ? "bg-[#FE5C43]/10 text-[#FE5C43]"
                                        : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                                        }`}
                                >
                                    <span
                                        className={`font-mono mt-0.5 flex-shrink-0 text-xs ${activeSection === id ? "text-[#FE5C43]" : "text-zinc-600 group-hover:text-zinc-400"
                                            }`}
                                    >
                                        {number}.
                                    </span>
                                    <span className="leading-tight">{title}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* ── Main ── */}
                <main className="flex-1 min-w-0 px-6 lg:px-16 py-12 lg:py-16">

                    {/* Hero */}
                    <div className="mb-16 pb-12 border-b border-zinc-800">
                        <div className="inline-flex items-center gap-2 text-xs tracking-widest text-[#FE5C43] uppercase mb-4">
                            <div className="w-8 h-px bg-[#FE5C43]" />
                            Legal Document
                        </div>
                        <h1
                            className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                            style={{ fontFamily: "sans-serif", letterSpacing: "-0.02em" }}
                        >
                            Privacy Policy
                        </h1>
                        <p className="text-stone-400 text-sm">
                            Effective Date: May 2025 &nbsp;·&nbsp; Last Updated: May 2025
                        </p>
                        <p className="mt-6 text-stone-300 leading-relaxed max-w-2xl">
                            This Privacy Policy explains how Ungaraged collects, uses, shares, and protects your
                            personal information when you interact with us through our website, social media,
                            WhatsApp advisory service, and related digital platforms.
                        </p>
                    </div>

                    <div className="space-y-16">

                        {/* 1 – About Us */}
                        <section id="about">
                            <SectionHeader number="1" title="About Us" />
                            <p className="text-stone-300 text-sm leading-relaxed">
                                Ungaraged ("we", "us", or "our") is a performance automotive tuning business based in
                                Nairobi, Kenya. We specialise in ECU/TCU software, performance parts, car imports,
                                service and maintenance. We operate through our website at{" "}
                                <a href="https://ungaraged.com" className="text-[#FE5C43] hover:underline">
                                    ungaraged.com
                                </a>
                                , our Instagram and Facebook presence (@ungaraged), our WhatsApp advisory service, and
                                related digital platforms.
                            </p>
                        </section>

                        {/* 2 – Information We Collect */}
                        <section id="collect">
                            <SectionHeader number="2" title="Information We Collect" />
                            <p className="text-stone-300 text-sm leading-relaxed">
                                We collect the following categories of personal information:
                            </p>

                            <SubSection title="2.1 Information You Provide">
                                <BulletList items={[
                                    "Name and contact details (phone number, email address, WhatsApp number)",
                                    "Vehicle information (make, model, year, chassis/VIN number, mileage)",
                                    "Service enquiries, messages, and communications sent to us",
                                    "Payment information (where applicable, processed through secure third-party providers)",
                                    "Documents or images you share with us (e.g. auction sheets, vehicle photographs)",
                                ]} />
                            </SubSection>

                            <SubSection title="2.2 Information We Collect Automatically">
                                <BulletList items={[
                                    "Device identifiers and IP address when you visit our website or interact with our digital content",
                                    "Browser type, operating system, and referral URLs",
                                    "Pages viewed and interactions on our website",
                                    "WhatsApp metadata (e.g. message timestamps) when you use our WhatsApp advisory service",
                                ]} />
                            </SubSection>

                            <SubSection title="2.3 Information From Third Parties">
                                <BulletList items={[
                                    "Information from Meta platforms (Facebook, Instagram) when you interact with our pages, ads, or lead forms, including your public profile information and any data you submit through Meta's Lead Ad forms",
                                    "Referral information from partners or third-party platforms",
                                ]} />
                            </SubSection>
                        </section>

                        {/* 3 – How We Use Your Information */}
                        <section id="use">
                            <SectionHeader number="3" title="How We Use Your Information" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-3">
                                We use the personal information we collect for the following purposes:
                            </p>
                            <BulletList items={[
                                "To provide, manage, and fulfil our automotive services, including ECU/TCU tuning, part sourcing, and vehicle imports",
                                "To respond to your enquiries, quotation requests, and service bookings",
                                "To operate our WhatsApp-based advisory service and deliver relevant automotive guidance",
                                "To process transactions and manage payments",
                                "To send service updates, booking confirmations, and after-service follow-ups",
                                "To send marketing communications about our services, promotions, and events — where you have consented or where we have a legitimate business interest",
                                "To improve our services, website, and digital platforms",
                                "To run targeted advertising and audience campaigns on Meta platforms (Facebook and Instagram), including use of the Meta Pixel and Conversions API",
                                "To comply with applicable laws, regulations, and legal obligations",
                                "To detect, prevent, and address fraud, security incidents, or misuse of our services",
                            ]} />
                        </section>

                        {/* 4 – Legal Basis */}
                        <section id="legal">
                            <SectionHeader number="4" title="Legal Basis for Processing" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-4">
                                Where applicable under data protection laws (including Kenya's Data Protection Act
                                2019), we process your personal information on the following legal bases:
                            </p>
                            <div className="space-y-3">
                                {legalBases.map(({ label, desc }: LegalBasis) => (
                                    <div
                                        key={label}
                                        className="flex gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
                                    >
                                        <div className="w-1 rounded-full bg-[#FE5C43] flex-shrink-0" />
                                        <div>
                                            <p className="text-white text-sm font-semibold mb-1">{label}</p>
                                            <p className="text-stone-400 text-xs leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5 – How We Share */}
                        <section id="share">
                            <SectionHeader number="5" title="How We Share Your Information" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-6">
                                We do not sell your personal information. We may share your information with the
                                following categories of third parties:
                            </p>

                            <SubSection title="5.1 Service Providers">
                                <p className="text-stone-300 text-sm leading-relaxed mb-2">
                                    We share data with trusted third-party providers who assist us in delivering our
                                    services, including:
                                </p>
                                <BulletList items={[
                                    "Cloud hosting and infrastructure providers",
                                    "Communication platforms (e.g. WhatsApp Business API, Meta Business Suite)",
                                    "Payment processors",
                                    "Analytics and marketing tools",
                                ]} />
                                <p className="text-stone-400 text-xs leading-relaxed mt-3">
                                    These providers are contractually bound to process your data only as directed by us
                                    and in accordance with applicable privacy laws.
                                </p>
                            </SubSection>

                            <SubSection title="5.2 Meta Platforms">
                                <p className="text-stone-300 text-sm leading-relaxed">
                                    When you interact with our Facebook or Instagram pages, submit a lead form, or
                                    engage with our ads, Meta processes data in accordance with Meta's own Privacy
                                    Policy. We use Meta Business Tools (including the Meta Pixel and Conversions API)
                                    to measure ad performance and build audiences. This may involve sharing hashed
                                    contact data with Meta.
                                </p>
                            </SubSection>

                            <SubSection title="5.3 Legal and Regulatory Disclosure">
                                <p className="text-stone-300 text-sm leading-relaxed">
                                    We may disclose your information where required by law, court order, or regulatory
                                    authority, or where necessary to protect our rights, property, or the safety of our
                                    customers or the public.
                                </p>
                            </SubSection>

                            <SubSection title="5.4 Business Transfers">
                                <p className="text-stone-300 text-sm leading-relaxed">
                                    In the event of a merger, acquisition, or sale of our business assets, your
                                    information may be transferred to the relevant successor entity, subject to the same
                                    privacy protections.
                                </p>
                            </SubSection>
                        </section>

                        {/* 6 – Meta */}
                        <section id="meta">
                            <SectionHeader number="6" title="Meta Advertising & Tracking Technologies" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-4">
                                We use the Meta Pixel and Meta Conversions API on our website and digital platforms.
                                These tools allow us to:
                            </p>
                            <BulletList items={[
                                "Measure the effectiveness of our advertising campaigns on Facebook and Instagram",
                                "Build and reach custom and lookalike audiences",
                                "Retarget users who have previously visited our website or engaged with our content",
                            ]} />
                            <p className="text-stone-300 text-sm leading-relaxed mt-4">
                                Data shared with Meta through these tools may include hashed email addresses, phone
                                numbers, IP addresses, and browsing activity on our website. This data is shared for
                                advertising optimisation purposes only. Meta's use of this data is governed by Meta's
                                Privacy Policy, available at{" "}
                                <a href="https://facebook.com/privacy/policy" className="text-[#FE5C43] hover:underline">
                                    facebook.com/privacy/policy
                                </a>
                                .
                            </p>
                            <div className="mt-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-stone-400 leading-relaxed">
                                <span className="text-[#FE5C43] font-semibold">Opt-out: </span>
                                You may opt out of personalised advertising by adjusting your ad preferences through
                                your Facebook or Instagram account settings, or by visiting{" "}
                                <a href="https://youradchoices.com" className="text-[#FE5C43] hover:underline">
                                    youradchoices.com
                                </a>
                                .
                            </div>
                        </section>

                        {/* 7 – Retention */}
                        <section id="retention">
                            <SectionHeader number="7" title="Data Retention" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-4">
                                We retain your personal information for as long as is necessary to fulfil the purposes
                                for which it was collected, including complying with legal, accounting, or reporting
                                obligations.
                            </p>
                            <div className="space-y-3">
                                {retentionRows.map(({ label, period, note }: RetentionRow) => (
                                    <div
                                        key={label}
                                        className="flex items-start justify-between gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
                                    >
                                        <div>
                                            <p className="text-white text-xs font-semibold mb-0.5">{label}</p>
                                            <p className="text-stone-500 text-xs">{note}</p>
                                        </div>
                                        <span className="text-[#FE5C43] text-xs font-mono whitespace-nowrap flex-shrink-0">
                                            {period}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-stone-400 text-xs leading-relaxed mt-4">
                                When data is no longer required, it is securely deleted or anonymised.
                            </p>
                        </section>

                        {/* 8 – Security */}
                        <section id="security">
                            <SectionHeader number="8" title="Data Security" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-4">
                                We implement administrative, technical, and physical safeguards designed to protect
                                your personal information against unauthorised access, disclosure, alteration, or
                                destruction. These measures include:
                            </p>
                            <BulletList items={[
                                "Encrypted data transmission (HTTPS/TLS) across all our digital platforms",
                                "Access controls and authentication requirements for staff accessing personal data",
                                "Regular review of our data handling practices",
                            ]} />
                            <p className="text-stone-400 text-xs leading-relaxed mt-4">
                                While we take reasonable precautions, no method of transmission over the internet is
                                completely secure. We encourage you to contact us immediately if you suspect any
                                unauthorised access to your information.
                            </p>
                        </section>

                        {/* 9 – Your Rights */}
                        <section id="rights">
                            <SectionHeader number="9" title="Your Rights" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-4">
                                You have the following rights regarding your personal information:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {rightItems.map(({ right, desc }: RightItem) => (
                                    <div key={right} className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                        <p className="text-[#FE5C43] text-xs font-semibold tracking-wide uppercase mb-1">
                                            {right}
                                        </p>
                                        <p className="text-stone-400 text-xs leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-stone-400 text-xs leading-relaxed mt-4">
                                To exercise any of these rights, please contact us using the details in Section 14
                                below. We will respond to verified requests within 30 days.
                            </p>
                        </section>

                        {/* 10 – Deletion */}
                        <section id="deletion">
                            <SectionHeader number="10" title="Data Deletion Requests" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-4">
                                You may request deletion of your personal data at any time by:
                            </p>
                            <BulletList items={[
                                'Sending an email to privacy@ungaraged.com with the subject line "Data Deletion Request"',
                                'Sending a WhatsApp message to our business number with the text "Delete my data"',
                                "Submitting a written request to our physical address below",
                            ]} />
                            <p className="text-stone-400 text-xs leading-relaxed mt-4">
                                Upon receiving a verified deletion request, we will delete or anonymise your personal
                                data within 30 days, except where we are required to retain it by law or to fulfil a
                                contractual obligation.
                            </p>
                        </section>

                        {/* 11 – Children */}
                        <section id="children">
                            <SectionHeader number="11" title="Children's Privacy" />
                            <p className="text-stone-300 text-sm leading-relaxed">
                                Our services are not directed at individuals under the age of 18. We do not knowingly
                                collect personal information from minors. If we become aware that we have collected
                                data from a person under 18 without appropriate parental consent, we will delete that
                                information promptly.
                            </p>
                        </section>

                        {/* 12 – International Transfers */}
                        <section id="transfers">
                            <SectionHeader number="12" title="International Data Transfers" />
                            <p className="text-stone-300 text-sm leading-relaxed">
                                Ungaraged is based in Kenya. Some of our service providers and platforms (including
                                cloud infrastructure and Meta platforms) may process your data outside of Kenya. Where
                                such transfers occur, we take steps to ensure that appropriate safeguards are in place
                                in accordance with Kenya's Data Protection Act 2019 and applicable international
                                standards.
                            </p>
                        </section>

                        {/* 13 – Changes */}
                        <section id="changes">
                            <SectionHeader number="13" title="Changes to This Policy" />
                            <p className="text-stone-300 text-sm leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our
                                practices or applicable law. When we make material changes, we will post the updated
                                policy on our website and update the "Last Updated" date at the top of this document.
                                We encourage you to review this policy periodically.
                            </p>
                        </section>

                        {/* 14 – Contact */}
                        <section id="contact">
                            <SectionHeader number="14" title="Contact Us" />
                            <p className="text-stone-300 text-sm leading-relaxed mb-6">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or your
                                personal data, please contact us:
                            </p>
                            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                                <p
                                    className="text-white font-bold text-lg mb-4"
                                    style={{ fontFamily: "sans-serif", letterSpacing: "-0.01em" }}
                                >
                                    Ungaraged
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="text-stone-400">📍 Nairobi, Kenya</p>
                                    <p className="text-stone-400">
                                        📷{" "}
                                        <a href="https://instagram.com/ungaraged" className="text-[#FE5C43] hover:underline">
                                            instagram.com/ungaraged
                                        </a>
                                    </p>
                                    <p className="text-stone-400">
                                        👍{" "}
                                        <a href="https://facebook.com/ungaraged" className="text-[#FE5C43] hover:underline">
                                            facebook.com/ungaraged
                                        </a>
                                    </p>
                                    <p className="text-stone-400">
                                        🌐{" "}
                                        <a href="https://ungaraged.com" className="text-[#FE5C43] hover:underline">
                                            ungaraged.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <p className="text-stone-500 text-xs leading-relaxed mt-4">
                                For data protection matters, you may also contact the Office of the Data Protection
                                Commissioner of Kenya at{" "}
                                <a href="https://odpc.go.ke" className="text-[#FE5C43] hover:underline">
                                    odpc.go.ke
                                </a>
                                .
                            </p>
                        </section>

                    </div>

                    {/* Footer */}
                    <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-zinc-600 text-xs">© 2026 Ungaraged. All rights reserved.</p>
                        <p className="text-zinc-600 text-xs">
                            This Privacy Policy is published and maintained by Ungaraged.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}