import axios, { AxiosResponse } from 'axios'

const apiKey = '08bfc07e5af8c63dcc5c879a66931f85'

export interface MediaItem {
    resourceURI: string
    name: string
    type?: string
}

export interface Media {
    available: number
    collectionURI: string
    items: MediaItem[]
}

export interface Url {
    type: string
    url: string
}

export interface CharacterThumbnail {
    path: string
    extension: string
}

export interface Character {
    id: number
    name: string
    description: string
    modified: Date
    thumbnail: CharacterThumbnail
    resourceURI: string
    comics: Media
    series: Media
    stories: Media
    events: Media
    urls: Url[]
}

interface MarvelApiResponse {
    code: number
    status: string
    copyright: string
    attributionText: string
    attributionHTML: string
    etag: string
    data: Character[]
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getMarvelCharacters = (): Promise<void | AxiosResponse<MarvelApiResponse, any>> => {
    return axios
        .get<MarvelApiResponse>(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.error(error)
        })
}
