import { Word } from './Dictionary'

export interface DictionaryRepository {
  search(word: string): Promise<Word>
}
