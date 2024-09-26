import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[40px] text-center border-t-[30px] border-t-[red] bg-black text-white">
        포켓몬 도감
      </h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"favorite"}>찜목록</Link>
        검색
        <input
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          className="w-[120px] border-b border-[darkgray] px-2"
        />
      </nav>
      <main className="flex flex-wrap gap-[20px] justify-center pt-[20px]">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
