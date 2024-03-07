import { FC } from "react";
import { useGate, useUnit } from "effector-react";
import {$posts, MainTableGate} from "./model";
import { Table } from "../../components";


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
        <>
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.Cell
                            className="w-54">
                            id
                        </Table.Cell>
                        <Table.Cell
                            className="w-54">
                            slug
                        </Table.Cell>
                        <Table.Cell
                            className="w-26">
                            url
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            title
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            content
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            image
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            thumbnail
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            status
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            category
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            publishedAt
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            updatedAt
                        </Table.Cell>
                        <Table.Cell
                            className="w-20">
                            title
                        </Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {
                        posts.map((post, idx) => (
                            <Table.Row>
                                <Table.Cell
                                    className="w-54">
                                    {idx}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-54">
                                    {post.slug}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-26">
                                    {post.url}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.title}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.content}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.image}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.thumbnail}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.status}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.category}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.publishedAt}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.updatedAt}
                                </Table.Cell>
                                <Table.Cell
                                    className="w-20">
                                    {post.title}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </>
    )
}