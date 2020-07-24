import React from 'react';
import { DeleteProfileModal } from './DeleteProfileModal';

export function Profile() {
  const [status, setStatus] = React.useState('active');

  if (status === 'deleted') {
    return <h1>Your profile was deleted</h1>;
  }

  return (
    <>
      <DeleteProfileModal
        isOpen={status === 'deleting'}
        onDelete={() => setStatus('deleted')}
        onCancel={() => setStatus('active')}
      />
      <h1>Your profile</h1>
      <button type="button" onClick={() => setStatus('deleting')}>
        Delete profile
      </button>
    </>
  );
}
