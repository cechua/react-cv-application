import React, { useState } from "react";
import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import InputContainer from "components/inputComponent/InputContainer";
import PreviewContainer from "components/previewComponent/PreviewContainer";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [previewValues, setPreviewValues] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: "",
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        jobDetails: [""],
      },
    ],
    educationBackground: [
      {
        school: "",
        startYear: "",
        endYear: "",
        schoolDetails: ["", "", ""],
      },
    ],
    others: [""],
  });
  return (
    <div className="App">
      <Header />
      <div className="bodyContainer">
        <InputContainer
          previewValues={previewValues}
          setPreviewValues={setPreviewValues}
        />
        <PreviewContainer
          previewValues={previewValues}
          setPreviewValues={setPreviewValues}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
