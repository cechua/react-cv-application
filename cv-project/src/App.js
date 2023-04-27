import React, { useState } from "react";
import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import InputContainer from "components/inputComponent/InputContainer";
import PreviewContainer from "components/previewComponent/PreviewContainer";

function App() {
  const [previewValues, setPreviewValues] = useState({
    firstName: "FirstName",
    lastName: "LastName",
  });
  return (
    <div className="App">
      <Header />
      <div className="bodyContainer">
        <InputContainer
          previewValues={previewValues}
          setPreviewValues={setPreviewValues}
        />
        <PreviewContainer previewValues={previewValues} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
