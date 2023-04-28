import React from "react";

const PreviewContainer = ({ previewValues }) => {
  const {
    firstName,
    lastName,
    address,
    contact,
    email,
    experience,
    educationBackground,
  } = previewValues;
  return (
    <div className="preview-container">
      <span>Preview here</span>
      <span>{`${firstName} ${lastName}`}</span>
      {experience?.map((exp, i) => (
        <div key={i}>
          <div>{exp.company}</div>
          <div>{exp.position}</div>
          {exp.jobDetails.map((detail, i) => (
            <span key={i}>{detail}</span>
          ))}
        </div>
      ))}
      {educationBackground?.map((education, i) => (
        <div key={i}>
          <div>{education.school}</div>
          {education.schoolDetails.map((detail, i) => (
            <span key={i}>{detail}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PreviewContainer;
