import React from "react";

const InputContainer = ({ previewValues, setPreviewValues }) => {
  const { firstName, lastName, address, contact, email, experience } =
    previewValues;

  return (
    <div className="input-container">
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
      <div>
        <label className="label">Experience </label>
      </div>
      <div>
        <label className="label">Company: </label>
        <input
          value={experience || ""}
          onChange={(e) =>
            setPreviewValues({ ...previewValues, experience: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default InputContainer;
