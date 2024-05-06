import { Noun, Verb, Word } from './../domain/Dictionary'
import { Dictionary } from './DictionaryApiResponse'
import { DictionaryRepository } from '../domain/DictionaryRepository'
import NotFound from '@/app/word/[word]/not-found'

export class DictionaryApiDictionaryRepository implements DictionaryRepository {
  private readonly endpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

  async search(word: string): Promise<Word> {
    return fetch(`${this.endpoint}${word}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      if (!response.ok) {
        return response.json()
      }
      return response
        .json()
        .then((response: Dictionary[]) => response[0])
        .then((response: Dictionary) => {
          const nounList = response.meanings?.find((type) => type.partOfSpeech === 'noun')

          const definitions = nounList?.definitions.map((content) => content.definition)

          const synonyms = nounList?.synonyms.map((content) => content)

          const verb = response.meanings
            ?.find((type) => type.partOfSpeech === 'verb')
            ?.definitions.map((content) => ({
              definition: content.definition,
              example: content.example
            })) as Verb[]

          return {
            word: response.word,
            phonetic: response.phonetic,
            nouns: {
              definitions,
              synonyms
            },
            verbs: verb,
            sourceUrls: response.sourceUrls
          }
        })
    })
  }
}
