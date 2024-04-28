'use client';
import { Box, Modal } from '@mui/material';
import React from 'react';
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserImageModal({ modalData, closeModal }) {
  const { isOpen, data } = modalData;
  function handleClose() {
    closeModal();
  }
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={modalStyle}>
        <img src={data?.row.image} />
      </Box>
    </Modal>
  );
}
