import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import RSVPList from "./pages/RSVPList.tsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<RSVPList />} />
        </Route>
    </Routes>
  );
}

export default App;

function Layout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
