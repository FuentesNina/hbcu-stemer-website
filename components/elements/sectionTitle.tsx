import { MouseEventHandler } from "react";


export default function SectionTitle({content, action, className, style, titleStyle} : {titleStyle?: string, content?: string, action?: MouseEventHandler | undefined, className?: string, style?: any}) {
    const pickTitleStyle = function() {
        if (titleStyle === "white-red") {
            return 'text-blackOutline fill-white text-stroke-black drop-shadow-[2px_2px_0_#ff1616]';
        } else if (titleStyle === "red-black") {
            return 'text-myRed text-stroke-black drop-shadow-[2px_2px_0_#000000]';
        } else if (titleStyle === "white-black") {
            return 'text-white text-stroke-black drop-shadow-[2px_2px_0_#000000]';
        }
    }

    return (
        <h2 className={`${pickTitleStyle()} font-display font-bold uppercase text-4xl text-center ${className} ${titleStyle}`} onClick={action} style={style}>{content}</h2>
    )
}
