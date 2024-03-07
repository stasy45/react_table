import React, { FC, JSX } from 'react';


type LinkProps = JSX.IntrinsicElements['a'] & {
    text?: string
};

export const Link: FC<LinkProps> = (
    ({
         className,
         text,
         children,
         ...props
     }) => {

        if (children) {
            return (
                <a className={className} {...props}>
                    {children}
                </a>
            );
        }

        return (
            <a className={className} {...props}>
                {text ? text : null}
            </a>
        );
    }
)