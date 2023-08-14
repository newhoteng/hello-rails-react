import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Greeting />} />
          {/* <Route path="about" element={<div>About page</div>} /> */}
          {/* <Route path="*" element={<div>If page not found it goes here</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;