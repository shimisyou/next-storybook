"use client";
import React, { ReactNode, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { PokemonPackItem } from "@/feature/types/pokemon";
import { PackCarousel } from "../PackCarousel/PackCarousel";

type PackSelectorProps = {
  packs: PokemonPackItem[]; // パックのリスト
  title: string; // タイトル
  operationArea?: (pack?: PokemonPackItem) => ReactNode; // 選択されたパックを操作するUI
};

export const PackSelector = ({
  packs,
  title,
  operationArea,
}: PackSelectorProps) => {
  const [selectedPack, setSelectedPack] = useState<PokemonPackItem | null>(
    null
  );

  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={2}
        >
          {/* タイトル */}
          <Typography variant="h6">{title}</Typography>

          {/* カルーセル */}
          <PackCarousel packs={packs} onSelect={setSelectedPack} />

          {/* 操作エリア */}
          {operationArea && selectedPack && (
            <Box mt={2}>{operationArea(selectedPack)}</Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
