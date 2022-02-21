import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet"

import super_elec_logo_png from '../../public/logo512.png'
import qr_code from '../images/qr-code.png'

function Contact() {
   
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - Super Elec</title>
                <meta property="og:site_name" content={`Super Elec`}/>
                <meta property="og:title" content="Contact - Super Elec"/>
                <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${super_elec_logo_png}`}/>
                <meta property="og:description" content="Contact"/>
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
        </Helmet>
        <div className="bg-[#161819] px-4 text-white flex flex-grow mx-auto justify-center">
            <img
                src={qr_code}
                className="w-3/4 h-3/4 object-center object-cover lg:w-3/4 lg:h-3/4 opacity-70 group-hover:scale-125 transition duration-300 align-middle "
            />
        </div>
        </>
    )
}

export default withRouter(Contact);
