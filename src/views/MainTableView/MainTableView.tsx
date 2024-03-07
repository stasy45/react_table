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
                        <Table.Cell>
                            url
                        </Table.Cell>
                        <Table.Cell>
                            title
                        </Table.Cell>
                        <Table.Cell className="w-45">
                            content
                        </Table.Cell>
                        <Table.Cell>
                            image
                        </Table.Cell>
                        <Table.Cell>
                            status
                        </Table.Cell>
                        <Table.Cell>
                            category
                        </Table.Cell>
                        <Table.Cell>
                            publishedAt
                        </Table.Cell>
                        <Table.Cell>
                            updatedAt
                        </Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {
                        posts.map(post => (
                            <Table.Row className={css.table__row}>
                                <Table.Cell>
                                    <Link href={post.url} text="url"  className={css.table__link} />
                                </Table.Cell>
                                <Table.Cell>
                                    {post.title}
                                </Table.Cell>
                                <Table.Cell className={css.table__content}>
                                    {post.content}
                                </Table.Cell>
                                <Table.Cell>
                                    <Link href={post.image} text="img" className={css.table__link} />
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