import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function DeleteProfileModal({ isOpen, onDelete, onCancel }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Delete profile modal"
      testId="delete-profile-modal"
    >
      <h1>Delete profile</h1>
      <p>
        Are you sure you want to delete your profile? This action can’t be
        undone.
      </p>
      <button type="button" onClick={onDelete}>
        Delete profile
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </Modal>
  );
}

DeleteProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
