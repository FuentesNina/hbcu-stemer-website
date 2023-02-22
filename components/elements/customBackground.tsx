import { ReactElement, useState, useEffect, useRef } from "react";
import BackgroundPattern from "./logos/backgroundPattern";

export default function CustomBackground({children, backgroundColor, color, factor}:{children?:ReactElement, backgroundColor?: string, color?: string, factor: number}) {
    const [bgDimRepeat, setBgDimRepeat] = useState({dimension: 100 * factor, xRepeat: 5, yRepeat: 20})
    const bgRef = useRef(null);

    useEffect(() => {
        const handleWindowResize = () => {
            const div = bgRef.current;
            let innerWidth : number;
            let innerHeight : number;

            if (div) {
                innerWidth = (div as HTMLDivElement).clientWidth;
                innerHeight = (div as HTMLDivElement).clientHeight;
                const xrepeat = Math.ceil(innerWidth / bgDimRepeat.dimension);
                const yrepeat = Math.ceil(innerHeight / bgDimRepeat.dimension);
                setBgDimRepeat({dimension: bgDimRepeat.dimension, xRepeat: xrepeat, yRepeat: yrepeat});
            }
            console.log(bgDimRepeat);

        }

        window.addEventListener('resize', handleWindowResize);

        return () => {window.removeEventListener('resize', handleWindowResize)};
      }, [bgDimRepeat])

    return (
      <div ref={bgRef} className="w-full h-fit relative overflow-clip">
        <div className={`flex flex-wrap absolute -z-10`} style={{width: `${bgDimRepeat.dimension * bgDimRepeat.xRepeat}px`}}>
            {[...Array(bgDimRepeat.xRepeat * bgDimRepeat.yRepeat)].map((value, index) => {
                return <BackgroundPattern key={index} dimension={bgDimRepeat.dimension} backgroundColor={backgroundColor} color={color}/>
            })}
        </div>
        {children}
      </div>
    )
}
