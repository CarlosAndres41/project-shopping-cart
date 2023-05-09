import './App.css';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <MainContent />
        </div>
    );
}

export default Home;
