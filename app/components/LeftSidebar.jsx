"use client";
import { useState } from 'react'

const LeftSidebar = () => {
    const categories = ['Armed_Forces', 'Artist', 'Aviate', 'Chartered_Accountant', 'Civil_Services', 'Design', 'Engineering', 'Hotel_Management', 'Law', 'Medical', 'Research', 'Sports', 'Teacher'];
    const [active, setActive] = useState("Teaching");

    return (
        <div className="w-64  border-r-2 pr-5 pt-6 ">
            <div className=" uppercase font-semibold ml-5 mb-3">Categories</div>

            {categories.map((category) => {
                return (
                    <a href={`#${category}`}>
                        <div className={`py-3 ml-3 cursor-pointer my-1 hover:bg-gray-200 pl-2 rounded-lg font-semibold text-sm text-gray-600 ${active == category ? "text-blue-700 bg-blue-50 hover:text-blue-700 hover:bg-blue-50" : ""}`}>
                            {category}
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default LeftSidebar