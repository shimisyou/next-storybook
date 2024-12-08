import { Meta, StoryObj } from "@storybook/react";
import { PackSelector } from "./PackSelector";
import { PokemonPackItem } from "@/feature/types/pokemon";
import { expect, within, userEvent, fn } from "@storybook/test";
import { Button } from "@mui/material";
import { PackItemMock } from "../../mocks/pokemon";

const meta = {
  title: "feature/Pokemon/PackSelector",
  tags: ["autodocs"],
  component: PackSelector,
} satisfies Meta<typeof PackSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleButtonClick = fn();

export const WithOperationArea: Story = {
  args: {
    packs: PackItemMock,
    title: "開封したいパックを選ぼう！",
    operationArea: (selectedPack) =>
      selectedPack && (
        <Button
          variant="contained"
          onClick={() => handleButtonClick(selectedPack)}
        >
          開封する
        </Button>
      ),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.title)).toBeVisible();
    await step("ボタンを渡した時の動作確認", async () => {
      const button = canvas.getByRole("button", { name: "開封する" });
      await expect(button).toBeVisible();

      await userEvent.click(button);

      expect(handleButtonClick).toHaveBeenCalledTimes(1);

      const selectedPack = args.packs[0];
      expect(handleButtonClick).toHaveBeenCalledWith(
        expect.objectContaining(selectedPack)
      );
    });
  },
};

export const WithoutOperationArea: Story = {
  args: {
    packs: PackItemMock,
    title: "開封したいパックを選ぼう！",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.title)).toBeVisible();
  },
};
