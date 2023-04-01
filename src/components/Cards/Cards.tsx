import React from 'react';

import axios from 'axios';
import styled from 'styled-components';
import Card from '../Card/Card';

interface ICard {
    id: string,
    oldPrice: string,
    price: string,
    title: string,
    seen: boolean,
    locality: string,
    date: number,
}

const Error = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 25px;
    border: 2px solid #ff3333;
`;

const Cards: React.FC = () => {
    const [data, setData] = React.useState<ICard[]>([]);
    const [isError, setIsError] = React.useState(false);

    console.log(data);

    React.useEffect(() => {
        axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
            .then((response) => {
                setData(response.data);
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
        <Card />
    );
};

export default Cards;
