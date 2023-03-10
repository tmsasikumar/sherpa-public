import * as React from "react";
import { useState } from "react";
import "./techstation.css";
import { ReactComponent as ArrowDown } from './images/arrow1.svg';
import { ReactComponent as ArrowUP } from './images/arrow2.svg';
import { includes } from "lodash";
import { ReactComponent as HTML } from './images/html.svg';



import Card from 'react-bootstrap/Card';


const Techstation = ({ techStationContent }) => {

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);


    const words = techStationContent.header[2].content.split(' ');

    const handleLeftHover = () => {
        setShowLeft(!showLeft);
    }

    const handleRightHover = () => {
        setShowRight(!showRight);
    }

    return (
        <section className="techstation-section">
            <div className="techstation-container">
                <div className="techstation-header">
                    <div className="arrow-wrapper">
                        <div className="image1 arrows">
                            <ArrowDown />
                        </div>
                        <div className="image2 arrows">
                            <ArrowUP />
                        </div>
                    </div>
                    <div className="header-text">
                        {words.map((word, index) => {
                            let style;
                            if (includes([0, 1, 2], index)) {
                                style = { color: '#EBEBEB' }
                            }
                            else if (includes([3, 4], index)) {
                                style = { color: '#A3FA8D' }
                            } else {
                                style = { color: '#EBEBEB' }
                            }
                            return <p className="techstation-text"><span key={index} style={style}>{word}</span></p>;
                        })}
                    </div>
                </div>
                <div className="techstation-card">
                        {/* <div className="col-sm-6 front-end"> */}
                            <div className="card lefthover-card" >
                                <div className="row">
                                    <div className="col-sm-4 col-6 ">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                        {/* <div className="col-sm-6 back-end"> */}
                            <div className="card righthover-card" >
                                <div className="row">
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <h5> HTML</h5>
                                        <HTML />
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                </div>
                {/* <div className="techstation-card">
                    <div className="left-card">

                        <Card className="left-card1">
                            <Card.Body>
                                <Card.Text className="left-card-text">
                                    {techStationContent.mainContent[0].content1}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="left-card2" />
                        <Card className="left-card1-icons card-icons">
                            {
                                techStationContent.mainContent.tech_icons.map((icon, index) => (
                                    <div className="card-icon">
                                        <img src={icon.image} alt={icon.name} />
                                        <span>{icon.name}</span>
                                    </div>
                                ))
                            }
                        </Card>
                    </div>
                    <div className="right-card">
                        <Card className="right-card1">
                            <Card.Body>
                                <Card.Text className="right-card-text">
                                    {techStationContent.mainContent[1].content2}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="right-card2" />
                    </div>
                </div> */}
            </div>
        </section>
    )

}

export default Techstation
