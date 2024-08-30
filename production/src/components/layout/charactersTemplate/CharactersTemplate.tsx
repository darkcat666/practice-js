import { HPType } from "@/model/fetcher"
import styles from "./style.css"
import { BackButton } from "@/components/ui/backButton"
import Link from "next/link"
import Image from "next/image"

interface props {
    title: string
    data: HPType[]
}

export const CharactersTemplate = (props: props) => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div className={styles.backButton}>
                    <BackButton />
                </div>
                <div className={styles.titleTextBox}>
                    <h1>{props.title}でのハリーポッター図鑑</h1>
                </div>
            </header>

            <section>
                <div className={styles.itemImage}>
                    {props.data.map((item, index) => (
                        <div key={index}>
                            <Link href={`/serverSide/${item.fullName}`}>
                                <Image src={item.image}
                                        alt="darkcat"
                                        width={175}
                                        height={250}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
