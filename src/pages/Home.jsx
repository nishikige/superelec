import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import Typed from 'react-typed'
import { Helmet } from "react-helmet"

import super_elec_logo_png from '../../public/logo512.png'
import Super_Elec_Logo from '../static/favicon.png'
import PageRoutes from '../PageRoutes';

//temporary
import default_background from '../images/tree.png'
import qr_code from '../images/qr-code.png'

function Home() {    
    return (
        <>
        
        <Helmet>
            <meta charSet="utf-8" />        
            <title>Home - Super Elec</title>
            <meta name="description" content="The better ELSOC! We are an unofficial discord group that focuses on electrical and electronic topics at UNSW!"></meta>
            <meta property="og:site_name" content={`Super Elec`}/>
            <meta property="og:title" content={`Home - Super Elec`}/>
            <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${super_elec_logo_png}`}/>
            <meta property="og:description" content="The better ELSOC"/>
            <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
            <meta property="og:type" content="website"/>
        </Helmet>
        
        <div className="px-4 font-sans flex-grow mx-auto w-3/4 text-white">
            {/* <div className = "font-sans font-bold text-2xl"> Home page </div> */}
            <div className = "flex flex-box flex-col text-center">
                <img className="self-center justify-center w-3/4 h-3/4 sm:w-1/3 sm:h-1/3 lg:w-1/4 lg:h-1/4" src={Super_Elec_Logo} alt="Super Elec" />
                <Typed
                    strings={[
                    'Failing Elec?',
                    'ELSOC modCheck?',
                    'The better elec?',
                    'Join the discord!',
                    ]}
                    className='text-[#cdfcff] text-3xl sm:text-5xl font-bold text-center self-center justify-center'
                    typeSpeed={30}
                    backSpeed={50}
                    smartBackspace
                    loop />
            </div>
            <div className = "font-sans font-bold font-italic text-2xl"> We heard that ELSOC is finally getting their website,</div>
            <div data-type="countdown" data-id="3099601" class="tickcounter" style={width: "100%", position: "relative", padding-bottom: "25%"}><a href="//www.tickcounter.com/countdown/3099601/elsoc-website-launch" title="ELSOC Website Launch">ELSOC Website Launch</a><a href="//www.tickcounter.com/" title="Countdown">Countdown</a></div>
            <br/>
            <div className='flex justify-center'>
                <img
                    src={qr_code}
                    className="w-full h-full object-center object-cover lg:w-2/3 lg:h-2/3 opacity-70 group-hover:scale-125 transition duration-300"
                />
            </div>
        </div>
        </>
    )
}

export default withRouter(Home);
