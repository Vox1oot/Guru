/* eslint-disable react/no-array-index-key */
import React from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import toast from '../Toast';
import Card from '../Card';
import CardSkeleton from '../Card/CardSkeleton';

import { ICard } from '../Card/Card.interface';

import 'react-toastify/dist/ReactToastify.css';

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

const CardMemo = React.memo(Card);

const Cards: React.FC = () => {
    const [dataCards, setDataCards] = React.useState<ICard[]>([]);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [downloadedCount, setDownloadedCount] = React.useState<number>(0);

    const handleDownloaded = React.useCallback((): void => {
        setDownloadedCount((prev) => prev + 1);
    }, []);

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

    if (dataCards.length && dataCards.length === downloadedCount) {
        toast();
    }

    return (
        <>
            <CardsWrapper>
                { dataCards.length === 0
                    ? [...new Array(16)].map((val, index) => <CardSkeleton key={index} />)
                    : dataCards.map((card: ICard) => (
                        <CardMemo
                            key={card.id}
                            {...card}
                            onSetDownloaded={handleDownloaded}
                        />
                    ))}
            </CardsWrapper>
            <ToastContainer />
        </>
    );
};

export default Cards;
