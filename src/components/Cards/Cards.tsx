import React from 'react';

import axios from 'axios';
import styled from 'styled-components';
import Card from '../Card/Card';

import { ICard } from '../Card/Card.interface';

const Error = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 25px;
    border: 2px solid #ff3333;
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
        <>
            { dataCards.map((card: ICard) => <Card key={card.id} {...card} />) }
        </>
    );
};

export default Cards;
