import React from "react";
import linkedin from '@/assets/linkedin.webp'
import github from '@/assets/github.webp'
import { Dock, DockIcon } from "@/components/magicui/dock";
import ThemeButton from "@/components/ThemeButton";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="relative bottom-2">
      <Dock direction="middle">
        <DockIcon>
            <a className="cursor-pointer" href="https://github.com/HugoOrielso" target="_blank">
                <img className="max-h-8" src={github} alt="github logo" />
            </a>
        </DockIcon>
        <DockIcon>
            <a className="cursor-pointer" href="https://www.linkedin.com/in/hugoorielso/" >
                <img className="max-h-8" src={linkedin} alt="linkeding logo" />
            </a>
        </DockIcon>
        <DockIcon>
            <ThemeButton/>
        </DockIcon>
      </Dock>
    </div>
  );
}

