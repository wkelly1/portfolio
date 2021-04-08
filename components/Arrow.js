function Arrow() {
  return (
    <span className="ml-2 arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
        <defs>
          <clipPath id="ag">
            <path d="M0 0h25v25H0z" />
          </clipPath>
        </defs>
        <g data-name="filled:icon-expand-right – 3" clipPath="url(#ag)">
          <path
            data-name="Path 31"
            d="M8.378 8.978l3.961 3.986-3.961 3.986"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="stroke-current"
          />
          <path
            data-name="Path 42"
            d="M12.631 12.965H8"
            fill="none"
            strokeLinecap="round"
            strokeWidth="2.5"
            className="stroke-current opacity-0"
          />
        </g>
      </svg>
    </span>
  );
}

function ArrowL() {
  return (
    <span className="transform rotate-180 arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
        <defs>
          <clipPath id="ag">
            <path d="M0 0h25v25H0z" />
          </clipPath>
        </defs>
        <g data-name="filled:icon-expand-right – 3" clipPath="url(#ag)">
          <path
            data-name="Path 31"
            d="M8.378 8.978l3.961 3.986-3.961 3.986"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="stroke-current"
          />
          <path
            data-name="Path 42"
            d="M12.631 12.965H8"
            fill="none"
            strokeLinecap="round"
            strokeWidth="2.5"
            className="stroke-current opacity-0"
          />
        </g>
      </svg>
    </span>
  );
}

function ArrowLg() {
  return (
    <span className="arrowLg">
      <svg
        width="25"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="filled:icon-expand-right – 3" clipPath="url(#ag)">
          <path
            d="M3 3l9 8-9 8"
            stroke="#071030"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current"
          />
          <path
            d="M15.5 11H8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            className="stroke-current opacity-0"
          />
        </g>
      </svg>
    </span>
  );
}

export { Arrow, ArrowLg, ArrowL };
