import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const projects = () => {
  return (
    <>
      <Head>
        <title>Fridas Portfolio | Projects Page</title>
        <meta
          name="descripton"
          content="Explore projects showcasing expertise in frontend development and UX/UI design. From visually stunning websites to intuitive user experiences, each project highlights creativity, technical proficiency, and a commitment to excellence."
        />
      </Head>
      <main>
        <Layout>
          <AnimatedText text="Imagination inspires, knowledge empowers!" />
        </Layout>
      </main>
    </>
  );
};

export default projects;
