"use client";
import React, { ReactNode, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { PokemonPackItem } from "@/feature/types/pokemon";
import { PackCarousel } from "../PackCarousel/PackCarousel";

type PackSelectorProps = {
  packs: PokemonPackItem[];
  title: string;
  operationArea?: (pack: PokemonPackItem | null) => ReactNode;
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
          <Typography variant="h6">{title}</Typography>
          <PackCarousel packs={packs} onSelect={setSelectedPack} />
          {operationArea && <Box>{operationArea(selectedPack)}</Box>}
        </Box>
      </CardContent>
    </Card>
  );
};
