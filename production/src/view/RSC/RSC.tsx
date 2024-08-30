import { CharactersTemplate } from "@/components/layout/charactersTemplate"
import { characters } from "@/model/fetcher"

export const RSC = async () => {
    //データを取得！
    const data = await characters()

    return <CharactersTemplate title="test" data={data}/>
}
