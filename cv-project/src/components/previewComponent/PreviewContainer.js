import React, { useRef } from "react";
import PreviewBox from "./PreviewBox";
import { useReactToPrint } from "react-to-print";

const PreviewContainer = ({ previewValues }) => {
  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
  });
  const componentRef = useRef();
  return (
    <div className="preview-container">
      <PreviewBox
        // @ts-ignore
        previewValues={previewValues}
        ref={componentRef}
      />
      <button className="button-add" onClick={generatePDF}>
        Generate PDF
      </button>
    </div>
  );
};

export default PreviewContainer;
