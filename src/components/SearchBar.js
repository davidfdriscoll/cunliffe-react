import React from "react";

export default function SearchBar() {
    return (
        <header className="main-head">
            <img alt="" src="apotheosis_homer_small.jpeg" />
            <div id="author-title">
                <h3 id="author">R.J. Cunliffe</h3>
                <h2 id="title">A Lexicon of the Homeric Dialect</h2>
            </div>
            <form>
                <input type="text" name="item" id="item" />
                <button>Search</button>
            </form>
        </header>
    );
  }