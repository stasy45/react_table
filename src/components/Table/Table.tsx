import React, {createElement, ElementType} from 'react';
import cn from 'classnames';
import css from './Table.module.scss';



interface TableProps {
    className?: string,
    children?: React.PropsWithoutRef<React.ComponentProps<ElementType>>[string]
}


export function Table(props: TableProps) {
    const {
        className,
        children,
    } = props;

    return createElement(
        'table',
        {
            className: cn(css.table, className)
        },
        children
    );
}

Table.Head = (props: TableProps) => {
    const {className, children} = props;

    return createElement(
        'thead',
        {
            className: cn(css.table__head, className),
        },
        children
    );
}

Table.Body = (props: TableProps) => {
    const {className, children} = props;

    return createElement(
        'tbody',
        {
            className: cn(css.table__body, className),
        },
        children
    );
}

Table.Row = (props: TableProps) => {
    const { className, children} = props;

    return createElement(
        'tr',
        {
            className: cn(css.table__row, className),
        },
        children
    );
}

Table.Cell = (props: TableProps) => {
    const {className, children} = props;

    return createElement(
        'td',
        {
            className: cn(css.table__cell, className),
        },
        children
    );
}
