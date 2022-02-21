import React from "react";

export default function Pagination({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className='py-2'>
            <div>
                <p className='text-sm text-[#68a9eb]'>
                    Showing
                    <span className='font-medium'>
                        {" "}
                        {(currentPage-1) * postsPerPage + 1}{" "}
                    </span>
                    to
                    <span className='font-medium'> {currentPage * postsPerPage} </span>
                    of
                    <span className='font-medium'> {totalPosts} </span>
                    results
                </p>
            </div>
            <nav className='block'>
                <ul className='flex pl-0 rounded list-none flex-wrap'>
                    <li>
                        {pageNumbers.map((number, key) => (
                            <a
                                key = {key}
                                onClick={() => {
                                    paginate(number);
                                }}
                                href='#'
                                className={
                                    currentPage === number
                                        ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                        : "border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                }
                            >
                                {number}
                            </a>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>
    );
}