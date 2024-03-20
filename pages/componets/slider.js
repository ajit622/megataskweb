import React from 'react'
const Slider = () => {
  return (
    <>
     <div id="slider-home"  className="carousel slide"     data-ride="carousel"     data-pause="false"    >
            <ul className="carousel-indicators">
                <li data-target="#slider-home" data-slide-to={0} className="active" />
                <li data-target="#slider-home" data-slide-to={1} />
                <li data-target="#slider-home" data-slide-to={2} />
                <li data-target="#slider-home" data-slide-to={3} />
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="Los Angeles" />
                    <div className="carousel-caption">
                        <h3>discover a new you!</h3>
                        <p>Transform your look today with our special offers!</p>
                        <a className="btn" href="#">
                            Make an appointment
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="Chicago" />
                    <div className="carousel-caption">
                        <h3>discover a new you!</h3>
                        <p>Transform your look today with our special offers!</p>
                        <a className="btn" href="#">
                            Make an appointment
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="New York" />
                    <div className="carousel-caption">
                        <h3>discover a new you!</h3>
                        <p>Transform your look today with our special offers!</p>
                        <a className="btn" href="#">
                            Make an appointment
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/JRrHmhv/shanghai.jpg" alt="New York" />
                    <div className="carousel-caption">
                        <h3>discover a new you!</h3>
                        <p>Transform your look today with our special offers!</p>
                        <a className="btn" href="#">
                            Make an appointment
                        </a>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#slider-home" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#slider-home" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    </>
  )
}

export default Slider