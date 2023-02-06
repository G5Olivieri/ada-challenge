import styled, { css } from "styled-components";

const Card = styled.div`
    display: flex;
    padding: 3;
    background-color: "white";
    margin: "2";
    border-radius:"8";
    border: "2px solid gray.500";
    box-shadow: "0px 0px 5px 2px #2121213b";
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    background: white;
    box-shadow: 1px 1px 3px 0px rgba(189,189,189,.5);
    width: 100%;
    max-width: 700px;
    main {
        min-height: 100px;
    }
    header {
        display: flex;
        justify-content: space-between;
        h3 {
            flex-grow: 1;
        }
    }
    footer {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
`

const Button = styled.button`
    background: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
    &:hover {
      background-color: #edf2f7;
    }
    ${props => props.disabled && css`
      color: #c1c1c1;
      cursor: default;
      &:hover {
        background-color: white;
      }
    `}
    &:active {
        background-color: white;
    }
`

const Input = styled.input`
    width: 100%;
    height: 2.5rem;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d0d7de;
    margin-bottom: 10px;
`

export default {
    Card,
    Button,
    Input,
}