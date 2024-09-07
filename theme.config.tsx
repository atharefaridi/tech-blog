import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import LogoWithThumbnail  from "./components/LogoWithThumbnail";

const config: DocsThemeConfig = {
  logo: <LogoWithThumbnail/>,
   head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Athar Faridi" />
      <meta property="og:description" content="Welcome to my playground !" />
    </>
  ),
  footer: {
    text: '2016-2024 ©atharfaridi',
  },
}

export default config
