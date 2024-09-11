import React, { useEffect, useState } from "react";
/*
  Props Received:
    image: image
    position: position in the council (e.g. Secretary)
    insta: The instagram profile link
    linkedin:
    github:
    align: 
 */
const Card = (props) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="p-4 lg:w-4/5 md:w-full">
          <div className="h-full flex flex-col items-center text-center">
            {props.align === "top" ? 
            <img
            src={props.image}
            alt="Member"
            className="object-cover object-top drop-shadow-2xl flex-shrink-0 rounded-3xl w-48 h-48 mb-4"
            /> : 
            <img
              src={props.image}
              alt="Member"
              className="object-cover object-center drop-shadow-2xl flex-shrink-0 rounded-3xl w-48 h-48 mb-4"
            />}
            <div className="w-full">
              <h2 className="title-font font-bold text-lg">{props.name}</h2>
              <h3 className="mb-3 font-medium">{props.position}</h3>
              <span className="inline-flex">
                <a
                  className="ml-2 text-gray-700 hover:opacity-70 transition-all"
                  href={props.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                  </svg>
                </a>
                <a
                  className="ml-2 text-gray-700 hover:opacity-70 transition-all"
                  href={props.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                  </svg>
                </a>
                {props.github && (
                  <a
                    className="text-gray-700 hover:opacity-70 transition-all mx-3"
                    href={props.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path d="M12 .296c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.614-4.033-1.614-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.084 1.837 1.234 1.837 1.234 1.07 1.835 2.809 1.304 3.495.997.108-.775.42-1.305.764-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.526.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.296-1.23 3.296-1.23.655 1.65.243 2.873.12 3.176.769.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.622-5.479 5.918.43.372.823 1.104.823 2.225v3.293c0 .319.219.694.824.576 4.767-1.585 8.201-6.084 8.201-11.385 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  position: "center",
};

export default Card;
