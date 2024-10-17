import * as React from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';

import Arrow from "@/public/assets/icons/arrow.svg";

interface ProjectPreviewProps {
  name: string;
  description: string;
  imageUrl: string;
  bgColor?: string;
  dark?: boolean;
  link: string;
}

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  name,
  description,
  imageUrl,
  bgColor,
  dark,
  link,
}) => {
  return (
    <Link href={link} className="block">
      <div
        className={`relative h-[400px] w-full overflow-hidden rounded-3xl p-6 ${
          dark ? 'text-white' : ''
        }`}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className={`h-full w-full px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-medium dark:text-white">{name}</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer">
              <Arrow className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreview;
