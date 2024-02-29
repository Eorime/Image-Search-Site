import React from "react";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import { Input, InputWrapper } from "../../components/header/styles";

const Home = () => {
  let fetchedPictures = useFetch(
    "https://api.unsplash.com/photos/?client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y"
  );

  console.log(fetchedPictures);
  return (
    <div>
      <Header />
      <InputWrapper>
        <Input type="text" placeholder="ძებნა"></Input>
      </InputWrapper>
    </div>
  );
};

export default Home;
