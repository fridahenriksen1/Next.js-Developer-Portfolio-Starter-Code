import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Fridas Portfolio | About Page</title>
        <meta
          name="descripton"
          content="Frontend Developer and UX/UI Designer with a focus on creating user-friendly, visually engaging digital solutions. Combining a strong foundation in design and front-end development, I bring creativity and technical skill to craft intuitive, seamless experiences that elevate user interactions and deliver lasting impact."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText text="Passion Fuels Purpose!" />
        </Layout>
      </main>
    </>
  );
};

export default about;
