//API取得のmodelでのコードを書いてみよう！
import { HPType } from "../types"

export const character = async (id: string): Promise<HPType> => {
    const characterDetail = await fetch(`${process.env.NEXT_PUBLIC_URL1}?search=${name}`)

    const characterData = await characterDetail.json()

    return characterData[0] as HPType
}
