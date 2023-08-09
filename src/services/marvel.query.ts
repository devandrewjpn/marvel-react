import { useQuery } from 'react-query'
import { getMarvelCharacters } from './axios'

export const useMarvelCharacters = () => {
    const query = useQuery('marvelCharacters', async () => {
        const data = await getMarvelCharacters()
        console.log(data)
        return data
    })

    return {
        characters: query.data,
        isLoading: query.isLoading,
    }
}
