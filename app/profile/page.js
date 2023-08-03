// profile/page.js
"use client";

import React from "react";
import ProfileView from "../components/ProfileView";
import styles from "../modules/menstagram.module.css";

const ProfilePage = () => {
  return (
    <div>
      <h1 className={styles.profileview}>Profile Page!</h1>
      <ProfileView />
    </div>
  );
};

export default ProfilePage;
