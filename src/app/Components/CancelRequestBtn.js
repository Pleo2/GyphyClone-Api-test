import React from 'react';

export default function CancelRequestBtn({ handleCancelRequest }) {
  return (
    <button
    type="button"
    onClick={handleCancelRequest}
  >
    cancel request
  </button>
  )
}
