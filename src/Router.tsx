import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import GameList from './page/GameList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GameList" element={<GameList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
