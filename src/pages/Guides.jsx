import React, { useState, useEffect } from "react"
import guides_list from '../guides/guides_list'
import Posts from "../components/Posts"
import Pagination from "../components/Pagination"
import { withRouter } from 'react-router-dom'
import { Helmet } from "react-helmet"

import super_elec_logo_png from '../../public/logo512.png'

const Guides = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setPosts(guides_list);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Guides - Super Elec</title>
                <meta property="og:title" content="Guides - Super Elec"/>
                <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${super_elec_logo_png}`}/>
                <meta property="og:description" content="Guides"/>
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
                <meta property="og:type" content="website"/>
        </Helmet>
        <div className="justify-items-center align-middle flex-grow max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
            <Posts posts={currentPosts} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage}
            />
        </div>
        </>
    );
};

export default withRouter(Guides);