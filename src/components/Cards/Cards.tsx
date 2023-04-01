/* eslint-disable react/no-array-index-key */
import React from 'react';

import axios from 'axios';
import styled from 'styled-components';
import Card from '../Card/Card';
import Loader from '../Card/Loader';

import { ICard } from '../Card/Card.interface';

const Error = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 25px;
    border: 2px solid #ff3333;
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Cards: React.FC = () => {
    const [dataCards, setDataCards] = React.useState<ICard[]>([]);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
            .then((response) => {
                setDataCards(response.data);
            }).catch((err) => {
                setIsError(true);
            });
    }, []);

    if (isError) {
        return (
            <Error>
                <p>Произошла ошибка получения даных! 🙁</p>
            </Error>
        );
    }

    return (
        <CardsWrapper>
            { dataCards.length === 0
                ? [...new Array(16)].map((val, index) => <Loader key={index} />)
                : dataCards.map((card: ICard) => <Card key={card.id} {...card} />)}
        </CardsWrapper>

    );
};

export default Cards;
