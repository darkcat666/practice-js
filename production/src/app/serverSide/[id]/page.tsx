import { character, characters } from "@/model/fetcher"
import { RSCCharacter } from "@/view/RSC/RSCCharacterDetail"

interface props {
    id: string
}

export const generateStaticParams = async () => {
    //ここの部分を書きましょう
    const characterDetail = await characters()

    return characterDetail.map((item) => {
        return {
            id: item.fullName
        }
    })
}

//ここの部分もちょろっと
const ClientCharacter = ({ params }: { params: props }) => {
    return <RSCCharacter id={params.id} />
}

export default ClientCharacter
