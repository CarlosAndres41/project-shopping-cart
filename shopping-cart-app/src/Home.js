import './App.css';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Services from './components/Services';

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <MainContent />
            <Services />
        </div>
    );
}

export default Home;
