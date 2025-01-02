import Image from "next/image";
import clsx from "clsx";

export function PreviewLayout({
  animationLeft,
  animationRight,
  onClickAnimation,
}: {
  animationLeft: string;
  animationRight: string;
  onClickAnimation: () => void;
}) {
  return (
    <div className="flex px-36 justify-between overflow-hidden">
      <div
        className={clsx(
          "flex flex-col gap-36 mt-[400px] w-[600px]",
          animationLeft,
        )}
      >
        <p className="text-7xl font-bold text-white shadow-md">
          Find out
          <br />
          everything in
          <br />
          one <span className="text-cyan-400">place.</span>
        </p>

        <button
          onClick={onClickAnimation}
          className="
            ml-auto
            text-5xl text-cyan-300 font-bold
          bg-cyan-500/10 transition-colors hover:bg-cyan-500/20
            border-2 border-cyan-500 rounded-3xl w-[350px] h-24"
        >
          Watch
        </button>
      </div>

      <div
        className={clsx(animationRight, "w-[773px] h-[900px] overflow-hidden")}
      >
        <Image
          src="/rick-preview.png"
          alt="rick preview"
          width={773}
          height={1080}
        />
      </div>
    </div>
  );
}
