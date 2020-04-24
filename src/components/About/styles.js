import styled from "styled-components"

import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  justify-content: center;
  align-items: center;

  ${media.lessThan("large")`
    font-size: 16px;
  `}

  img {
    width: 400px;
    height: 400px;

    ${media.lessThan("large")`
      width: 200px;
      height: 200px;
    `}
  }

`;

export const Skills = styled.ul`
  
  li {
    list-style-type: none;
    margin-top: 30px;

    a {
      border-radius: 10px;
      background: black;
      color: white;
      padding: 12px 12px;

      &:hover {
        background-color: gray;
      }
    }
  }
  
`;