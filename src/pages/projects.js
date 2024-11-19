import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

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
          <AnimatedText
            text="Imagination inspires, knowledge empowers!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Svemestra - App"
                img={project1}
                summary="Svemestra is a travel app created as a group project for our final thesis. It helps users discover nature experiences in Sweden with smart mapping and planning tools. Users can vote on destinations, create routes, and plan adventures easily. We designed and coded key features to deliver a seamless, user-friendly experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Svemestra - App"
                img={project1}
                summary="Svemestra is a travel app created as a group project for our final thesis. It helps users discover nature experiences in Sweden with smart mapping and planning tools. Users can vote on destinations, create routes, and plan adventures easily. We designed and coded key features to deliver a seamless, user-friendly experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Svemestra - App"
                img={project1}
                summary="Svemestra is a travel app created as a group project for our final thesis. It helps users discover nature experiences in Sweden with smart mapping and planning tools. Users can vote on destinations, create routes, and plan adventures easily. We designed and coded key features to deliver a seamless, user-friendly experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Svemestra - App"
                img={project1}
                summary="Svemestra is a travel app created as a group project for our final thesis. It helps users discover nature experiences in Sweden with smart mapping and planning tools. Users can vote on destinations, create routes, and plan adventures easily. We designed and coded key features to deliver a seamless, user-friendly experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Svemestra - App"
                img={project1}
                summary="Svemestra is a travel app created as a group project for our final thesis. It helps users discover nature experiences in Sweden with smart mapping and planning tools. Users can vote on destinations, create routes, and plan adventures easily. We designed and coded key features to deliver a seamless, user-friendly experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Svemestra - App"
                img={project1}
                summary="Svemestra is a travel app created as a group project for our final thesis. It helps users discover nature experiences in Sweden with smart mapping and planning tools. Users can vote on destinations, create routes, and plan adventures easily. We designed and coded key features to deliver a seamless, user-friendly experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
