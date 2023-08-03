import { useEffect, useState } from "react";
import styles from "../modules/menstagram.module.css";

const ProfileView = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("loggedInUser");
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <div className={styles.profile}>
      This is your profile page!. Logged in: {username}
    </div>
  );
};

export default ProfileView;
