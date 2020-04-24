import styled from "styled-components"

import {Link} from 'gatsby'

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background: #fff;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #fff;
  color: black;
  display: flex;
  padding: 1.5rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: gray;
  }
  &.previous {
    border-right: 1px solid black;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
