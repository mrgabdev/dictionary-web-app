export interface Word {
  word: string
  phonetic: string
  nouns?: Noun
  verbs?: Verb[]
  sourceUrls: string[]
}

export interface Noun {
  definitions: string[]
  synonyms: string[]
}

export interface Verb {
  definition: string
  example?: string
}
