import styled from 'styled-components';

export const HeaderMain = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: #f1f1f1;

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: blue;
    }

    img {
      margin-left: 30px;
      width: 150px;
      height: 150px;
    }
  }
  
  
`;
export const HeaderNav = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;


  ul {
    list-style: none;
    float: right;
    height: 25px;
    padding-top: 18px;

    li {
      float: left;
      margin-right: 20px;
      .active {
        text-decoration: underline;
      }

      a {
        background: #000;
        color: #fff;
        border: none;
        padding: 8px 16px;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        border-radius: 10px;
      }

      h1 {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 0;
        margin-top: 0;
      }
    }
  }
   
`;

