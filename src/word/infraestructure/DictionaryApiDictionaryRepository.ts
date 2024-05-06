import { Noun, Verb, Word } from './../domain/Dictionary'
import { Dictionary } from './DictionaryApiResponse'
import { DictionaryRepository } from '../domain/DictionaryRepository'

export class DictionaryApiDictionaryRepository implements DictionaryRepository {
  private readonly endpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

  async search(word: string): Promise<Word> {
    return fetch(`${this.endpoint}${word}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((response: Dictionary[]) => response[0])
      .then((response: Dictionary) => {
        const noun = response.meanings
          ?.find((type) => type.partOfSpeech === 'noun')
          ?.definitions.map((content) => content.definition) as Noun[]

        const verb = response.meanings
          ?.find((type) => type.partOfSpeech === 'verb')
          ?.definitions.map((content) => ({
            definition: content.definition,
            example: content.example
          })) as Verb[]

        return {
          word: response.word,
          phonetic: response.phonetic,
          nouns: noun,
          verbs: verb,
          sourceUrls: response.sourceUrls
        }
      })
      .catch((error) => {
        throw new Error('No se encontraron datos', error.message)
      })
  }
}
