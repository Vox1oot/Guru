import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ShieldIcon } from '../../assets/svg/shield.svg';
import { ReactComponent as CarIcon } from '../../assets/svg/car.svg';

const CardFooter = styled.div`
    padding: 2px 10px 0 10px;
    text-align: left;
`;

const FooterRow1 = styled.div`
    display: flex;
    color: #c7c7c7;

    div:nth-last-child(-n + 2) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-last-child(1) {
        margin-left: 1rem;
    }
    `;

const IconWrapp = styled.div`
        flex-grow: 1;
        svg path {
            fill: green;
        },
    `;

const OldPrice = styled.div`
    text-decoration: line-through;
    flex-basis: 80%;
`;

const CardPrice = styled.div`
    font-size: 2rem;
    font-weight: bold;
    height: 2rem;
`;

const CardTitle = styled.p`
    margin: 1rem 0;
    font-size: 1.2rem;
`;

const FooterRow2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    color: #c7c7c7;
`;

const Footer = () => (
    <CardFooter>
        <FooterRow1>
            <OldPrice>0 000 ₽</OldPrice>
            <IconWrapp>
                <CarIcon />
            </IconWrapp>
            <IconWrapp>
                <ShieldIcon />
            </IconWrapp>
        </FooterRow1>
        <CardPrice>
            0 000 ₽
        </CardPrice>
        <CardTitle>Название товарной позиции</CardTitle>
        <FooterRow2>
            <p>Город (15 симвл)</p>
            <p>00.00.00, 00.0</p>
        </FooterRow2>
    </CardFooter>
);

export default Footer;
