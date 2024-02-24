import Link from "next/link";
import SocialButton from "./ui/social-button";

import Dribbble from "@/public/assets/icons/dribbble.svg";
import Instagram from "@/public/assets/icons/instagram.svg";
import Linkedin from "@/public/assets/icons/linkedin.svg";
import Twitter from "@/public/assets/icons/twitter.svg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
      <div className="flex flex-col gap-18 lg:gap-16 bg-[url('/assets/gradient-bg.jpg')] bg-cover bg-zinc-200 h-[30rem] rounded-3xl p-10">
        <h1 className="text-4xl font-semibold">
          Hello, I&apos;am a Product Designer with 8 years of expriences.
        </h1>
        <p className="flex-1 font-medium w-auto text-gray-800">
          I am deeply passionate about the transformative potential of design
          when harnessed for positive impact, and I take immense pleasure in
          crafting user-centric, delightful, and inherently human experiences
          that not only meet users&apos; needs but also enhance their lives
          while promoting inclusivity, accessibility, and sustainability.
        </p>
        <div className="flex flex-col items-center gap-6 lg:flex-row justify-self-end">
          <Link
            href="/"
            className="px-12 py-3 font-medium text-white bg-[#ff5e1a] rounded-full w-60 lg:w-auto"
          >
            Contact me
          </Link>
          <div className="flex items-center gap-4">
            <SocialButton bgColor="dribbble">
              <Dribbble className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="instagram">
              <Instagram className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <Linkedin className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="twitter">
              <Twitter className="w-5 h-5" />
            </SocialButton>
          </div>
        </div>
      </div>
      <div className="p-8 h-[30rem] rounded-3xl bg-[url('/assets/profile.jpg')] bg-cover bg-center "></div>
    </section>
  );
};

export default Hero;
