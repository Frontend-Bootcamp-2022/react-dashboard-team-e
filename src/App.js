
import Sidebar from "./component/SideBar/SideBar";
import "./App.css"
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
