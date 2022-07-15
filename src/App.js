
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className="container">
      <nav>
        <Sidebar />
      </nav>
      <main>
        <Navbar />
      </main>
    </div>
  )
}
export default App;
