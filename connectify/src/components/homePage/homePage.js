import Header from '../navbar/navbar';
import './homePage.css';
import boxMusic from '../../ressources/home/fd_accueil.mp4'

function homePage() {
    return (
        <>
        <Header />
        <div className="videoBox">
            <video loop autoPlay muted className="videoHomePage" src={boxMusic} />
        </div>
        <div className="homeContent">
            <section className="midTitle">
                <h1>Connectify</h1>
            </section>
            <section className="welcomeLanguage"></section>
        </div>
        </>
    );
}

export default homePage;