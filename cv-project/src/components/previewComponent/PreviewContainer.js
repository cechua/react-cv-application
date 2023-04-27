import React from "react";

const PreviewContainer = ({ previewValues }) => {
  const { firstName, lastName } = previewValues;
  return (
    <div className="preview-container">
      <span>Preview here</span>
      <span>{`${firstName} ${lastName}`}</span>
    </div>
  );
};

export default PreviewContainer;
