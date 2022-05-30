import React from 'react'

import moon from './icons/light/moon.svg'
import light_user from './icons/light/user.png'
import light_setting from './icons/light/setting.png'
import light_heart from './icons/light/heart.png'
import light_fb from './icons/light/fb.png'
import light_twitter from './icons/light/twitter.png'
import light_youtube from './icons/light/youtube.png'
import sun from './icons/dark/sun.png'
import dark_heart from './icons/dark/heart.svg'
import dark_user from './icons/dark/user.svg'
import dark_setting from './icons/dark/settings.svg'
import dark_fb from './icons/dark/facebook.png'
import dark_twitter from './icons/dark/twitter-alt.png'
import dark_youtube from './icons/dark/youtube.png'

const icon_colors = {
  light: {
    icons: {
      toggle: moon,
      user: light_user,
      heart: light_heart,
      setting: light_setting,
      fb: light_fb,
      twitter: light_twitter,
      youtube: light_youtube,
    },
    colors: {
      body: 'bg-[#ffffff]',
      navbar: 'bg-[#ffffff]',
      footer: 'bg-[#e6fff7]',
      subscribe_bg: 'bg-[#b3ffe7]',
      text_color: 'text-[#404040]',
    },
  },
  dark: {
    icons: {
      toggle: sun,
      user: dark_user,
      heart: dark_heart,
      setting: dark_setting,
      fb: dark_fb,
      twitter: dark_twitter,
      youtube: dark_youtube,
    },
    colors: {
      body: 'bg-[#595959]',
      navbar: 'bg-[#0d0d0d]',
      footer: 'bg-[#00091a]',
      subscribe_bg: 'bg-[#001233]',
      text_color: 'text-[#ffffff]',
    },
  },
}

const ColorsIconContext = React.createContext()

export const ColorsIconsProvider = ({ children }) => {
  const [property, setProperty] = React.useState(icon_colors.light)
  const [dark, setDark] = React.useState(false)

  const handleDarkLight = () => {
    if (dark) {
      setProperty(icon_colors.light)
      setDark(false)
    } else {
      setProperty(icon_colors.dark)
      setDark(true)
    }
  }

  return <ColorsIconContext.Provider value={{ property, handleDarkLight }}>{children}</ColorsIconContext.Provider>
}

export const UseColorsIcons = () => {
  const { property, handleDarkLight } = React.useContext(ColorsIconContext)
  return { property, handleDarkLight }
}
