import useData from "./useData";

export interface Parent_platform {
    parent_platform: Parent_platform
}

export interface Games {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: Parent_platform[],
    metacritic: number
}



const useGames = () => useData<Games>('/games')

export default useGames
