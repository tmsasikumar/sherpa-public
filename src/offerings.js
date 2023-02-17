import * as React from "react"
import "./offerings.css";


const Offerings = ({ offeringContent }) => {
    const words = offeringContent.title.split(' ');

    return (
        <section className="offerings-content">
            <div className="offerings-container">
                <div className="offering-title">
                    {words.map((word, index) => {
                        let style;
                        if (word === 'What' || word === 'we') {
                            style = { color: '#EBEBEB' }
                        }
                        else if (word === 'offer' || word === '?') {
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
                    <div className="offering-logo">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Offerings
