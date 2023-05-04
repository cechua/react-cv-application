import React, { useState } from "react";
import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import InputContainer from "components/inputComponent/InputContainer";
import PreviewContainer from "components/previewComponent/PreviewContainer";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [previewValues, setPreviewValues] = useState({
    firstName: "FirstName",
    lastName: "LastName",
    contact: "+639121233444",
    email: "sample@email.com",
    address: "123 Random Street Random City",
    experience: [
      {
        company: "Fake Company 1",
        position: "Front End Developer",
        startDate: "05/04/2023",
        endDate: "05/04/2027",
        jobDetails: [""],
      },
    ],
    educationBackground: [
      {
        school: "Fake School",
        startYear: "05/04/2021",
        endYear: "01/02/2024",
        schoolDetails: [
          "Major in Information Technology",
          "Scholarship recipient",
          "Dean lister S.Y. 2022-2023 1st Semester",
        ],
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
        <PreviewContainer previewValues={previewValues} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
