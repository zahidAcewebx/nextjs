"use client"
import styles from "./page.module.css";
import React, { useState } from 'react';
import CustomInput from "./component/LoginForm"

export default function Home() {

  return (
    <main className={styles.main}>
      <h1><CustomInput/></h1>
     
    </main>
  );
}
