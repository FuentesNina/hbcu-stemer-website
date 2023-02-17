import { MouseEventHandler } from "react"

export function Button({content, action, buttonStyle, className} : {content?: string, action?: MouseEventHandler | undefined, buttonStyle?: 'green' | undefined, className?: string}) {
    const pickButtonStyle = function() {
        if (buttonStyle === 'green') {
            return 'border-black text-black bg-myGreen';
        } else if (buttonStyle === 'white') {
            return 'border-black text-black bg-white'
        }
    }


    return (
        <div className={`w-full flex justify-center ${className}`}>
            <button className={`${pickButtonStyle()}   max-w-fit border rounded-lg font-title uppercase font-bold py-2 px-6`} onClick={action}>{content}</button>
        </div>
    )
}
