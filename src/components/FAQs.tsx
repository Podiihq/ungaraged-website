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
                <span className="font-semibold italic text-left text-[#D9D9D9] text-sm lg:text-base">{question}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="p-4 italic text-white text-sm lg:text-base">{answer}</div>}
        </div>
    );
};

export default FAQItem;



export const AllFAQs: React.FC = () => {
    const faqs = [
        {
            question: 'HOW LONG DOES TUNING TAKE?',
            answer: 'You typically need to pay us 2 visits, 1 hour each, across 2 business days',
        },
        {
            question: 'CAN THE CHANGE BE NOTICED?',
            answer: 'Power change can be noticed immediately. We prefer using Dragy app to determine performance improvements, but you can also opt for dyno comparison.',
        },
        {
            question: 'WILL THE CAR HAVE A SHORTER SERVICE LIFE AFTER TUNING?',
            answer: 'With our tuning, the increase in engine power is achieved by optimizing the efficiency of different parts of the engine, without exceeding the limits of engine operation. For normal use of your vehicle, with regular service and oil change, engine life is not impacted.',
        },
        {
            question: 'WHY DOESN’T THE MANUFACTURER TUNE THE VEHICLE TO THE OPTIMAL LEVEL?',
            answer: 'The manufacturers’ aim is to build a car for the global market, which must meet various requirements and perform consistently in different conditions',
        },
        {
            question: ' DOES TUNING REQUIRE A HIGHER-GRADE FUEL THAN PREMIUM UNLEADED?',
            answer: 'While we give you the choice of running pump fuel, the use of high-octane fuel in gas powered vehicles will significantly increase the Horsepower and Torque output.',
        },
        {
            question: 'WILL TUNING INCREASE MY FUEL CONSUMPTION?',
            answer: 'We design our software specifically for better performance and in some cases, we may maximize fuel consumption economy mode. However, the true culprit for bad gas mileage is a lead foot.',
        },
        {
            question: 'CAN MY VEHICLE BE RETURNED BACK TO STOCK?',
            answer: 'Yes.',
        },
        {
            question: 'WILL THE SPEED LIMITER BE REMOVED?',
            answer: 'Yes. In most cases, but not all.',
        },
        {
            question: 'AT WHAT STAGE IS THE TCU SOFTWARE MANDATORY?',
            answer: 'TCU software is HIGHLY recommended after you reach and/or exceed 350NM TQ. Performance TCU software is suitable and HIGHLY recommended at all power levels whether Stock, Stage 1 or Stage 3 big turbo.',
        },
        {
            question: 'WHAT IS THE UPGRADE POLICY?',
            answer: 'Ungaraged performance software is always upgradable, regardless of which “Stage” software you started with. Please get in touch to determine the cost corresponding to the upgrade path.',
        },
        {
            question: 'WHAT TYPE OF WARRANTY DO YOU OFFER WITH YOUR PRODUCTS?',
            answer: 'All our software comes with a limited lifetime warranty while you own the car.',
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