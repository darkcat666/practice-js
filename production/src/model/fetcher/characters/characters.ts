import { HPType } from "../types"

export const characters = async (): Promise<HPType[]> => {
    const data = await fetch(process.env.NEXT_PUBLIC_URL1 as string)

    const fetchdata = await data.json()

    return fetchdata as HPType[]
}