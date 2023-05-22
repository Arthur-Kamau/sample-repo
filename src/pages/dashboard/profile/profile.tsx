import ProfileEditScreen from "./profile_edit";
import { ThemeContext } from "../../../App"
import { useContext } from "react";

function ProfileScren() {

    const profile = useContext(ThemeContext);
    return (<div>

        <h1>&nbsp; Profile screen</h1>
        <br /> Hello {profile.name} your email is  {profile.email}
        <ProfileEditScreen />
    </div>
    );
}

export default ProfileScren;