import React from "react";

import "./style.scss";

interface IGenreProps {
  genreName: string;
}

function GenreTagRaw(props: IGenreProps) {
  const { genreName } = props;

  return (
    <div className="genre-tag">
      <label>{genreName}</label>
    </div>
  );
}

const GenreTag = React.memo(GenreTagRaw);
export default GenreTag;
