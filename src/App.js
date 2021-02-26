function App() {
  return (
    <div className="wrapper">
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
      <article className='content'>
        <h3 className="lemma"></h3>
        <p className="definition"></p>
      </article>
      <aside className="sidebar">
        <ul className="nav">
          <li className="selected">ἀγείρω</li>
          <li>ἀγείρω</li>
          <li>ἀγείρω</li>        
        </ul>
      </aside>
    </div>
  );
}

export default App;