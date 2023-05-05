import React, { useRef } from "react";
import PreviewBox from "./PreviewBox";
import { useReactToPrint } from "react-to-print";

const PreviewContainer = ({ previewValues, setPreviewValues }) => {
  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
  });
  const resetDetails = () => {
    setPreviewValues({
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
  };
  const generateFakeDetails = () => {
    setPreviewValues({
      firstName: "James",
      lastName: "Doe",
      contact: "1234567890",
      email: "sample@email.com",
      address: "123 Random Street Random City",
      experience: [
        {
          company: "Fake Company 1",
          position: "Front End Developer",
          startDate: "05/04/2023",
          endDate: "",
          jobDetails: [
            "Develop and maintains web application",
            "Uses ReactJS with TypeScript, GraphQL, MaterialUI",
            "Collaborate with teammates with the help of JIRA and GIT",
            "Manages to finish tickets on a timely manner",
          ],
        },
        {
          company: "Fake Company 2",
          position: "Back End Developer",
          startDate: "05/04/2020",
          endDate: "05/04/2023",
          jobDetails: [
            "Develop and maintain API Services",
            "Use NodeJS and MongoDB",
            "Collaborate with teammates with the help of JIRA and GIT",
            "Manages to finish tickets on a timely manner",
          ],
        },
      ],
      educationBackground: [
        {
          school: "Fake School",
          startYear: "05/04/2016",
          endYear: "01/02/2020",
          schoolDetails: [
            "Bachlor of Sciense in Information Technology: Major in Web Development",
            "Scholarship recipient",
            "Dean lister S.Y. 2022-2023 1st Semester",
          ],
        },
      ],
      others: [
        "Programming languages knowldge: Javascript, React, SQL, NodeJS,GraphQL, TypeScript, HTML & CSS",
        "Application/Software used: Visual Studio Code, Postman",
        "Languages spoken: English, Spanish, Chinese, Japanese",
        "Team player",
        "Able to collaborate with teammates efficiently",
        "Willing to be trained for new technologies",
        "Eager to learn new tech stacks",
      ],
    });
  };
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
      <button className="button-add" onClick={generateFakeDetails}>
        Generate Sample CV
      </button>
      <button className="button-add" onClick={resetDetails}>
        Clear
      </button>
    </div>
  );
};

export default PreviewContainer;
