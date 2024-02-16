import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import RSVPList from "./pages/RSVPList.tsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/rsvp"} element={<RSVPList/>}/>
    </Routes>
  );
}

export default App;
