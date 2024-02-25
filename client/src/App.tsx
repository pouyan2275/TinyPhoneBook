import Contacts from "./tableContacts/Contacts";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="row app">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
