type TypeSeason = {
  name: string;
  description: string;
  img: string;
  alt: string;
  id: string;
};
type TypeSeasonsList = TypeSeason[];

export const seasonsList: TypeSeasonsList = [
  {
    name: "Season 1 (2013–2014)",
    description:
      "In the first season, viewers are introduced to Rick Sanchez, an eccentric scientist, and his grandson Morty Smith. They embark on various intergalactic and interdimensional adventures, encountering unusual creatures and situations. This season lays the foundation for their dynamic relationship and family interactions.",
    img: "/season-poster-1.jpg",
    alt: "season-1",
    id: "season1",
  },
  {
    name: "Season 2 (2015)",
    description:
      "Continuing their adventures, Rick and Morty face even more complex and dangerous situations. The season delves deeper into the personal stories of the characters, revealing their inner conflicts and relationships, while also introducing new supporting characters.",
    img: "/season-poster-2.jpg",
    alt: "season-2",
    id: "season2",
  },
  {
    name: "Season 3 (2017)",
    description:
      "The third season begins with Rick’s escape from an intergalactic prison. The adventures become even crazier, and family relationships grow more strained. This season features memorable episodes like 'Pickle Rick' where Rick turns himself into a pickle to avoid family therapy.",
    img: "/season-poster-3.jpg",
    alt: "season-3",
    id: "season3",
  },
  {
    name: "Season 4 (2019–2020)",
    description:
      "In this season, Rick and Morty continue their insane escapades, encountering new challenges and enemies. The season explores themes of clones, alternate realities, and family values, offering a mix of deep and humorous perspectives on the characters' lives.",
    img: "/season-poster-4.jpg",
    alt: "season-4",
    id: "season4",
  },
  {
    name: "Season 5 (2021)",
    description:
      "The fifth season brings new thrilling and absurd adventures. Viewers learn more about Rick's past, his enemies, and his allies. The season combines elements of science fiction, satire, and family drama, continuing to surprise and entertain fans of the series.",
    img: "/season-poster-5.jpg",
    alt: "season-5",
    id: "season5",
  },
];
