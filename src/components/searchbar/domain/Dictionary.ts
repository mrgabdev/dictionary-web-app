export interface Dictionary {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  sourceUrls: string[]
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: any[]
}

interface Definition {
  definition: string
  synonyms: any[]
  antonyms: any[]
  example?: string
}

interface Phonetic {
  text: string
  audio: string
  sourceUrl?: string
}
