import { Stack, Box, Typography, Container, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import facebookIcon from "@iconify/icons-cib/facebook";
import discordIcon from "@iconify/icons-cib/discord";
import twitterIcon from "@iconify/icons-cib/twitter";
import telegramIcon from "@iconify/icons-cib/telegram";
import youtubeIcon from "@iconify/icons-cib/youtube";
export default function MainFooter() {
  return (
    <Stack
      textAlign="center"
      sx={{ 
        background: "url(/footerBackground.png)",
        backgroundSize: "100% 100%",
        pb: 2, 
        pt: 4, 
        color: '#014c2d',
        mt: { xs: "-3px", md: -2 }
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1 }} sx={{ justifyContent: "space-around" }}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h3">MADE IN</Typography>
            <Box
              component="img"
              src="/unity.png"
              sx={{ height: "3rem", pl: 1 }}
            />
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h3">POWERED BY</Typography>
            <Box
              component="img"
              src="/binance.png"
              sx={{ height: "3rem", pl: 1 }}
            />
          </Stack>
        </Stack>
        <Stack>
          <Stack direction="row" sx={{ justifyContent: "center", pt: 3, pb: 1 }}>
            <Typography variant="h3">IN PARTNERSHIP WITH</Typography>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2 }} sx={{ justifyContent: "space-around" }}>
            <Box>
              <Box 
                component="img"
                src="/pancake.png"
                sx={{
                  height: "10rem", m: 'auto'
                }}
              />
              <Typography variant="h3">PANCAKE</Typography>
            </Box>
            <Box>
              <Box 
                component="img"
                src="/coingecko.png"
                sx={{
                  height: "10rem", m: 'auto'
                }}
              />
              <Typography variant="h3">COINGECKO</Typography>
            </Box>
            <Box>
              <Box 
                component="img"
                src="/poocoin.png"
                sx={{
                  height: "10rem", m: 'auto'
                }}
              />
              <Typography variant="h3">POOCOIN</Typography>
            </Box>
          </Stack>

        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ pt: 3 }}>
          <Stack direction="row" spacing={3}>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
              target="_blank"
              href="https://www.facebook.com/gaming/DestinyWarNFTGame"
            >
              <Icon icon={facebookIcon} bgcolor="white" fontSize={24} color="#014c2d" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
              target="_blank"
              href="https://discord.gg/Yj8aPDzkUt"
            >
              <Icon icon={discordIcon} bgcolor="white" fontSize={24} color="#014c2d" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
              target="_blank"
              href="https://twitter.com/DestinyWarNFT"
            >
              <Icon icon={twitterIcon} bgcolor="white" fontSize={24} color="#014c2d" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
              target="_blank"
              href="https://t.me/DestinyWarOfficialGroup"
            >
              <Icon icon={telegramIcon} bgcolor="white" fontSize={24} color="#014c2d" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={youtubeIcon} bgcolor="white" fontSize={24} color="#014c2d" />
            </IconButton>
          </Stack>
        </Stack>
        <Typography variant="h3" color="#014c2d">
          Copyright 2024 © All rights Reserved. Design by Destiny War Inc.
        </Typography>
      </Container>
    </Stack>
  );
}
