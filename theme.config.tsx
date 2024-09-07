import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import LogoWithThumbnail  from "./components/LogoWithThumbnail";

const config: DocsThemeConfig = {
  logo: <LogoWithThumbnail/>,

  footer: {
    text: '2016-2024 ©atharfaridi',
  },
}

export default config
