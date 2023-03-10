import Link from "next/link";
import { MouseEventHandler } from "react"
import { UrlObject } from 'url';
declare type Url = string | UrlObject;

export default function Button({content, action, buttonStyle, className, type, href} : {href: Url, content?: string, action?: MouseEventHandler, buttonStyle?: string, className?: string, type?: 'button' | 'submit' | 'reset'}) {
    const pickButtonStyle = function() {
        if (buttonStyle === 'green') {
            return 'border-black text-black bg-myGreen hover:text-myGreen hover:bg-black';
        } else if (buttonStyle === 'white-black') {
            return 'border-black text-black bg-white hover:bg-myGreen'
        }else if (buttonStyle === 'white-black-on-red') {
            return 'border-black text-black bg-white hover:bg-black hover:text-white hover:border-white'
        } else if (buttonStyle === 'red') {
            return 'border-black text-white bg-myRed hover:bg-white hover:text-myRed hover:border-myRed'
        } else if (buttonStyle === 'red-no-border') {
            return 'border-white text-white bg-myRed hover:border-myRed hover:text-myRed hover:bg-white'
        } else if (buttonStyle === 'black') {
            return 'border-transparent text-myGreen bg-black hover:text-black hover:bg-myGreen hover:border-black'
        } else if (buttonStyle === 'lightGrey') {
            return 'border-white text-white bg-myLightGrey'
        } else if (buttonStyle === 'white-red') {
            return 'hover:border-white hover:text-white hover:bg-myRed border-myRed text-myRed bg-white'
        } else if (buttonStyle === 'darkerGrey') {
            return 'border-white text-white bg-[#909090] hover:text-[#909090] hover:bg-white hover:border-[#909090]'
        }
    }

    return (
        <div className={`w-full flex justify-center ${className}`}>
            {href
                ?    <Link href={href}>
                        <button type={type} className={`${pickButtonStyle()} text-sm max-w-fit border border-solid rounded-lg font-title uppercase font-bold py-2 px-6`} onClick={action}>{content}</button>
                    </Link>
                :   <button type={type} className={`${pickButtonStyle()} text-sm max-w-fit border border-solid rounded-lg font-title uppercase font-bold py-2 px-6`} onClick={action}>{content}</button>
            }
        </div>
    )
}
