import { PokemonPackItem } from "@/feature/types/pokemon";
import { Box, Card, CardContent, Typography, keyframes } from "@mui/material";
import Image from "next/image";

const tiltHorizontalAnimation = keyframes`
  0% { transform: rotateY(0deg); }
  25% { transform: rotateY(-5deg); }
  50% { transform: rotateY(5deg); }
  75% { transform: rotateY(-5deg); }
  100% { transform: rotateY(0deg); }
`;

type PackProps = {
  showShadow?: boolean;
  pack: PokemonPackItem;
};

export const Pack = ({ pack, showShadow }: PackProps) => {
  const cardStyles = {
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: 2,
    width: "200px", // カードの幅を統一
  };

  const cardContentStyles = {
    textAlign: "center",
    background: "linear-gradient(90deg, #ff9800, #ffc107)",
    padding: 1,
  };

  return (
    <Box sx={{ position: "relative", mb: showShadow ? 6 : 0 }}>
      <Card
        sx={{
          ...cardStyles,
          animation: `${tiltHorizontalAnimation} 4s infinite`,
          cursor: "grab",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            height: "300px", // 高さを統一
          }}
        >
          <Image
            src={pack.img}
            alt={pack.name}
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              left: 0,
              width: "100%",
              borderTop: "3px dashed #ccc",
              zIndex: 2,
            }}
          />
        </Box>
      </Card>

      {/* 反射影 */}
      {showShadow && (
        <Box
          sx={{
            position: "absolute",
            top: "105%", // 距離を調整
            left: 0,
            right: 0,
            transform: "scaleY(-1)", // 上下反転
            opacity: 0.6,
            filter: "blur(3px)",
          }}
        >
          <Card sx={{ ...cardStyles, boxShadow: 0 }}>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                height: "300px",
              }}
            >
              <Image
                src={pack.img}
                alt={`${pack.name} reflection`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </Card>
        </Box>
      )}
    </Box>
  );
};
