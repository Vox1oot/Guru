import React from 'react';

import { RotatingTriangles } from 'react-loader-spinner';

const CardSpinner = () => (
    <RotatingTriangles
        visible
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{
            display: 'block', margin: 'auto', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%',
        }}
        wrapperClass="rotating-triangels-wrapper"
    />
);

export default CardSpinner;
