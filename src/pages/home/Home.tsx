import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Input, InputWrapper, Picture, PictureContainer } from "./styles";
import PictureModal from "../../components/pictureModal/PictureModal";
import { useSearchTerms } from "../../searchTerm";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchedPictures, setSearchedPictures] = useState<any>([]);
  const [data, loading, error] = useFetch(
    "https://api.unsplash.com/photos/?client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y&page=1&per_page=100"
  );
  const [selectedPicture, setSelectedPicture] = useState<any>(null);
  const { addSearchTerm, searchTerms } = useSearchTerms();

  let typingTimeout: string | number | NodeJS.Timeout | undefined;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(typingTimeout);

    typingTimeout = setTimeout(() => {
      const searchTerm = event.target.value;
      setSearchTerm(searchTerm);
      addSearchTerm(searchTerm);
      setSelectedPicture(null);
    }, 1500);
  };

  const handlePictureClick = (picture: any) => {
    setSelectedPicture(picture);
  };

  const handleCloseModal = () => {
    setSelectedPicture(null);
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
          setSearchedPictures(data.results);
        })
        .catch((err) => {});
    } else {
      setSearchedPictures([]);
    }
  }, [searchTerm]);

  return (
    <div>
      {selectedPicture && (
        <PictureModal
          id="modalWindow"
          picture={selectedPicture}
          onClose={handleCloseModal}
        />
      )}
      <InputWrapper>
        <Input type="text" placeholder="Search" onChange={handleSearch} />
      </InputWrapper>
      {searchedPictures && searchedPictures.length === 0
        ? data?.map((picture: any) => (
            <PictureContainer key={picture.id}>
              <Picture
                src={picture.urls.regular}
                alt={picture.slug}
                onClick={() => handlePictureClick(picture)}
              />
            </PictureContainer>
          ))
        : searchedPictures?.map((picture: any) => (
            <PictureContainer key={picture.id}>
              <Picture
                src={picture.urls.regular}
                alt={picture.slug}
                onClick={() => handlePictureClick(picture)}
              />
            </PictureContainer>
          ))}
    </div>
  );
};

export default Home;
