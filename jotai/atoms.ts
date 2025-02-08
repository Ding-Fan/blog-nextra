import { atom } from 'jotai'

export const MenuAtom = atom(false)

export const TXNsAtom = atom<ITransaction[]>([])
export const blocksAtom = atom<IBlock[]>([])