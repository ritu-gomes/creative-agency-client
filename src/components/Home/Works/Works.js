import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import caro1 from '../../../images/carousel-1.png';
import caro2 from '../../../images/carousel-2.png';
import caro4 from '../../../images/carousel-4.png';
import caro5 from '../../../images/carousel-5.png';

const Works = () => {
    return (
        <section id="work" style={{background: "#111430"}} className="works py-5">
            <h2 className="mb-5 text-light text-center">Here Are Some of <span style={{color: "#7AB259"}}>OurWorks</span></h2>
            <InfiniteCarousel
                breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    },
                },
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={0.8}
                sideSize={0.3}
                slidesToScroll={1}
                slidesToShow={3}
                scrollOnDevice={true}
                autoCycle={true}
                pauseOnHover={true}
                lazyLoa={false}
                cycleInterval={1500}
                incrementalSides={true}
            >
                <div>
                    <img style={{width: "350px"}} src={caro1} alt=""/>
                </div>
                <div>
                    <img style={{width: "350px"}} src={caro2} alt=""/>
                </div>
                <div>
                    <img style={{width: "350px"}} src={caro4} alt=""/>
                </div>
                <div>
                    <img style={{width: "350px"}} src={caro5} alt=""/>
                </div>
            </InfiniteCarousel>
        </section >
    );
};

export default Works;