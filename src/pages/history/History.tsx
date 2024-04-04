import { useState } from "react";
import { useSearchTerms } from "../../searchTerm";
import { HistoryContainer, HistoryItem } from "./styles";
import PictureModal from "../../components/pictureModal/PictureModal";
import { Picture, PictureContainer } from "../home/styles";

const History = () => {
  const { searchTerms } = useSearchTerms();
  const [selectedPictures, setSelectedPictures] = useState<any[]>([]);
  const [selectedPicture, setSelectedPicture] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleTermClick = async (term: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y`
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
        <h2>History</h2>

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
    </div>
  );
};

export default History;
