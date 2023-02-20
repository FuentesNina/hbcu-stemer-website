import { MouseEventHandler } from "react";

export function Title({content, action, className, style} : {content?: string, action?: MouseEventHandler | undefined, className?: string, style?: any}) {
    return (
        <h3 className={`${className} font-title uppercase font-bold text-lg`} onClick={action} style={style}>{content}</h3>
    )
}
