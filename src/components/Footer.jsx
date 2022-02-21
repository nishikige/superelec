import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faTwitter, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    render() {
        return(
            <nav id="footer" className="bg-[#161819]">
                <div className="container mx-auto pt-8 pb-4">
                    <div className="dark:text-white items-center justify-center text-center"
                        style={{
                            paddingBottom: '20px',
                        }}>
                        © {new Date().getFullYear()} Super Elec
                    </div>
                    <div className="flex flex-wrap justify-center sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2 max-w-full">
                        <div className="py-3 px-3">
                            <a href="https://discord.com/invite/zks7xnUk34" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://discord.com/invite/zks7xnUk34" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://discord.com/invite/zks7xnUk34" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://discord.com/invite/zks7xnUk34" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://discord.com/invite/zks7xnUk34" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Footer