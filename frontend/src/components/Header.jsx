import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const url = new URL(window.location.href);

  return (
    <HeaderStyled actualUrl={url.pathname}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pics">Pics</Link>
        <Link to="/login">Login</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  height: 50px;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  margin-top: 8px;
  position: fixed;
  background-color: #fff9;
  z-index: 10;
  box-shadow: 0 0 10px #ccc;
  padding: 0 10px;
  min-width: 400px;
  width : max-content;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    align-self: center;

    a {
      font-size: 1.1rem;
      text-decoration: none;
      color: #000;
      text-shadow: 0 0 5px #ccc;
      width: max-content;
      margin: 0 20px;
      :hover {
        color: #61ac37;
        text-shadow: 0 0 5px #fff;
      }
    }
    a[href="${(props) => props.actualUrl}"] {
      color: #61ac87;
    }
  }
`;
