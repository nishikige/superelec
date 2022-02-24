import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet"

import super_elec_logo_png from '../../public/logo512.png'

class Guide_ELEC_Electives extends React.Component {
    render() {
        return(
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
            <div className="justify-items-center align-middle flex-grow max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
                <iframe src="https://drive.google.com/file/d/1_0siUFsxsZpPaDiBHW2uOTQjbGrXG-Cp/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
            </>
        );
    }
}

export default withRouter(Guide_ELEC_Electives)