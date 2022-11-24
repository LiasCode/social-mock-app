import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://social-mock-app.onrender.com";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const newData = await axios.get(url);
      setData(newData.data);
    })();
  }, []);

  return (
    <>
      <h1> Home </h1>

      <Container>
        {!data && <span>...loading</span>}

        {data && data.map((el) => <PicsBox key={el}>{el}</PicsBox>)}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
const PicsBox = styled.div`
  margin: 10px;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;
