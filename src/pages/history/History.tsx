/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useSearchTerms } from "../../searchTerm";
import { HistoryContainer, HistoryItem } from "./styles";
import PictureModal from "../../components/pictureModal/PictureModal";
import { Picture, PictureContainer } from "../home/styles";

const History = () => {
  const { searchTerms } = useSearchTerms();
  const [selectedPictures, setSelectedPictures] = useState<any[]>([]);
  const [selectedPicture, setSelectedPicture] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const bottomBoundaryRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const handleTermClick = async (term: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${term}&client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y`
      );
      const data = await response.json();
      setSelectedPictures(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePictureClick = (picture: any) => {
    setSelectedPicture(picture);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPicture(null);
    setIsModalOpen(false);
  };

  const fetchMoreData = async () => {
    if (loadingMore) return;
    setLoadingMore(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${selectedPictures[0].alt_description}&client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y`
      );
      if (!response.ok) {
        throw new Error("Fetch error");
      }
      const newData = await response.json();
      setSelectedPictures((prevData: any) => [...prevData, ...newData.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (searchTerms.length > 0) {
      handleTermClick(searchTerms[0]);
    }
  }, [searchTerms]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        bottomBoundaryRef.current &&
        window.innerHeight + window.scrollY >=
          bottomBoundaryRef.current.offsetTop
      ) {
        fetchMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMoreData]);

  return (
    <div>
      {isModalOpen && (
        <PictureModal
          id="modalWindow"
          picture={selectedPicture}
          onClose={handleCloseModal}
        />
      )}
      <HistoryContainer>
        <h2>ისტორია</h2>

        {searchTerms.map((term, index) => (
          <HistoryItem key={index} onClick={() => handleTermClick(term)}>
            {term}
          </HistoryItem>
        ))}
      </HistoryContainer>
      <div>
        {selectedPictures.map((picture: any) => (
          <PictureContainer key={picture.id}>
            <Picture
              src={picture.urls.regular}
              alt={picture.alt_description}
              onClick={() => handlePictureClick(picture)}
            />
          </PictureContainer>
        ))}
      </div>
      <div ref={bottomBoundaryRef}></div>
      {loadingMore && <p>Loading...</p>}
    </div>
  );
};

export default History;
