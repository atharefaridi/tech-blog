import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import LogoWithThumbnail  from "./components/LogoWithThumbnail";

const config: DocsThemeConfig = {
  logo: <LogoWithThumbnail />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Athar Faridi" />
      <meta property="og:description" content="Welcome to my playground !" />
      <title>Athar Faridi</title>
      <link rel="icon" href="https://trekohike.com/wp-content/uploads/2024/05/cropped-Trekohike-by-Saga-Photoroom-1-e1717754370583-32x32.webp" sizes="32x32"></link>
    </>
  ),
  footer: {
    text: "2016-2024 ©atharfaridi",
  },
  docsRepositoryBase:"https://github.com/atharefaridi/tech-blog/tree/main",
 sidebar:{
 defaultMenuCollapseLevel:1
 } 
  
};

export default config
