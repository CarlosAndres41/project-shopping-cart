import './App.css';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Services from './components/Services';
import Footer from './components/Footer';

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <MainContent />
            <Services />
            <Footer />
        </div>
    );
}

export default Home;
