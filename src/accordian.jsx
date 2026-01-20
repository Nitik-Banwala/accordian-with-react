import { useState } from "react";
import { ArrowDown } from "./icons";


export default function Accordion() {
    const data = [
        {
            title: "Accordion 1",
            content: "Lorem ipsum dolor sit amet Lorem  ipsum dolor sit amet..",
        },
        {
            title: "Accordion 2",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
        {
            title: "Accordion 3",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
        {
            title: "Accordion 4",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
        {
            title: "Accordion 5",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-100  space-y-3">
            {data.map((item, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">

                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center p-4 font-semibold"
                    >
                        {item.title}

                        <span
                            className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                        >
                            <ArrowDown />
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                            }`}
                    >
                        <p className="text-gray-600">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
