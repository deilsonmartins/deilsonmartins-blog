import styled from 'styled-components';

import {Link} from 'gatsby';

import media from "styled-media-query";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
`;

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 200px;
    align-items: center;
    color: black;
    
    p {
        margin-left: 30px;
        margin-right: 30px;
        opacity: 0.8;
    }

    span {
        opacity: 0.6;
    }

    h1 {
        margin-left: 30px;
        margin-right: 30px;
    }
`;

export const PostLink = styled(Link)`

    display: flex;
    width: 100%;
    max-width: 600px;
    height: 200px;
    border: 3px solid gray;
    text-decoration: none;
    transition: background 1s;
    margin-bottom: 30px;
    border-radius: 10px;
    
    &:hover {
        background: #BDBDBD;
    }

    ${media.lessThan("large")`
        width: 300px;
        height: 250px;
    `}
`