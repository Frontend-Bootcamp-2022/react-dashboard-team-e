import Sidebar from "./Component/SideBar/SideBar";
import "./App.css"
const App = () => {
  return (
    <div className="container">
      <nav>
        <Sidebar />
      </nav>
      <main>
        <h1>deneme</h1>
        <h1>deneme2</h1>
      </main>
    </div>

  );
}

export default App;
