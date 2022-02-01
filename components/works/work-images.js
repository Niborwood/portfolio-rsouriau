import propTypes from "prop-types";
import Image from "next/image";
import { useState, Fragment } from "react";

// COMPONENT IMPORTS
import Modal from "../ui/modal";

export default function WorkImages({ images }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  function openModal(image) {
    setModalOpen(true);
    setModalImage(image);
  }
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Fragment>
      {images.map((image) => (
        <div className="hover:drop-shadow-lg" key={image}>
          <Image
            src={image}
            alt="Project title"
            title="Project title"
            width="600"
            height="400"
            className="object-cover rounded-lg cursor-pointer"
            onClick={() => openModal(image)}
          />
        </div>
      ))}
      {modalOpen && (
        <Modal handleClose={closeModal}>
          <div className="drop-shadow-lg">
            <Image
              src={modalImage}
              alt="Project title"
              title="Project title"
              width="800"
              height="600"
              className="object-cover rounded-lg "
            />
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

WorkImages.propTypes = {
  images: propTypes.arrayOf(propTypes.string).isRequired,
};
