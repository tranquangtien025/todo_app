import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/containers/notFound/notFound';
import { Home } from './components/containers/home/home';
import { Detail } from './components/containers/detail/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
        <Route path="/insert" />
        <Route path="/edit/:id" />
        <Route path="/notFound" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
