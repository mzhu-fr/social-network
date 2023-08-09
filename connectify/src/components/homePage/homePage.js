import Header from '../navbar/navbar';
import './homePage.css';
import boxMusic from '../../ressources/home/fd_accueil.mp4';
import Articles from './article'
import Actu from '../../ressources/home/fd_actualite.jpg';
import Who from '../../ressources/home/fd_qsn.jpg';

const translations = {
    fr: "Bienvenue",
    en: "Welcome",
    es: "Bienvenido",
    de: "Willkommen",
    gf: "Ben vini",
    ht: "Byenvini",
    sen: "Akksil ak diam",
    ukr: "дякую",
    bgd: "স্বাগত",
    zh: "欢迎光临",
    dz:'مرحباً',
    he:"ברוך הבא",
    jp:"いらっしゃいませ",
    kb:"Anṣuf yis-wen",
    az:"ⴰⵏⵚⵓⴼ ⵢⵉⵙ ⵡⴻⵏ",
    kr: "환영합니다"
  };

  function changeLanguage() {
    const welcomeText = document.getElementById("bienvenue");
    const currentLanguage = welcomeText.getAttribute("data-lang");
    const languages = Object.keys(translations);
    let nextIndex = (languages.indexOf(currentLanguage) + 1) % languages.length;
    const nextLanguage = languages[nextIndex];

    welcomeText.textContent = translations[nextLanguage];
    welcomeText.setAttribute("data-lang", nextLanguage);
  }

function homePage() {
    return (
        <>
        <div className="homeBody">
            <div className="videoBox">
                <video loop autoPlay muted className="videoHomePage" src={boxMusic} />
            </div>
            <div className="homePageContent">
                <header>
                    <Header />
                </header>
                <main>
                    <div className="homeContent">
                        <section className="midTitle">
                            <h1>Connectify</h1>
                        </section>
                        <section className="welcomeLanguage">
                            <h1 id="bienvenue">Bienvenue</h1>
                            <p id="blabla">Connect to the vibes</p>
                        </section>
                        <section className="articles">

                            <Articles title="Actualités" image={Actu} side="left">Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.<br />Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</Articles>
                            <Articles title="Qui sommes nous ?" image={Who} side="right">
                            Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.<br />Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.
                            </Articles>
                        </section>
                        <section className="newsletter">
                            {/* <News /> */}
                        </section>
                    </div>
                </main>
            </div>
        </div>
        </>
    );
}

setInterval(changeLanguage, 1000);

export default homePage;