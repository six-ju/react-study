import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import IndexPage from './component/indexPage';
import WelcomePage from './component/welcomePage';
import ServerPage from './component/serverPage';

function App() {
    return (
        <div className='content'>
            <Header />
            <img src={logo} className='App-logo' alt='logo' />
            <Router>
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/welcome' element={<WelcomePage />} />
                    <Route path='/server' element={<ServerPage />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
