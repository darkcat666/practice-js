import { CharacterDetailTemplate } from "@/components/layout/characterDetailTemplate/characterDetailTemplate"
import { character } from "@/model/fetcher"

interface props {
    id: string
}

export const RSCCharacter = async (props: props) => {
    //ここを書いてもらう
    const personalData = await character(props.id)
    return (
        <CharacterDetailTemplate data={personalData}/>
    )
}
