import React from 'react'
import Stats from './Stats'

const Card = () => {
    return (
        <div className="card">
            <div id="first-column">
                <section>
                    <h1 className="card__heading">Get <span className="card__heading--accent">insights</span> that help your business grow.</h1>
                    <p className="card__article">
                        Discover the benefits of data analytics and make
                        better decisions regarding revenue, customer 
                        experience, and overall efficiency.
                    </p>
                </section>
                <section>
                    <Stats />
                </section>
            </div>
            <figure className='card__img-wrapper'>
                {/* <img srcSet={"./images/image-header-desktop.jpg, ./images/image-header-mobile.jpg"} alt="businesswomen sit in office"></img> */}
            </figure>     
        </div>
    )
}

export default Card
