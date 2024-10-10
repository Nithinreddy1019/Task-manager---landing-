"use client"

import clsx from "clsx";
import { useState } from "react";

import { MinusIcon, PlusIcon } from "lucide-react"


const items = [
    {
        question: "What payment methods do you accept?",
        answer: "We acept  credit cards, debit cards, Automated Clearing House (ACH) transfers, cash, paper checks, eChecks, digital payments, and money orders."
    },
    {
        question: "How does the pricing work for teams?",
        answer: "The most popular of all, Teams Essentials, costs $4 per user per month (when paid annually) and covers: Up to 300 participants per meeting, 10 GB of cloud storage per user, and. 30 hours per meeting."
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can change your plan at any time. You can upgrade or downgrade your plan anytime."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use industry-leading encryption to protect your data and keep it safe."
    },
]


const AccordianItem = ({ question, answer }: { question: string, answer: string }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center  ">
                <span className="flex-1 text-lg font-semibold">{question}</span>
                {isOpen ? 
                    (<MinusIcon className="size-4"/>) : (<PlusIcon className="size-4"/>)
                }
            </div>
            <div className={clsx("mt-4", {
                "hidden": !isOpen,
                "": isOpen
            })}>{answer}</div>
        </div>
    )
}

export const Faqs = () => {
    return (
        <div className="text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">Frequently asked questions</h2>
                <div className="mt-12 max-w-[648px] mx-auto">
                    {items.map(({ question, answer }) => (
                        <AccordianItem key={question} question={question} answer={answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}