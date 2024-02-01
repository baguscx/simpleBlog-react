import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onChangeSearch = (event) => {
    props.onChangeSearch(search);
  };
  return (
    <>
      <div>
        Search :{" "}
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChangeSearch();
            }
          }}
          value={search}
        ></input>
        <button onClick={onChangeSearch}>Search</button>
      </div>
      <small>
        Ditemakuan {props.totalPost} Mencari kata : {search}
      </small>
    </>
  );
}

export default Search;
