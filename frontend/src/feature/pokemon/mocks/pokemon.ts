import { PokemonPackItem } from "@/feature/types/pokemon";

const PackItemMock: PokemonPackItem[] = Array.from(
  { length: 20 },
  (_, index) => ({
    id: (index + 1).toString(),
    name: `Pack ${index + 1}`,
    img: "/pack.png",
  })
);

export { PackItemMock };
