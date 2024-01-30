import { BrowserRouter, Routes, Route } from "react-router-dom"; // npm i react-router-dom@6.4.1
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Courses from "./components/Courses";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        {/* У основной страницы не должно быть свойство path вместо этого обозначим его как главную страницу с помощью свойства index у которого значение true */}
                        <Route index={true} element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="/courses/:slugs" element={<Courses />} />
                    </Route>
                        <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
