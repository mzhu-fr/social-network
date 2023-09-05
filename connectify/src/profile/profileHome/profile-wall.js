import '../../style/profile.css';
import BANNPROF from '../../ressources/profile/banner_profil.png';
import PROF from '../../ressources/profile/hexatar_230720ry32sx.png';
import { useState } from 'react';

import ReactPlayer from 'react-player'

import { CreateModal } from './modal-gallery';

// GALLERY
import PartyFriend from '../../ressources/profile/pexels-kampus-production-5935232.jpg';
import Selfie from '../../ressources/profile/pexels-sound-on-3755913.jpg';
import BunchCD from '../../ressources/profile/pexels-matthias-groeneveld-4200745.jpg';
import Classmates from '../../ressources/profile/fd_qsn.jpg';

// MUSIC

import WallFlower from '../../ressources/music/WALLFLOWER.mp3';
import SuperShy from '../../ressources/music/SUPERSHY.mp3';

export default function ProfileWall() {

    const [modalState, setModalState] = useState(false);
    const [modalImg, setModalImg] = useState("");

    const openModal = (img) => {
        setModalImg(img)
        setModalState(true);
    }

    const closeModal = () => {
        setModalState(false);
    }

    return (

        <div className="profile-wall">


            {modalState && <CreateModal imgModal={modalImg} modalToClose={closeModal} />}

            <div className="banner-background">
                <img id="banner-pic" src={BANNPROF} alt={BANNPROF} />
            </div>

            <div className="profile-wall">

                <div className="profile-banner">
                    <img id="avatar-user" src={PROF} alt={PROF} />
                    <h1>Welcome ! </h1>
                </div>

                <div className="profile-fyp">
                    <div className="posting-box">
                        <div className="box-text-posted">
                            <div className="post-text">bLablabla</div>
                            <div className="post-text">lolololololo</div>
                            <div className="post-text">prouut prout</div>
                        </div>
                        <div>
                            <input type="text" placeholder="Write something about your day ..." />
                            <input type="submit" />
                            <button>Submit</button>
                        </div>
                    </div>
                    <div id="display-filter-section">

                        <div id="filterButton">
                            <button className="buttonContent" >ALL</button>
                            <button className="buttonContent" >GALLERY</button>
                            <button className="buttonContent" >VIDEO</button>
                            <button className="buttonContent" >MUSIC</button>
                        </div>

                        <div id="wall-display">
                            <div className="art-gallery">
                                <h3>ART</h3>
                                <div className="art-gallery-style">
                                    <img src={PartyFriend} alt={PartyFriend} onClick={() => openModal(PartyFriend)} />
                                    <img src={Classmates} alt={Classmates} onClick={() => openModal(Classmates)} />
                                    <img src={Selfie} alt={Selfie} onClick={() => openModal(Selfie)} />
                                    <img src={BunchCD} alt={BunchCD} onClick={() => openModal(BunchCD)} />
                                </div>
                            </div>
                            <div className="video-gallery">
                                <h3>VIDEOS</h3>
                                <div className="video-gallery-style">
                                    <ReactPlayer width="auto" height="30vh" id="video-style" url='https://youtu.be/woKq2sD8xho?si=rb3onlwjI54f7img' />
                                    <ReactPlayer width="auto" height="30vh" id="video-style" url='https://youtu.be/cQTo9O85Zro?si=0xbbG5aDediDytXE' />
                                </div>
                            </div>
                            <div className="music-gallery">
                                <h3>MUSIC</h3>
                                <div className="music-gallery-style">
                                    <div className="display-music wallflower">
                                        <h4>WallFlower - Twice</h4>
                                        <audio id="music-audio" controls >
                                            <source src={WallFlower} type="audio/mp3" />
                                        </audio>
                                    </div>

                                    <div className="display-music wallflower">
                                        <h4>Super Shy - New Jeans</h4>
                                        <audio id="music-audio" controls >
                                            <source src={SuperShy} type="audio/mp3" />
                                        </audio>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            </div>


        </div >
    )
}
