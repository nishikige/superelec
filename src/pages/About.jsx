import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet"

import super_elec_logo_png from '../../public/logo512.png'

class Error404 extends React.Component {
    render() {
        return(
            <>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>About - Super Elec</title>
                    <meta property="og:title" content="About - Super Elec"/>
                    <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${super_elec_logo_png}`}/>
                    <meta property="og:description" content="About Us Super Elec Peeps"/>
                    <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
            </Helmet>
            <div className="justify-items-center align-middle flex-grow max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
                <div className="inset-0">
                    Just a bit of bantz. Unlike (UNSW) ELSOC, we have a website built from scratch and not requiring some third party website platform.
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(Error404)
