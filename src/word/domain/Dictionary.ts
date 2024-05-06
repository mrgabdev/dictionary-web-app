export interface Word {
  word: string
  phonetic: string
  nouns?: Noun[]
  verbs?: Verb[]
  sourceUrls: string[]
}

export type Noun = string

export interface Verb {
  definition: string
  example?: string
}
