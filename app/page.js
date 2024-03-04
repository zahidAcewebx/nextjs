"use client"
import styles from "./page.module.css";
import React, { useState } from 'react';
import Nabvar from "./component/Nabvar"
import Header from "./component/Header"
import Footer from "./component/Footer";
import Product from "./Product/page"



export default function Home() {

  return (
    <main className={styles.main}>

   
      <Nabvar/>
      <h1>Home Page Product  </h1>
      <Product />

      <Footer />
     
    </main>
  );
} 
