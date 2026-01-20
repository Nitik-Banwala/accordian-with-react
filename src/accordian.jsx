import { useState } from "react";
import { ArrowDown } from "./icons";

export default function Accordion() {
    const data = [
        {
            title: "Group-1",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
        {
            title: "Group-2",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
        {
            title: "Group-3",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
        {
            title: "Group-4",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
        {
            title: "Group-5",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-4 bg-white shadow-sm rounded-2xl">
        <div className="max-w-100 space-y-3">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`rounded-lg overflow-hidden border transition-colors duration-300 ${openIndex === index
                            ? "border-blue-500"
                            : "border-gray-300"
                        }`}
                >
                    
                    <button
                        onClick={() => toggle(index)}
                        className={`w-full flex justify-between items-center p-4 font-semibold transition-colors ${openIndex === index
                                ? "text-gray-800 bg-white"
                                : "text-gray-800 bg-white"
                            }`}
                    >
                        <h3 className="text-[#808080] font-normal">{item.title}</h3>
                        <span
                            className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                        >
                            <ArrowDown />
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "max-h-40 p-4"
                                : "max-h-0 p-0"
                            }`}
                    >
                        <p className="text-gray-400">{item.content}</p>
                        
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
