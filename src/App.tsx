import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Navbar } from "./components/organisms/Navbar";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <div className="hidden md:block">
          <Navbar />
        </div>

        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
