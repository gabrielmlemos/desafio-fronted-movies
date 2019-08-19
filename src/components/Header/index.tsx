import React from "react";

import "./style.scss";

function HeaderRaw() {
  return (
    <header className="main-header">
      <h1>MOVIES</h1>
    </header>
  );
}

const Header = React.memo(HeaderRaw);
export default Header;
