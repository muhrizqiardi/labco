// create component to display multiple lines of text
import React from "react";
import PropTypes from "prop-types";

const MultiLine = ({ lines }) => {
  return (
    <>
      {(lines ?? "").split("\n")?.map((line) => (
        <p className="">{line}</p>
      ))}
    </>
  );
};

MultiLine.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultiLine;
