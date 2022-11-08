import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

// export const MainLayout: FC = ({ children }: any) => {
export const MainLayout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Tomás</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
