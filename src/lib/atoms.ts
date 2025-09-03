'use client'

import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'
import { Language } from '@/types'

export const languageAtom = atomWithStorage<Language>('language.v1', 'English')

export const switchLanguageAtom = atom(null, (get, set) => {
  const currentLanguage = get(languageAtom)
  set(languageAtom, currentLanguage === 'Japanese' ? 'English' : 'Japanese')
})

export const isJapaneseAtom = atom((get) => get(languageAtom) === 'Japanese')