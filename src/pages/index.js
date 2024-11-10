import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// import profilePic from "../../public/images/profile/profile-pic-5.png";
// import profilePic from "../../public/images/profile/profile-pic4.png";
// import profilePic from "../../public/images/profile/profile-picTwo.png";
import profilePic from "../../public/images/profile/profile-pic-3.png";

import AnimatedText from "@/components/AnimatedText";
// import profilePic from "../../public/images/profile/developer-pic-profile.png";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
//* lightbulb picture
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
// import profilePic from "../../public/images/profile/profile-pic-3-round.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fridas portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <motion.div className="w-2/5 ml-12" whileHover={{ scale: 1.05 }}>
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="w-full h-auto border-solid border-2 border-white hover:border-dotted  rounded-full "
              ></Image>
            </motion.div>
            <div className="w-1/2 flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              ></AnimatedText>
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"}></LinkArrow>
                </Link>
                <Link
                  href="mailto:fridahenriksen1@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe></HireMe>
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Codebucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
