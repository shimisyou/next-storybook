import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link"; // Next.js の Link をインポート

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#413A3A",
          paddingY: 1,
        }}
      >
        <Toolbar>
          {/* ロゴ部分 */}
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            LOGO
          </Typography>

          {/* ナビゲーションリンク */}
          <Box sx={{ display: "flex", gap: 2, flexGrow: 1 }}>
            <Link href="/" passHref>
              <Button color="inherit">Top</Button>
            </Link>
            <Link href="/pokemon/card" passHref>
              <Button color="inherit">Pokemon Card</Button>
            </Link>
          </Box>

          {/* ログインボタン */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
