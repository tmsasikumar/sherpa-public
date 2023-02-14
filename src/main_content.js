import * as React from "react"
import "./main_content.css"
import {Image} from "react-bootstrap";
import { ReactComponent as ArrowDown } from './images/caron.svg';

const MainContent = ({mainContent}) => {
    return (
        <section className="main-content">
            <div className="carousel-container">

                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                        ></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">


                        {mainContent?.map((d, index) => {
                            return (
                                <>
                                    <div className={`carousel-item ${index === 0 && `active`}`}>
                                        <h3 className="content-value">{d.content}</h3>
                                        <Image
                                            className="d-block w-100 img-fluid"
                                            src={require(`${d.image}`)}
                                            alt={`slide-${index}`}
                                        />
                                    </div>
                                </>
                            )
                        })}


                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
          <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
          ></span>
                        <span className="sr-only color" onClick={() => {
                        }}>Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
          <span
              className="carousel-control-next-icon"
              aria-hidden="true"
          ></span>
                        <span className="sr-only color">Next</span>
                    </a>
                </div>
            </div>
            <div className="scrollmore-container">
            <h3 className="scroll-text">Scroll to Explore more</h3>
           <ArrowDown/>
                </div>
        </section>
    )
}
export default MainContent
