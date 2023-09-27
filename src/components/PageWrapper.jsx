import React from "react";
import Head from "next/head";
import styles from "@/styles/common.module.scss";
import Script from "next/script";

const PageWrapper = (props) => {
  const { title = "标题未传", desc = "", children, css = "", js = "" } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <main className={styles.container}>{children}</main>
      <Script id="page-js">{js}</Script>
    </>
  );
};

export default PageWrapper;
