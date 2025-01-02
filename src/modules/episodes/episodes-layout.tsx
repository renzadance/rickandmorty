import { Logo } from "@/components/logo";
import { EpisodesHeroSection } from "./episodes-hero-section";
import { useEpisodeList } from "./use-episode-list";
import { EpisodeList } from "./episode-list";

export function EpisodesLayout() {
  const data = useEpisodeList();
  console.log(data);

  return (
    <>
      <Logo />
      <EpisodesHeroSection />
      <div className="w-full h-full px-10 py-24">
        <EpisodeList data={data} />
      </div>
    </>
  );
}
