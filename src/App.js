import { Routes, Route, Outlet } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import MyLibrary from "./routes/MyLibrary";
import BookCalendar from "./routes/BookCalendar";
import ScheduleCalendar from "./routes/ScheduleCalendar";
function App() {
  return (
    <div>
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
