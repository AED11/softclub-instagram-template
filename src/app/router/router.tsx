import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../../pages/layout/layout";
import Home from "../../pages/layout/home/home";
import Login from "../../pages/(auth)/login/login";
import Register from "../../pages/(auth)/register/register";
import Reels from "../../pages/layout/reels/reels";
import Explore from "../../pages/layout/explore/explore";
import Chats from "../../pages/layout/chats/chats";
import DefaultChat from "../../pages/layout/chats/default/default-chat";
import ChatById from "../../pages/layout/chats/chat-by-id/chat-by-id";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="chats" element={<Chats />}>
            <Route index element={<DefaultChat />} />
            <Route path=":id" element={<ChatById />} />
            <Route path="profile" />
            <Route path="profile/:id" />
            <Route path="reels" element={<Reels />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
