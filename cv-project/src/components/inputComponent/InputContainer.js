import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import DatePicker from "react-datepicker";

const InputContainer = ({ previewValues, setPreviewValues }) => {
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

  const handleExperienceChanges = (field, index, value) => {
    let workExp = previewValues.experience;
    switch (field) {
      case "company":
        workExp[index].company = value;
        setPreviewValues({ ...previewValues, experience: workExp });
        break;
      case "position":
        workExp[index].position = value;
        setPreviewValues({ ...previewValues, experience: workExp });
        break;
      case "startDate":
        workExp[index].startDate = value;
        setPreviewValues({ ...previewValues, experience: workExp });
        break;
      case "endDate":
        workExp[index].endDate = value;
        setPreviewValues({ ...previewValues, experience: workExp });
        break;
      default:
        break;
    }
  };

  const handleEducationChanges = (field, index, value) => {
    let educBG = previewValues.educationBackground;
    switch (field) {
      case "school":
        educBG[index].school = value;
        setPreviewValues({ ...previewValues, educationBackground: educBG });
        break;
      case "startDate":
        educBG[index].startDate = value;
        setPreviewValues({ ...previewValues, educationBackground: educBG });
        break;
      case "endDate":
        educBG[index].endDate = value;
        setPreviewValues({ ...previewValues, educationBackground: educBG });
        break;
      default:
        break;
    }
  };

  const handleAddWorkExperience = () => {
    let currentExperience = previewValues.experience;
    currentExperience.push({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      jobDetails: [""],
    });
    setPreviewValues({ ...previewValues, experience: currentExperience });
  };

  const handleAddEducation = () => {
    let currentEducation = previewValues.educationBackground;
    currentEducation.push({
      school: "",
      startYear: "",
      endYear: "",
      schoolDetails: [""],
    });
    setPreviewValues({
      ...previewValues,
      educationBackground: currentEducation,
    });
  };

  const handleJobDetailChanges = (
    experienceIndex,
    jobDetailsindex,
    jobDetails,
    value
  ) => {
    let workExp = previewValues.experience;
    let jobDetailsTemp = jobDetails;
    jobDetailsTemp[jobDetailsindex] = value;
    workExp[experienceIndex].jobDetails = jobDetailsTemp;
    setPreviewValues({ ...previewValues, experience: workExp });
  };

  const handleaddJobDetails = (experienceIndex) => {
    let workExp = previewValues.experience;
    workExp[experienceIndex].jobDetails.push("");
    setPreviewValues({ ...previewValues, experience: workExp });
  };

  const handleaddSchoolDetails = (educationIndex) => {
    let educBG = previewValues.educationBackground;
    educBG[educationIndex].schoolDetails.push("");
    setPreviewValues({ ...previewValues, educationBackground: educBG });
  };

  const handleaddOtherDetails = () => {
    let othersTemp = previewValues.others;
    othersTemp.push("");
    setPreviewValues({ ...previewValues, others: othersTemp });
  };

  const handleSchoolDetailChanges = (
    educationIndex,
    schoolDetailsindex,
    schoolDetails,
    value
  ) => {
    let educBG = previewValues.educationBackground;
    let schoolDetailsTemp = schoolDetails;
    schoolDetailsTemp[schoolDetailsindex] = value;
    educBG[educationIndex].schoolDetails = schoolDetailsTemp;
    setPreviewValues({ ...previewValues, educationBackground: educBG });
  };

  const handleOtherDetailChanges = (otherIndex, value) => {
    let othersTemp = previewValues.others;
    othersTemp[otherIndex] = value;
    setPreviewValues({ ...previewValues, others: othersTemp });
  };

  return (
    <div className="input-container">
      <div className="category-container personal-information-container">
        <div className="category-label-box">
          <label className="category-label">Personal Information</label>
        </div>
        <div>
          <label className="label">First Name: </label>
          <input
            value={firstName || ""}
            onChange={(e) =>
              setPreviewValues({ ...previewValues, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="label">Last Name: </label>
          <input
            value={lastName || ""}
            onChange={(e) =>
              setPreviewValues({ ...previewValues, lastName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="label">Contact No: </label>
          <input
            value={contact || ""}
            onChange={(e) =>
              setPreviewValues({ ...previewValues, contact: e.target.value })
            }
          />
        </div>
        <div>
          <label className="label">Email: </label>
          <input
            value={email || ""}
            onChange={(e) =>
              setPreviewValues({ ...previewValues, email: e.target.value })
            }
          />
        </div>
        <div>
          <label className="label">Address: </label>
          <input
            value={address || ""}
            onChange={(e) =>
              setPreviewValues({ ...previewValues, address: e.target.value })
            }
          />
        </div>
      </div>
      <div className="category-container">
        <div className="category-label-box">
          <label className="category-label">Work Experience</label>
        </div>
        {experience?.map((exp, expIndex) => (
          <div className="details-container" key={expIndex}>
            <div>
              <label className="label">Company: </label>
              <input
                value={exp.company || ""}
                onChange={(e) =>
                  handleExperienceChanges("company", expIndex, e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">Position: </label>
              <input
                value={exp.position || ""}
                onChange={(e) =>
                  handleExperienceChanges("position", expIndex, e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">Start Date: </label>
              <DatePicker
                selected={exp.startDate}
                onChange={(date) =>
                  handleExperienceChanges("startDate", expIndex, date)
                }
                dateFormat={"MM/dd/yyyy"}
                wrapperClassName="datePicker"
              />
            </div>
            <div className="end-date-container">
              <div>
                <label className="label">End Date: </label>
                <DatePicker
                  selected={exp.endDate === "Present" ? "" : exp.endDate}
                  onChange={(date) =>
                    handleExperienceChanges("endDate", expIndex, date)
                  }
                  dateFormat={"MM/dd/yyyy"}
                  disabled={exp.endDate === "Present"}
                  wrapperClassName="datePicker"
                />
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="end-date-checkbox"
                  onChange={(e) =>
                    handleExperienceChanges(
                      "endDate",
                      expIndex,
                      e.target.checked ? "Present" : ""
                    )
                  }
                />
                <span>Currently working in this position</span>
              </div>
            </div>
            <div className="job-details-container">
              <div>
                <label className="label">Job Details: </label>
              </div>
              <div className="job-details-input-container">
                {exp.jobDetails?.map((detail, key) => (
                  <div className="job-details-input-box">
                    <input
                      value={detail || ""}
                      onChange={(e) =>
                        handleJobDetailChanges(
                          expIndex,
                          key,
                          exp.jobDetails,
                          e.target.value
                        )
                      }
                      key={key}
                    />
                    {exp.jobDetails.length - 1 === key && (
                      <span
                        className="add-details-icon"
                        onClick={() => handleaddJobDetails(expIndex)}
                      >
                        <MdAddCircleOutline />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button
          className="button-add"
          onClick={() => handleAddWorkExperience()}
        >
          Add Work Experience
        </button>
      </div>
      <div className="category-container">
        <div className="category-label-box">
          <label className="category-label">Educational Background</label>
        </div>
        {educationBackground?.map((education, educationIndex) => (
          <div key={educationIndex} className="details-container">
            <div>
              <label className="label">School Name: </label>
              <input
                value={education.school || ""}
                onChange={(e) =>
                  handleEducationChanges(
                    "school",
                    educationIndex,
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label className="label">Start Date: </label>
              <DatePicker
                selected={education.startDate || ""}
                onChange={(date) =>
                  handleEducationChanges("startDate", educationIndex, date)
                }
                dateFormat={"yyyy"}
                showYearPicker
                wrapperClassName="datePicker"
              />
            </div>
            <div>
              <label className="label">End Date: </label>
              <DatePicker
                selected={education.endDate || ""}
                onChange={(date) =>
                  handleEducationChanges("endDate", educationIndex, date)
                }
                dateFormat={"yyyy"}
                showYearPicker
                wrapperClassName="datePicker"
              />
            </div>
            <div className="school-details-container">
              <div>
                <label className="label">School Details: </label>
              </div>
              <div className="school-details-input-container">
                {education.schoolDetails?.map((detail, key) => (
                  <div className="school-details-input-box">
                    <input
                      value={detail || ""}
                      onChange={(e) =>
                        handleSchoolDetailChanges(
                          educationIndex,
                          key,
                          education.schoolDetails,
                          e.target.value
                        )
                      }
                      key={key}
                    />
                    {education.schoolDetails.length - 1 === key && (
                      <span
                        className="add-details-icon"
                        onClick={() => handleaddSchoolDetails(educationIndex)}
                      >
                        <MdAddCircleOutline />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button className="button-add" onClick={() => handleAddEducation()}>
          Add Education
        </button>
      </div>
      <div className="category-container">
        <div className="category-label-box">
          <label className="category-label">
            Others(Technical Skills, Achievements and others)
          </label>
        </div>
        <div className="other-details-container">
          <label className="label">Descriptions</label>
          <div className="other-details-input-container">
            {others?.map((detail, key) => (
              <div className="other-details-input-box">
                <input
                  value={detail || ""}
                  onChange={(e) =>
                    handleOtherDetailChanges(key, e.target.value)
                  }
                  key={key}
                />
                {others.length - 1 === key && (
                  <span
                    className="add-details-icon"
                    onClick={() => handleaddOtherDetails()}
                  >
                    <MdAddCircleOutline />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
