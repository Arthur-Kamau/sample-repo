import { useContext, useState } from "react";
import { ThemeContext } from "../../../App";


function ProfileEditScreen() {
    const profile = useContext(ThemeContext);
    const [userName, setName] = useState(profile.name)
    const [userEmail, setEmail] = useState(profile.email)
    return (<div>
        
        <h1 style={{marginTop:"100px"}}>profile edit</h1>

        <label>Change your name</label>
        <input value={userName} onChange={(e) => {
            setName(e.target.value)
            profile.email = e.target.value;
        }}></input>


        <label>Change your email</label>
        <input value={userEmail} onChange={(e) => {
            setEmail(e.target.value)
        }}></input>
    </div>);
}

export default ProfileEditScreen;