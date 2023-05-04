import { format } from "date-fns";
import React from "react";

const PreviewBox = React.forwardRef((props, ref) => {
  // @ts-ignore
  const { previewValues } = props;
  const {
    firstName,
    lastName,
    address,
    contact,
    email,
    experience,
    educationBackground,
    others,
  } = previewValues;

  return (
    <div className="preview-box" ref={ref}>
      <div className="preview-personalInformation">
        <span className="preview-name">{`${firstName} ${lastName}`}</span>
        <div className="preview-contactInformations">
          <span className="preview-address">{address}</span>
          <span className="preview-contact">{contact}</span>
          <span className="preview-email">{email}</span>
        </div>
      </div>
      <div className="preview-educationalBackground">
        <span className="preview-label preview-label-educationalBackground">
          Educational Background
        </span>
        {educationBackground?.map((education, i) => (
          <div key={i}>
            <div className="preview-school">
              <span className="preview-education-school">
                {education.school}
              </span>
              <div>
                <span>
                  {education.startYear
                    ? new Date(education.startYear).getFullYear().toString()
                    : ""}
                </span>
                <span>
                  {education.endYear
                    ? "-" + new Date(education.endYear).getFullYear().toString()
                    : ""}
                </span>
              </div>
            </div>
            <ul>
              {education.schoolDetails.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="preview-workExperience">
        <span className="preview-label preview-label-workExperience">
          Work Experience
        </span>
        {experience?.map((exp, i) => (
          <div key={i}>
            <div className="preview-work">
              <span className="preview-work-company">{exp.company}</span>
              <div>
                <span>
                  {exp.startDate
                    ? format(new Date(exp.startDate), "MMM") +
                      " " +
                      format(new Date(exp.startDate), "yyyy")
                    : ""}
                </span>
                <span>
                  {exp.endDate
                    ? " - " +
                      format(new Date(exp.endDate), "MMM") +
                      " " +
                      format(new Date(exp.endDate), "yyyy")
                    : exp.startDate
                    ? " - Present"
                    : ""}
                </span>
              </div>
            </div>
            <div className="preview-work-position">{exp.position}</div>
            {exp.jobDetails && <div>Role Details</div>}
            <ul>
              {exp.jobDetails.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="preview-otherSkills">
        <span className="preview-label preview-label-otherSkills">
          Technical & Interpersonal Skills
        </span>
        <ul>
          {others?.map((other, i) => (
            <li key={i}>{other} </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default PreviewBox;
