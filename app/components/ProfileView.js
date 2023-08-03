import { useEffect, useState } from "react";


const ProfileView = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const user = sessionStorage.getItem("loggedInUser");
        if (user) {
            setUsername(user);
        }
    }, []);

    return (
        <div>
            This is profile page.
            Logged in: {username}
        </div>
    );
};

export default ProfileView;
