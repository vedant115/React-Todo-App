import React from "react";

function Footer({ pending, btnState, deleteAll }) {
  return (
    <div className="footer">
      <span>
        You have <span className="pendingTasks">{pending}</span> pending tasks
      </span>
      <button
        className="clearAll-btn"
        style={btnState ? { opacity: "1", pointerEvents: "auto" } : {}}
        onClick={deleteAll}
      >
        Clear All
      </button>
    </div>
  );
}

export default Footer;
