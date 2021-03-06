import styled from "styled-components"

import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;

      ${media.lessThan("large")`
        grid-template-columns: repeat(1, 1fr);
        margin-right: 40px;
      `}

      li {
        width: 300px;
        height: 300px;
        list-style-type: none;
        border: 3px solid gray;
        font-size: 21px;
        text-align: center;
        border-radius: 10px;
        
        a {
          text-decoration: none;
          color: blue;
        }
            
    }
  }

 
`
