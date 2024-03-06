import { Routes, Route, Outlet } from "react-router-dom";
import { reset } from "styled-reset";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import MyLibrary from "./routes/MyLibrary";
import BookCalendar from "./routes/BookCalendar";
import ScheduleCalendar from "./routes/ScheduleCalendar";
import { createGlobalStyle } from "styled-components";
function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}`;
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
              <MyLibrary />
              <Outlet />
            </div>
          }
        >
          <Route path="scheduleCalendar" element={<ScheduleCalendar />} />
          <Route path="bookCalendar" element={<BookCalendar />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
