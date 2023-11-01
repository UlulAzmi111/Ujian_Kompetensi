import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Chat from "./chat";
import ListUser from "./component/list user/listuser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/beranda" element={<Chat />}></Route>
          <Route path="/listuser" element={<ListUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
