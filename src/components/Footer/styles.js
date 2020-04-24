import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    color:#000!important;
    background-color:#f1f1f1!important;
    font-size:24px!important;
    padding:0.01em 16px;
    margin-top:16px;
    margin-bottom:16px;
    padding-top:32px!important;
    padding-bottom:32px!important;
    text-align:center!important;

    p {
        opacity: 0.7;
    }
`;

export const Container = styled.div`
    a {
        background: #000;
        color: #fff;
        border: none;
        padding: 8px 16px;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        margin-left: 30px;
        border-radius: 10px;
        transition: background 0.5s;
        

        &:hover {
            background-color: gray;
        }
    }

`