import * as React from "react"
import "./offerings.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { includes } from "lodash";
import { useState } from "react";
import { ReactComponent as OfferingLogo } from './images/offeringlogo.svg';
import { ReactComponent as OfferingLogoArrow } from './images/offering-logo-arrow.svg';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const Offerings = ({ offeringContent }) => {
    const words = offeringContent.title.split(' ');
    const [carouselkey, setCarouselKey] = useState(Object.keys(offeringContent.offeringCarousel)[0]);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
        custom: {
            breakpoint: { max: 600, min: 464 },
            items: 2,
            style: {
                carousel: {
                    container: {
                        minHeight: "25vh"
                    }
                }
            }
        }

    };

    let OfferingKeys = Object.keys(offeringContent.offeringCarousel);
    return (
        <section className="offerings-content">
            <div className="offerings-container">
                <div className="offering-title">
                    {words.map((word, index) => {
                        let style;
                        if (includes([0, 1], index)) {
                            style = { color: '#EBEBEB' }
                        }
                        else if (includes([2, 3], index)) {
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
                        <span className="arrow">
                            <OfferingLogoArrow />
                        </span>
                    </div>
                    
                    <Card className="offering-card">
                        <Card.Body>
                            <Card.Title className="offering-card-title">{carouselkey}</Card.Title>
                            <Card.Text className="">
                                <ul className="offering-card-ul">
                                    {
                                        offeringContent.offeringCarousel[carouselkey].map((item, index) => {
                                            return (
                                                <li className="offering-list-items"><span className="offering-item">{item}</span></li>
                                            )
                                        })
                                    }
                                </ul>
                            </Card.Text>
                            <Button className="offering-card-btn">Explore</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="offering-control">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousels-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "custom"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousels-item-padding-40-px"
                    >
                        {OfferingKeys.map((key, index) => {
                            return (
                                <div className="card card-m-15 offering-key-card">
                                    <div className="card-body offering-key" onClick={() => setCarouselKey(key)}>{key}</div>
                                </div>
                            )
                        }
                        )}
                    </Carousel>
                    <div className="offering-border">
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Offerings
