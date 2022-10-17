import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import axios from "axios";

const BestMemories = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios.get("http://localhost:1966/api").then((res) => {
      setData(res.data.data);
    });
    console.log(data);
  };

  const postData = async () => {
    await axios.post(
      "http://localhost:1966/api/create"
      //  { name: text }
    );
  };

  const likeData = async () => {
    await axios.post("http://localhost:1966/api/like");
  };

  useEffect(() => {
    getData();
    postData();
    likeData();
  }, []);
  return (
    <Container>
      <Wrapper>
        {/* <Top>
          <Test>ENter A Name</Test>
          <Search></Search>
        </Top> */}
        <Card>
          {data?.map((props) => {
            <TextHolder>
              <Holder>
                <Title>Manel</Title>
                <Icon />
              </Holder>
              <Message>
                Total Likes : <span>42,000</span>
              </Message>
            </TextHolder>;
          })}
          <Image src="/logo192.png" />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default BestMemories;

// const Top = styled.div``
const Test = styled.div``;
const Top = styled.div`
  width: 75%;
  height: 90px;
  background-color: red;
`;
const Icon = styled(FcLike)`
  color: red;
  font-size: 25px;
  transition: all 350ms;
  transform: scale(1);
  transform-origin: center;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Message = styled.div`
  color: gray;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 500;
`;

const TextHolder = styled.div`
  padding: 5px 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const Card = styled.div`
  margin: 10px;
  width: 300px;
  min-height: 320px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  height: 100%;
  padding-top: 70px;
`;
