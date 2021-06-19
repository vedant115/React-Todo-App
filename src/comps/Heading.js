import React from "react";

function Heading() {
  // To display current day and date
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const content = today.toLocaleDateString("en-US", options);

  return (
    <div id="heading">
      <h1 className="date">{content}</h1>
    </div>
  );
}

export default Heading;
