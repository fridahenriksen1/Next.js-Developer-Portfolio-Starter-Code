import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/developer-profile-pic.jpg";
// import profilePic from "../../public/images/profile/developer-profile-pic2.jpg";

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
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Frida Henriksen, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. I'm a newly graduated digital designer from
                Brobygrafiska, where I specialized in UX/UI design. I completed
                my studies in May and am now furthering my expertise by studying
                frontend development at IT-Högskolan, expanding my technical
                skills to bring designs to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="A picture of Frida Henriksen"
                className="w-full h-auto rounded-2xl"
              ></Image>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
