import React, { useState } from 'react';

const ImageViewer = ({ defaultImg, name }) => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleImageClick = (img) => {
        setSelectedImg(img);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImg(null);
        setModalIsOpen(false);
    };

    return (
            <div className='single-room-images'>
                {defaultImg.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt={name}
                        onClick={() => handleImageClick(item)}
                    />
                ))}
                            {modalIsOpen && (
                <div onClick={closeModal} className="image-viewer">
                    <div>
                        {selectedImg && (
                            <img src={selectedImg} alt={name} className="modal-content" />
                        )}
                    </div>
                </div>

            )}
            </div>
    );
};

export default ImageViewer;
