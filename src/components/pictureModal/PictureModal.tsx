import React, { useState } from "react";
import Modal from "../modal/Modal";
import useFetch from "../../hooks/useFetch";

interface PictureStatistics {
  downloads: {
    total: number;
    historical: any;
  };
  views: {
    total: number;
    historical: any;
  };
  likes: {
    total: number;
    historical: any;
  };
}

function PictureModal(props: { id: string }) {
  const { id } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [data, loading, error] = useFetch(
    `https://api.unsplash.com/photos/${id}/statistics?client_id=ciD3qZfhxfqYHKizFKhpM81EU4HOo4czYFqX-3Vlr0Y`
  );

  console.log(id);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Click to open</button>
      <Modal isOpen={modalOpen} close={closeModal}>
        {/* <p>{data && data.downloads.total}</p> */}
        <button onClick={closeModal}>chaxure</button>
      </Modal>
    </div>
  );
}

export default PictureModal;
