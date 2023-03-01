import * as React from "react";
import "./techstation.css";
import { Image } from "react-bootstrap";
import { includes } from "lodash";
import { ReactComponent as ArrowDown } from './images/arrow1.svg';
import { ReactComponent as ArrowUP } from './images/arrow2.svg';

import Card from 'react-bootstrap/Card';


const techstation = ({ techStationContent }) => {

    const words = techStationContent.header[2].content.split(' ');

    return (
        <section className="techstation-section">
            <div className="techstation-container">
                <div className="header">
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
                    <div className="left-card">
                        <Card className="left-card1">
                            <Card.Body>
                                <Card.Text className="left-card-text">
                                    {techStationContent.mainContent[0].content1}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="left-card2" />
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
                </div>
            </div>
        </section>
    )

}

export default techstation