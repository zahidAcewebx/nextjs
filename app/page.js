"use client"
import styles from "./page.module.css";
import React, { useState } from 'react';
import Nabvar from "./component/Nabvar"


export default function Home() {

  return (
    <main className={styles.main}>
      <Nabvar/>
      <h1>Home Page </h1>
     
    </main>
  );
} 
