import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import GameList from './page/GameList';
import GamePage from './page/GamePage';
// Suspense 적용하기
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameList" element={<GameList />}></Route>
        <Route path="/gamePage/:id" element={<GamePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
