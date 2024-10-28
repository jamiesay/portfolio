import Link from "next/link";
import SocialButton from "./ui/social-button";

import Dribbble from "@/public/assets/icons/dribbble.svg";
import Instagram from "@/public/assets/icons/instagram.svg";
import Linkedin from "@/public/assets/icons/linkedin.svg";
import Twitter from "@/public/assets/icons/twitter.svg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
      <div className="flex flex-col gap-18 lg:gap-02 bg-[url('/assets/gradient-bg.jpg')] bg-cover bg-zinc-200 h-[30rem] rounded-3xl p-10">
        {/* <div className="flex flex-col justify-center md:w-1/2"> */}
        <h1 className="text-6xl font-semibold">
          Jamie Say
        </h1>
        <p className="flex-1 font-medium w-auto text-gray-500 text-xl mt-4">
          a product designer with a passion for building innovative solutions
        </p>
        <div className="flex flex-col items-center gap-6 lg:flex-row justify-self-end">
          <Link
            href="/"
            className="px-12 py-3 font-medium text-white bg-[#ff5e1a] rounded-full w-60 lg:w-auto"
          >
            My Resume
          </Link>
          <div className="flex items-center gap-4">
            {/* <SocialButton bgColor="dribbble">
              <Dribbble className="w-5 h-5" />
            </SocialButton> */}
            {/* <SocialButton bgColor="instagram">
              <Instagram className="w-5 h-5" />
            </SocialButton> */}
            <Link href="https://www.linkedin.com/in/jamie-say/" target="_blank" rel="noopener noreferrer">
              <SocialButton bgColor="linkedin">
                <Linkedin className="w-5 h-5" />
              </SocialButton>
            </Link>
            {/* <SocialButton bgColor="twitter">
              <Twitter className="w-5 h-5" />
            </SocialButton> */}
          </div>
        </div>
      </div>
      <div className="p-8 h-[30rem] rounded-3xl bg-[url('/assets/profile2.png')] bg-cover bg-center "></div>
    </section>
  );
};

export default Hero;
