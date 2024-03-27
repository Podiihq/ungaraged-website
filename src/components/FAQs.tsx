import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-[#3C3C3C] mb-2 lg:mb-4 bg-[#141414]">
            <button
                className="flex justify-between w-full p-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold italic text-[#D9D9D9] text-sm lg:text-base">{question}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="p-4 italic text-[#D9D9D9] text-sm lg:text-base">{answer}</div>}
        </div>
    );
};

export default FAQItem;



export const AllFAQs: React.FC = () => {
    const faqs = [
        {
            question: 'How do I tune my car?',
            answer: 'Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come. Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come.',
        },
        {
            question: 'What maintenance services do you offer?',
            answer: 'Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come. Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come.',
        },
        {
            question: 'Can you help with importing a car?',
            answer: 'Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come. Whether taking families on new adventures or electrifying fleets at scale, our vehicles all share a common goal — preserving the natural world for generations to come.',
        },
    ];

    return (
        <div className="mx-auto mt-4 lg:mt-8">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};