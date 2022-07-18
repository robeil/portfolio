import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Robeil" },
  { meta: "last name", metaInfo: "Aregawi" },
  { meta: "Age", metaInfo: "-- Years" },
  { meta: "Nationality", metaInfo: "Eritrean" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Seattle" },
  { meta: "phone", metaInfo: "206-602-5164" },
  { meta: "Email", metaInfo: "robeilaregawi1@mail.com" },
  { meta: "Skype", metaInfo: " robeil.aregawi" },
  { meta: "language", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
