import '../../style/profile.css';
import BANNPROF from '../../ressources/profile/banner_profil.png';
import PROF from '../../ressources/profile/hexatar_230720ry32sx.png';


export default function ProfileWall() {
    return (

        <div className="profile-wall">

            <div className="banner-background">
                <img id="banner-pic" src={BANNPROF} alt={BANNPROF} />
            </div>

            <div className="profile-wall">

                <div className="profile-banner">
                    <img id="avatar-user" src={PROF} alt={PROF} />
                    <h1>Welcome ! </h1>
                </div>

            </div>

            <div className="profile-fyp">
                <p>Website in working</p>
            </div>
        </div>
    )
}
