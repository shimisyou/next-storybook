import { PackCarousel } from "./PackCarousel";
import { Meta, StoryObj } from "@storybook/react";
import { PackItemMock } from "../../mocks/pokemon";

const meta = {
  title: "feature/Pokemon/PackCarousel",
  component: PackCarousel,
} satisfies Meta<typeof PackCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PackCarouselComponent: Story = {
  args: {
    packs: PackItemMock,
  },
};
