import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: opacity 0.4s;
    .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    }
    .ais-SearchBox,
    .ais-Stats {
    padding: 0.5rem 3rem;
    }
    .ais-SearchBox {
    padding-top: 6rem;
    }
    .ais-Stats {
    color: black;
    }

    body#grid & {
    .ais-Hits-list {
        background-color: black;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        display: grid;
        grid-area: card;
        grid-gap: 1px;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        margin-top: 2rem;
    }
    .ais-Hits-item {
        background-color: black;
    }
    }

    .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid black;
    color: black;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
        color: #8899a6;
    }
    }
    .ais-SearchBox-submit,
    .ais-SearchBox-reset {
    display: none;
    }

    
`;
