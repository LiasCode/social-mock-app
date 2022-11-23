import { useState } from "react";
import styled from "styled-components";

export default function FormLogin() {
  const [loginState, setLoginState] = useState("login");

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <img src="/pen.png" placeholder="logo" />

      <div className="switchLogin">
        <button
          className={loginState === "login" ? "active" : ""}
          type="button"
          onClick={() => setLoginState("login")}
        >
          login
        </button>

        <span>/</span>

        <button
          className={loginState !== "login" ? "active" : ""}
          type="button"
          onClick={() => setLoginState("singUp")}
        >
          Sing Up
        </button>
      </div>

      {loginState === "login" ? <LoginPart /> : <SingUpPart />}

      <BtnBox>
        <button type="submit">Aceptar</button>
        <button type="reset">Reset</button>
      </BtnBox>
    </Form>
  );
}

const LoginPart = () => (
  <>
    <input
      autoComplete="email"
      type={"email"}
      placeholder="email"
      name="email"
    />
    <input
      autoComplete="current-password"
      type={"password"}
      placeholder="password"
      name="password"
    />
  </>
);

const SingUpPart = () => (
  <>
    <input
      autoComplete="username"
      type={"text"}
      placeholder="name"
      name="name"
    />
    <input
      autoComplete="email"
      type={"email"}
      placeholder="email"
      name="email"
    />
    <input
      autoComplete="new-password"
      type={"password"}
      placeholder="password"
      name="new-password"
    />
    <input
      autoComplete="new-password"
      type={"password"}
      placeholder="rewrite password"
      name="re-new-password"
    />
  </>
);

const Form = styled.form`
  width: 450px;
  min-height: 400px;
  height: max-content;
  border: 1px sodid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  position: relative;
  background-color: #fff;

  .switchLogin {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
      background-color: #fff0;
      outline: none;
      color: #ccc;
      text-transform: capitalize;
      cursor: pointer;
      transition: color 1s;

      :hover {
        transition: color 0s;
        color: #000;
      }
    }
    button.active {
      color: #61ac87;
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin: 10px 0;
    :hover {
      filter: drop-shadow(0 0 60px #61ac87);
    }
  }

  input {
    outline: none;
    border: none;
    margin: 15px 0;
    width: 90%;
    height: 50px;
    padding: 5px 5px 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1.1rem;

    :focus {
      box-shadow: 0 0 10px #ccc;
    }
  }
`;

const BtnBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;

  button {
    height: 100%;
    background-color: #fff0;
    outline: none;
    color: #555;
    border: 1px solid #ccc;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 1.1rem;
    margin: 0 10px;
    border-radius: 5px;

    :hover {
      color: #61ac87;
      border: 1px solid #61ac87;
    }
  }
`;
