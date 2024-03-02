import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import { Input, InputWrapper, Picture, PictureContainer } from "./styles";
import PictureModal from "../../components/pictureModal/PictureModal";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, loading, error] = useFetch(
    "https://api.unsplash.com/photos/?client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y&page=1&per_page=20"
  );

  let typingTimeout: string | number | NodeJS.Timeout | undefined;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(typingTimeout);

    typingTimeout = setTimeout(() => {
      setSearchTerm(event.target.value);
    }, 2000);
  };

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("fetch error");
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchTerm]);

  const dataArray = Array.isArray(data) ? data : [];
  console.log("searchterm", searchTerm);

  const filteredPictures = dataArray.filter((picture) =>
    picture.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(data);
  return (
    <div>
      <PictureModal id="modalWindow" />
      <InputWrapper>
        <Input type="text" placeholder="ძებნა" onChange={handleSearch}></Input>
      </InputWrapper>
      {filteredPictures.map((picture) => (
        <PictureContainer>
          <Picture
            key={picture.id}
            src={picture.urls.regular}
            alt={picture.slug}
            // onClick={}
          />
        </PictureContainer>
      ))}
    </div>
  );
};

export default Home;
