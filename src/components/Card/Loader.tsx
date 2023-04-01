import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
    <ContentLoader
        speed={2}
        width={320}
        height={472}
        viewBox="0 0 320 472"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={{ margin: '20px' }}
    >
        <rect x="1" y="1" rx="22" ry="22" width="320" height="470" />
    </ContentLoader>
);

export default Loader;
