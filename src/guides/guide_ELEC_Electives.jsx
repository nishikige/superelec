import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet"

function Guide_Electives() {
   
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Elective Guide - Super Elec</title>
                <meta property="og:site_name" content={`Super Elec`}/>
                <meta property="og:title" content="Elective Guide - Super Elec"/>
                <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${super_elec_logo_png}`}/>
                <meta property="og:description" content="Elective Guide"/>
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
        </Helmet>
        <div className="bg-[#161819] px-4 text-white flex flex-grow mx-auto justify-center">
            <iframe src="https://drive.google.com/file/d/1_0siUFsxsZpPaDiBHW2uOTQjbGrXG-Cp/preview" width="640" height="480" allow="autoplay"></iframe>
        </div>
        </>
    )
}

export default withRouter(Guide_Electives);

