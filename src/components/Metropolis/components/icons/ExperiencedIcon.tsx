import React from "react";

const ExperiencedIcon = ({ width = 50, height = 50, color="#c7f284" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 icon icon-tabler icon-tabler-topology-star-ring-3 opacity-50 rounded-2xl border-2 border-solid border-[#c7f284] bg-[#c7f284]/15 px-2 py-1 mt-1"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 12h4" />
      <path d="M14 12h4" />
      <path d="M15 7l-2 3" />
      <path d="M9 7l2 3" />
      <path d="M11 14l-2 3" />
      <path d="M13 14l2 3" />
      <path d="M10 5h4" />
      <path d="M10 19h4" />
      <path d="M17 17l2 -3" />
      <path d="M19 10l-2 -3" />
      <path d="M7 7l-2 3" />
      <path d="M5 14l2 3" />
    </svg>
  );
};

export default ExperiencedIcon;