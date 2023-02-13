import * as React from "react"
import "./header.css"

const Header = ({siteTitle, menuItems}) => (
    <div className="header flex-container flex-start" >
        <h3 className="header-title">{ siteTitle }</h3>
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">

                        {
                            menuItems.map((item, index) => (
                            <li className={`nav-item navbar-right `}>
                                <a className={`nav-link ${index === 0 && 'active-nav-link'}`} href="#">{item}
                                    {/*<span className="sr-only">(current)</span>*/}
                                </a>
                                {/* <hr className="m-0 border"/> */}
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </div>
)

export default Header
