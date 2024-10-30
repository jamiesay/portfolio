import * as React from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

import Arrow from "@/public/assets/icons/arrow.svg";

interface Description {
  subtitle: string;
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
  descriptionClassName?: string;
  imageOffset?: {
    top?: string;
    horizontal?: string;
  };
  imageHeight?: string;
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
  bgColor = 'bg-slate-100',
  dark,
  link,
  nameClassName,
  className,
  rightAligned = false,
  descriptionClassName,
  imageOffset = {},
  imageHeight = '100%',
}) => {
  const Content = (
    <div
      className={`relative h-[400px] sm:h-[400px] w-full overflow-hidden rounded-3xl p-6 ${
        dark ? 'text-white' : ''
      } ${bgColor}`}
    >
      {/* Mobile Title */}
      <h3 className={`font-bold mb-4 block sm:hidden ${nameClassName || ''}`}>{name}</h3>
      
      {/* Mobile Image */}
      <div className="sm:hidden h-[calc(100%-3rem)] w-full flex justify-center items-center">
        <img 
          src={imageUrl}
          alt={name}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex h-full w-full px-10 py-6 justify-between items-center relative">
        {/* Text Content */}
        <div className={`w-[45%] ${rightAligned ? 'ml-auto' : 'mr-auto'}`}>
          <h3 className={`font-bold mb-2 ${nameClassName || ''}`}>{name}</h3>
          <div>
            <p className="text-base text-zinc-700 dark:text-zinc-200 mb-3 font-bold italic">
              {description.subtitle}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-4">
              {description.summary}
            </p>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-bold">Date</span><br />
                {description.details.date}
              </div>
              <div>
                <span className="font-bold">Role</span><br />
                {description.details.role}
              </div>
              <div>
                <span className="font-bold">Overview</span><br />
                {description.details.overview}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div 
          className={`absolute h-full flex items-center ${
            rightAligned ? 'left-10' : 'right-10'
          }`}
          style={{
            top: imageOffset.top || '0',
            [rightAligned ? 'left' : 'right']: imageOffset.horizontal || '10px',
          }}
        >
          <img 
            src={imageUrl}
            alt={name}
            style={{ height: imageHeight }}
            className="w-auto object-contain"
          />
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
