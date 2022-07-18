import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/home" },

  { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
  {iconName: "fa fa-linkedln", link: "https://www.linkedin.com/feed/"}
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
