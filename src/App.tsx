
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { FrameworkDetail } from "./FrameworkDetail";
import { FrameworkList } from "./components/framework-list/FrameworkList";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrameworkList />} />
        <Route path="/framework/:id" element={<FrameworkDetail />} />
        <Route path="/non-framework/:id" element={<FrameworkDetail />} />
      </Routes>
    </Router>
  );
}
