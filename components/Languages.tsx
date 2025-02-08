import { LanguageSwitcher } from 'next-export-i18n'
import React from 'react'

type Props = {
  className?: string
}

const Languages = ({ className = '' }: Props) => {
  return (
    <div className={className}>
      {
        [
          {
            label: '🇺🇸 English',
            lang: 'en'
          },
          {
            label: '🇷🇺 русский язык',
            lang: 'ru'
          },
          // {
          //   label: '🇹🇷 Türk',
          //   lang: 'tr'
          // },
          // {
          //   label: '🇪🇸 español',
          //   lang: 'es'
          // },
          // {
          //   label: '🇩🇪 Deutsch',
          //   lang: 'de'
          // },
          // {
          //   label: '🇰🇷 한국인',
          //   lang: 'ko'
          // },
          // {
          //   label: '🇻🇳 Tiếng Việt',
          //   lang: 'vi'
          // },
          // {
          //   label: '🇺🇦 українська',
          //   lang: 'uk'
          // },
          // {
          //   label: '日本語',
          //   lang: 'jp'
          // },
          // {
          //   label: '简体中文',
          //   lang: 'zh-cn'
          // },
          {
            label: '🇨🇳 繁体中文',
            lang: 'zh-TW'
          },
        ].map((item, index) => {
          return (
            <LanguageSwitcher key={index} lang={item.lang}>
              <div key={index} className="whitespace-nowrap">
                {item.label}
              </div>
            </LanguageSwitcher>
          )
        })
      }
    </div>
  )
}

export default Languages