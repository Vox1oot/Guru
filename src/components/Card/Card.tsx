import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Footer from './Footer';
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg';
import { ICard } from './Card.interface';

const CardWrapper = styled.div<{ isSeen?: boolean }>`
    position: relative;
    width: 320px;
    background-color: ${(props) => (props.isSeen ? '#fff6a5' : '#fff')};
    box-shadow: 0px 0px 10px 5px #eee;
    border-radius: 20px 20px 8px 8px;
    margin: 20px;
    overflow: hidden;
`;

const IconWrapp = styled.div`
    flex-grow: 1;
    svg:hover path{
        fill: green;
        cursor:pointer
    },
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
`;

const ImgIcons = styled.div`
    position: absolute;
    right: 9px;
    bottom: 40px;
`;

const CardImgWrapper = styled.div`
    position: relative;
`;

const CardSeenWrapper = styled.div`
    position: absolute;
    text-align: center;
    padding: 30px 0;
    width: 100%;
    z-index: 1;
`;

const CardSeen = styled.span`
    padding: 8px 10px;
    border-radius: 10px;
    color: #fff;
    background-color: #5e5e5c;
`;

const Card: React.FC<ICard> = ({ seen, ...props }) => {
    const [imgUrl, setImgUrl] = React.useState<string>('');

    React.useEffect(() => {
        axios
            .get('https://source.unsplash.com/random/360x360')
            .then((response) => setImgUrl(response.request.responseURL));
    }, []);

    if (!imgUrl) {
        return (
            <CardWrapper>
                eferger
            </CardWrapper>
        );
    }

    return (
        <CardWrapper isSeen={seen}>
            { seen && (
                <CardSeenWrapper>
                    <CardSeen>Просмотрено</CardSeen>
                </CardSeenWrapper>
            )}
            <CardImgWrapper>
                <CardImg src={imgUrl} />
                <ImgIcons>
                    <IconWrapp>
                        <HeartIcon />
                    </IconWrapp>
                </ImgIcons>
            </CardImgWrapper>
            <Footer {...props} />
        </CardWrapper>
    );
};

export default Card;
