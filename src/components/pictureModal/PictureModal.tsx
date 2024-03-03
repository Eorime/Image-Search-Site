import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import {
  ModalContainer,
  ModalImage,
  ModalCloseButton,
  ModalImageContainer,
} from "./style";

const PictureModal = ({ id, picture, onClose }: any) => {
  const [pictureData, setPictureData] = useState<any>({});

  console.log(picture, id);
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/${picture?.id}/statistics?client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y
    `)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setPictureData(data);
      });
  }, [picture]);

  console.log(pictureData);

  return (
    <div id={id} className="modal">
      <ModalContainer>
        <ModalCloseButton className="close" onClick={onClose}>
          Close
        </ModalCloseButton>
        {picture && (
          <ModalImageContainer>
            <ModalImage
              src={picture.urls.regular}
              alt={picture.alt_description}
            />
            <p>Likes: {pictureData?.likes?.total}</p>
            <p>Downloads: {pictureData?.downloads?.total}</p>
            <p>Views: {pictureData?.views?.total}</p>
          </ModalImageContainer>
        )}
      </ModalContainer>
    </div>
  );
};

export default PictureModal;
