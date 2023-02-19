import * as React from "react"
import "./offerings.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {includes} from "lodash";
import {useState} from "react";
import { ReactComponent as OfferingLogo } from './images/offeringlogo.svg';

const Offerings = ({ offeringContent }) => {
    const words = offeringContent.title.split(' ');
    const [carouselkey, setCarouselKey] = useState(Object.keys(offeringContent.offeringCarousel)[0]);

    let OfferingKeys = Object.keys(offeringContent.offeringCarousel);
    return (
        <section className="offerings-content">
            <div className="offerings-container">
                <div className="offering-title">
                    {words.map((word, index) => {
                        let style;
                        if (includes([0,1], index)) {
                            style = { color: '#EBEBEB' }
                        }
                        else if (includes([2,3], index)) {
                            style = { color: '#A3FA8D' }
                        } else {
                            style = { color: '#EBEBEB' }
                        }
                        return <h3 className=" offering-text"><span key={index} style={style}>{word}</span></h3>;
                    })}
                    <div className="offering-title-content">
                        <p> {offeringContent.titleContent}</p>
                    </div>
                </div>

                <div className="offering-card-content">
                    <div className="offering-logo-container">
                        <OfferingLogo />
                    </div>
                    <Card className="offering-card">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{carouselkey}</Card.Title>
                            <Card.Text>
                               <ul>
                                   {
                                       offeringContent.offeringCarousel[carouselkey].map((item, index) =>{
                                           return (
                                           <li>{item}</li>
                                           )
                                       })
                                   }
                               </ul>
                            </Card.Text>
                            <Button variant="primary">Explore</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="offering-control">
                    <div className="cards-wrapper">
                        {
                            OfferingKeys.map((key, index) =>{
                                return (
                                    <div className="card" onClick={() => setCarouselKey(key)}>
                                        <div className="card-body">
                                            <h5 className="card-title">{key}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </section>
    )
}
export default Offerings
