import { PokemonType } from "@/feature/types/pokemon";
import { Chip, Stack } from "@mui/material";

const typeColors: Record<PokemonType, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

type PokemonTypeChipListProps = {
  types: PokemonType[];
  onClick?: (type: PokemonType) => void;
  onDelete?: (type: PokemonType) => void;
};

export const PokemonTypeChipList = ({
  types,
  onClick,
  onDelete,
}: PokemonTypeChipListProps) => {
  return (
    <Stack direction="row" spacing={1} gap={1}>
      {types.map((type) => (
        <Chip
          key={type}
          label={type.charAt(0).toUpperCase() + type.slice(1)}
          sx={{
            backgroundColor: typeColors[type],
            color: "#fff",
          }}
          onClick={onClick ? () => onClick(type) : undefined}
          onDelete={onDelete ? () => onDelete(type) : undefined}
        />
      ))}
    </Stack>
  );
};
