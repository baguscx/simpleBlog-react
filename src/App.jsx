import "./App.css";
import { GlobalContext } from "./context/";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routers/";

function App() {
  const user = {
    username: "bagusuuu",
  };
  const condition = false;
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        {/* {condition ? "benar" : "salah"} */}
        <RouterProvider router={Router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
