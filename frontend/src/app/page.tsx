import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      <Card>
        <CardHeader
          title="カード"
          sx={{
            bgcolor: "#EDE8E4",
          }}
        />
        <CardContent>コンテンツ</CardContent>
      </Card>
      <Card>
        <CardHeader
          title="カード"
          sx={{
            bgcolor: "#EDE8E4",
          }}
        />
        <CardContent>コンテンツ</CardContent>
      </Card>
    </Stack>
  );
}
