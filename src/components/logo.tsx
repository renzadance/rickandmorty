import clsx from "clsx";
import Image from "next/image";

export function Logo({ animation }: { animation?: string }) {
  return (
    <div className={clsx("z-10 mt-20 ml-10 absolute", animation)}>
      <Image
        src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
        width={640}
        height={242}
        alt="logo"
      />
    </div>
  );
}
