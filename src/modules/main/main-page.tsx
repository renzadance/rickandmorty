//НУЖЕН РЕФРАКТОРИНГ!!!

import { useEffect, useRef, useState } from "react";
import { PreviewLayout } from "./preview/preview-layout";
import { Seasons } from "./seasons/seasons";
import { Header } from "@/components/header";
import { HeroSectionMain } from "@/modules/main/seasons/hero-section-main";
import { Logo } from "@/components/logo";

export function MainPage() {
  const [isAnimation, setIsAnimation] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedState = sessionStorage.getItem("logoAnimationComplete");

    if (savedState === "true") {
      setIsAnimationComplete(true);
    }
  }, []);

  const handleWatchClick = () => {
    setIsAnimation(true);

    setTimeout(() => {
      setIsAnimationComplete(true);
      sessionStorage.setItem("logoAnimationComplete", "true");
    }, 1000);
  };

  const handleClickScroll = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Logo />

      {!isAnimationComplete ? (
        <PreviewLayout
          animationLeft={isAnimation ? "animate-slideOut-left" : ""}
          animationRight={isAnimation ? "animate-slideOut-right" : ""}
          onClickAnimation={() => {
            handleWatchClick();
          }}
        />
      ) : (
        <div className={isAnimation ? "fadeIn" : ""}>
          <Header />
          <HeroSectionMain onButtonClickScroll={handleClickScroll} />
          <div ref={contentRef}>
            <Seasons />
          </div>
        </div>
      )}
    </>
  );
}
