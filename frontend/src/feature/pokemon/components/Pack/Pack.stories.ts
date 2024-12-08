import { Pack } from "./Pack";
import { Meta, StoryObj } from "@storybook/react";
import { PackItemMock } from "../../mocks/pokemon";

const meta = {
  title: "feature/Pokemon/Pack",
  component: Pack,
} satisfies Meta<typeof Pack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PackComponent: Story = {
  args: {
    pack: PackItemMock[0],
    showShadow: true,
  },
};
