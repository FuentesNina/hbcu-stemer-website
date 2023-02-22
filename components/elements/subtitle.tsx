import { MouseEventHandler } from "react";

export function Subtitle({content, action, className, style} : {content?: string, action?: MouseEventHandler | undefined, className?: string, style?: any}) {
    return (
        <h3 className={`font-title uppercase font-bold text-lg ${className}`} onClick={action} style={style}>{content}</h3>
    )
}
