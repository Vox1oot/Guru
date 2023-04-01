import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: calc(100% - 300px);

`;

const Header = styled.header`
    padding: 2rem;
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Content: React.FC = () => (
    <Wrapper>
        <Header>
            <h1>Похожие объявления</h1>
        </Header>
        <CardsWrapper>
            <Cards />
        </CardsWrapper>
    </Wrapper>
);

export default Content;
