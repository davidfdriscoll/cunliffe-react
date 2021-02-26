import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";
import HeadwordTable from "./components/HeadwordTable";

function App() {
  return (
    <div className="wrapper">
      <SearchBar />
      <article className='content'>
        <DefinitionDisplay />
      </article>
      <aside className="sidebar">
        <HeadwordTable />
      </aside>
    </div>
  );
}

export default App;