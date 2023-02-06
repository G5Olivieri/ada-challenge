import styled from "styled-components";

const Container = styled.div`
    padding: 10px;
    min-height: 100vh;
`

const Title = styled.h1`
`

const Header = styled.header`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`
const Button = styled.button`
    color: white;
    background: rgb(49, 151, 149);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    cursor: pointer;
    padding: 15px;
    display: flex;
    margin-left: 50px;
    justify-content: space-around;
    align-items: center;
    &:hover {
      background-color: #2c7a7b;
    }
    &:active {
      background: rgb(49, 151, 149);
    }
`

export default {
    Container,
    Title,
    Header,
    Button,
}