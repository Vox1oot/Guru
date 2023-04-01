import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: calc(100% - 500px);

`;

const Header = styled.header`
    padding: 2rem;
`;

const Content: React.FC = () => (
    <Wrapper>
        <Header>
            <h1>Похожие объявления</h1>
        </Header>
        <Cards />
    </Wrapper>
);

export default Content;
