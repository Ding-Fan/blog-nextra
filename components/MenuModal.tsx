import { Dialog } from '@headlessui/react'
import { useAtom, useAtomValue } from 'jotai'
import {
  LanguageSwitcher,
  useLanguageQuery,
  useTranslation,
} from 'next-export-i18n'
import Link from 'next/link'
import React from 'react'
import { HeaderItems } from '../constants'
import { MenuAtom } from '../jotai/atoms'
import { Utils } from '../utils/utils'
import Button from './Button'
import Languages from './Languages'
import Modal from './Modal'

interface Props {}

const MenuModal = (props: Props) => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()
  const [isMenuModalOpen, setIsMenuModalOpen] = useAtom(MenuAtom)

  return (
    <Modal
      isOpen={isMenuModalOpen}
      confirmCallback={() => {
        setIsMenuModalOpen(false)
      }}
      closeCallback={() => {
        setIsMenuModalOpen(false)
      }}
    >
      <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl p-10 text-left align-middle opacity-80 shadow-xl transition-all">
        <div className="flex flex-col gap-5 text-2xl text-snowWhite">
          {HeaderItems.map(({ label, path }) => {
            return (
              <div
                key={label}
                onClick={() => {
                  setIsMenuModalOpen(false)
                }}
                className=""
              >
                <Link
                  href={{
                    pathname: path,
                    query,
                  }}
                >
                  {Utils.isValidHttpUrl(path) ? (
                    <a target="_blank">{t(`header.items.${label}`)}</a>
                  ) : (
                    <span>{t(`header.items.${label}`)}</span>
                  )}
                </Link>
              </div>
            )
          })}
          {/* // ! */}
          {/* maybe add "connect wallet" feature here */}

          {/* <Button className=''>
            {t(`header.button`)}
          </Button> */}

          {/* <div className="">
            Language
          </div>
          <Languages className='max-h-[30vh] text-base text-[#afafaf] overflow-auto flex flex-col gap-4 ' /> */}
        </div>
      </Dialog.Panel>
    </Modal>
  )
}

export default MenuModal
