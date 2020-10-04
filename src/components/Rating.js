import React from 'react';
import styled from 'styled-components/native';

import RatingFull from '../images/star.svg';
import RatingHalf from '../images/star_half.svg';
import RatingEmpty from '../images/star_empty.svg';


const RatingArea = styled.View`
    flex-direction: row;
`;

const RatingView = styled.View`

`;

const RatingText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color: #737373;
`;

export default ({stars, note, showNumber}) => {
    let s = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor

    for(var i=0;i<floor;i++) {
        s[i] = 2;
    }
    if(left > 0) {
        s[i] = 1
    }

    return (
        <RatingArea>
            {s.map((i, k)=>(
                <RatingView key={k}>
                    {i == 0 && <RatingEmpty width="18" height="18" fill="#FF9200" />}
                    {i == 1 && <RatingHalf width="18" height="18" fill="#FF9200" />}
                    {i == 2 && <RatingFull width="18" height="18" fill="#FF9200" />}
                </RatingView> 
            ))}
            {showNumber && <RatingText>{note}</RatingText>}   
        </RatingArea>
    );
}