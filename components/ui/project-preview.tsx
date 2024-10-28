import * as React from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

import Arrow from "@/public/assets/icons/arrow.svg";

interface Description {
  summary: string;
  details: {
    date: string;
    role: string;
    overview: string;
  };
}

interface ProjectPreviewProps {
  name: string;
  description: Description;
  imageUrl: string;
  bgColor?: string;
  dark?: boolean;
  link?: string;
  nameClassName?: string;
  className?: string;
  rightAligned?: boolean;
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
  nameClassName,
  className,
  rightAligned = false,
}) => {
  const Content = (
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
        <div className={`flex ${rightAligned ? 'justify-end' : 'justify-start'} items-start`}>
          <div className={`max-w-[50%] ${rightAligned ? 'text-right' : 'text-left'}`}>
            <h3 className={`font-bold ${nameClassName || ''}`}>{name}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-4">
              {description.summary}
            </p>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-medium">Date</span><br />
                {description.details.date}
              </div>
              <div>
                <span className="font-medium">Role</span><br />
                {description.details.role}
              </div>
              <div>
                <span className="font-medium">Overview</span><br />
                {description.details.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return link ? (
    <Link href={link} className="block">
      {Content}
    </Link>
  ) : (
    <div className="block">
      {Content}
    </div>
  );
};

export default ProjectPreview;
