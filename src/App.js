import { Routes, Route, Outlet } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import MyLibrary from "./routes/MyLibrary";
import Ebook from "./routes/Ebook";
import BookCalendar from "./routes/BookCalendar";
import ScheduleCalendar from "./routes/ScheduleCalendar";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "react-bootstrap";
function App() {
  const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    width:100%;
    height:100%;
    margin: 0 auto;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/library"
          element={
            <div>
              <Navbar />
              <Outlet />
            </div>
          }
        >
          <Route path="" element={<MyLibrary />} />
          <Route path="scheduleCalendar" element={<ScheduleCalendar />} />
          <Route path="bookCalendar" element={<BookCalendar />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
