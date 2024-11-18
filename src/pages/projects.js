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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination inspires, knowledge empowers!" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
