import { fn } from "@storybook/test";
import { PokemonTypeChipList } from "./PokemonTypeChipList";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "feature/Pokemon/PokemonTypeChipList",
  component: PokemonTypeChipList,
} satisfies Meta<typeof PokemonTypeChipList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PokemonTypeChipListComponent: Story = {
  args: {
    types: ["normal", "water"],
    onClick: fn(),
    onDelete: fn(),
  },
};
