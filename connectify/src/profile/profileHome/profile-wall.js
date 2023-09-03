import '../../style/profile.css';
import BANNPROF from '../../ressources/profile/banner_profil.png';
import PROF from '../../ressources/profile/hexatar_230720ry32sx.png';
import { getLimitedUseToken } from "firebase/app-check";

// ...

appCheckTokenResponse = await getLimitedUseToken(appCheck);


export default function ProfileWall() {
    return (
        <div className="profile-wall">
            <div className="display-name-picture">
                <h1>WELCOMEUSERN</h1>
                <img src={BANNPROF}></img>
                <img src={PROF}></img>
            </div>

            <div className="display-fyp"></div>
        </div>
    )
}