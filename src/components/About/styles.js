import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;

  img {
    margin-left: 150px;
    width: 400px;
    height: 400px;
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