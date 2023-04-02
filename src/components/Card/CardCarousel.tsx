import React from 'react';
import Carousel from 'nuka-carousel';

const CardCarousel = ({ url }: { url: string }) => (
    <Carousel
        defaultControlsConfig={{
            nextButtonText: '>',
            prevButtonText: '<',
            pagingDotsStyle: {
                padding: '0.5rem',
            },
        }}
    >
        <img alt="myImage" src={url} />
        <img alt="myImage" src={url} />
        <img alt="myImage" src={url} />
    </Carousel>
);

export default CardCarousel;
