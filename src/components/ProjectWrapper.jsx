import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet"

class ProjectWrapper extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <meta charSet="utf-8" />        
                    <title>{this.props.project.name} - Super Elec</title>
                    <meta name="description" content={`Super Elec Project: ${this.props.project.name}`}></meta>

                    <meta property="og:site_name" content={`Super Elec`}/>
                    <meta property="og:title" content={`${this.props.project.name} - Super Elec`}/>
                    <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${this.props.project.imageSrc[this.props.project.defaultImageNum]}`}/>
                    <meta property="og:description" content={`Super Elec Project: ${this.props.project.name}`}/>
                    <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}${this.props.project.href}`}/>
                    <meta property="og:type" content="website"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={`${this.props.project.name} - Super Elec`}/>
                    <meta name="twitter:description" content={`Super Elec Project: ${this.props.project.name}`}/>
                    <meta name="twitter:image" content={`${import.meta.env.VITE_BASE_URL}${this.props.project.imageSrc[this.props.project.defaultImageNum]}`}/>
                    <meta property="twitter:domain" content={`${import.meta.env.VITE_BASE_URL}`}/>
                    <meta property="twitter:url" content={`${import.meta.env.VITE_BASE_URL}${this.props.project.href}`}/>
                </Helmet>
                <div className="justify-items-center align-middle flex-grow max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
                    <div className = "font-sans font-bold text-2xl"> {this.props.project.name} </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                        {this.props.project.imageSrc.map((item, key) => (
                            <div key={key} className="group relative">
                                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
                                    <img
                                    src={item}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full group-hover:scale-125 transition duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectWrapper)
