import {FC} from "react";
import {useGate, useUnit} from "effector-react";
import css from './MainTableView.module.scss'
import {$posts, MainTableGate} from "./model";
import {Link, Table} from "../../components";


interface MainTableViewProps {

}

export const MainTableView: FC<MainTableViewProps> = () => {
    useGate(MainTableGate)

    const [
        posts
    ] = useUnit([
        $posts
    ])

    if (!posts) return null

    return (
        <div className={css.table}>
            <Table className={css.table__container}>
                <Table.Head className={css.table__header}>
                    <Table.Row>
                        <Table.Cell className="w-10">
                            Ссылка
                        </Table.Cell>
                        <Table.Cell className="w-10">
                            Заголовок
                        </Table.Cell>
                        <Table.Cell className="w-45">
                            Текст
                        </Table.Cell>
                        <Table.Cell>
                            Картинка
                        </Table.Cell>
                        <Table.Cell>
                            Статус
                        </Table.Cell>
                        <Table.Cell>
                            Категория
                        </Table.Cell>
                        <Table.Cell className="w-10">
                            Опубликован
                        </Table.Cell>
                        <Table.Cell className="w-10">
                            Обновлён
                        </Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {
                        posts.map((post, idx) => (
                            <Table.Row key={idx} className={css.table__row}>
                                <Table.Cell>
                                    <Link href={post.url} text={post.slug}  className={css.table__link} />
                                </Table.Cell>
                                <Table.Cell>
                                    {post.title}
                                </Table.Cell>
                                <Table.Cell className={css.table__content}>
                                    {post.content}
                                </Table.Cell>
                                <Table.Cell>
                                    <Link href={post.image} >
                                        <img src={post.image} alt={post.slug} className="w-100" />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    {post.status}
                                </Table.Cell>
                                <Table.Cell>
                                    {post.category}
                                </Table.Cell>
                                <Table.Cell>
                                    {post.publishedAt}
                                </Table.Cell>
                                <Table.Cell>
                                    {post.updatedAt}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}