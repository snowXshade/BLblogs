import React from "react";

export default function usernavbar() {
    return(
        <>
        <nav className="fixed top-0 left-0 h-full w-48 bg-blue-800 flex flex-col items-center py-10 shadow-lg">
            <ul className="flex flex-col gap-6 w-full">
                <li className="w-full">
                    <a href="#" className="block px-6 py-3 text-white hover:bg-blue-700 rounded transition">New Blog</a>
                </li>
                <li className="w-full">
                    <a href="#" className="block px-6 py-3 text-white hover:bg-blue-700 rounded transition">Profile</a>
                </li>
                <li className="w-full">
                    <a href="#" className="block px-6 py-3 text-white hover:bg-blue-700 rounded transition">Feed</a>
                </li>
            </ul>
        </nav>
        </>
    );
}