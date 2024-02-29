import React from "react";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import { Input, InputWrapper, Picture, PictureContainer } from "./styles";

const Home = () => {
  const [data, loading, error] = useFetch(
    "https://api.unsplash.com/photos/?client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y&page=1&per_page=20"
  );
  const dataArray = Array.isArray(data) ? data : [];

  return (
    <div>
      <InputWrapper>
        <Input type="text" placeholder="ძებნა"></Input>
      </InputWrapper>
      {dataArray.map((picture) => (
        <PictureContainer>
          <Picture key={picture.id} src={picture.urls.regular} />
        </PictureContainer>
      ))}
    </div>
  );
};

export default Home;
