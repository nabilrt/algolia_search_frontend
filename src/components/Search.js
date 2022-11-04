import React from "react";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  // Highlight,
  Stats,
  //SortBy,
  Pagination,
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "B17EEGL3VY",
  "38d870be8fe2f29db3da4153737215ed"
);

function Search() {
    // 
  return (
    <InstantSearch searchClient={searchClient} indexName="movies"> (// Change the index name to products to check other one)
      <Header />
      <div className="body-content">
        <Content />
      </div>
    </InstantSearch>
  );
}
const Header = () => (
  <>
    <h1 style={{ textAlign: "center" }}>Algolia Search Movie Database</h1>
    <header className="header">
      <br></br>
      <SearchBox
        className="search-bar"
        translations={{ placeholder: "Search for Movies" }}
      />
    </header>
  </>
);
const Hit = ({ hit }) => (
  <a href={"/"}>
    <div className="card">
      <div className="card-contents">
        <div className="card-rating">Name: {hit.original_title}</div> (//Change the original_title to name)
        <div className="card-rating">Genre: {hit.genre}</div>
        <div className="card-rating">Runtime: {hit.runtime} Minutes</div>
        <div className="card-rating">Release Date: {hit.release_date}</div>
        <div className="card-genre"> </div>
      </div>
    </div>
  </a>
);
const Content = () => (
  <main>
    <div className="information">
      <div className="stats">
        {" "}
        <Stats />{" "}
      </div>
    </div>
    <Hits hitComponent={Hit} />
    <div>
      {" "}
      <Pagination />
    </div>
  </main>
);
export default Search;
