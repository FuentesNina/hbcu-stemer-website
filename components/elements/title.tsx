import { MouseEventHandler } from "react";

export function Title({content, action, className} : {content?: string, action?: MouseEventHandler | undefined, className?: string}) {
    return (
        <h2 className={`${className} font-title uppercase font-bold text-lg`} onClick={action}>{content}</h2>
    )
}
