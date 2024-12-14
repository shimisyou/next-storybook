"use client";

import { PackSelector } from "@/feature/pokemon/components/PackSelector/PackSelector";
import { PackItemMock } from "@/feature/pokemon/mocks/pokemon";
import { PokemonPackItem } from "@/feature/types/pokemon";
import { Button } from "@mui/material";

export default function PokemonCardPage() {
  const handleButtonClick = (pack: PokemonPackItem) => {
    if (pack) {
      alert(`開封するパック: ${pack.name}`);
    }
  };

  return (
    <PackSelector
      packs={PackItemMock}
      title="開封したいパックを選ぼう！"
      operationArea={(selectedPack) =>
        selectedPack ? (
          <Button
            variant="contained"
            onClick={() => handleButtonClick(selectedPack)}
          >
            開封する
          </Button>
        ) : (
          <p>パックを選択してください。</p>
        )
      }
    />
  );
}
