import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Countdown({raceDay} : {raceDay: {year:number, month: number, day: number}}) {
  const router = useRouter();
  const path = router.pathname;

  const numberStyle = `font-title uppercase font-bold text-white text-center text-3xl ${path === '/raceinfo' ? 'drop-shadow-[2px_2px_0_rgba(0,0,0,1)]' : 'drop-shadow-md'}`;
  const catStyle = `font-title uppercase font-bold text-white text-center ${path === '/raceinfo' ? 'drop-shadow-[2px_2px_0_rgba(0,0,0,1)]' : 'drop-shadow-md'}`;
  const textStyle = `font-title uppercase text-center font-bold text-white text-sm ${path === '/raceinfo' ? 'drop-shadow-[2px_2px_0_rgba(0,0,0,1)]' : 'drop-shadow-md'}`;


  const getRemainingTime = function(raceDay:{year: number, month: number, day: number}) {
    const deadline = new Date(raceDay.year, raceDay.month - 1,raceDay.day);

    const remainingTime = deadline.valueOf() - Date.now();

    const DAYS_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

    const days = Math.floor(remainingTime / DAYS_IN_MILLISECONDS);

    const remainingHours = remainingTime - days * DAYS_IN_MILLISECONDS;
    const HOURS_IN_MILLISECONDS = 1000 * 60 * 60;

    const hours = Math.floor(remainingHours / HOURS_IN_MILLISECONDS);

    const remaningMinutes = remainingHours - hours * HOURS_IN_MILLISECONDS;
    const MINUTES_IN_MILLISECONDS = 1000 * 60;

    const minutes = Math.floor(remaningMinutes / MINUTES_IN_MILLISECONDS);
    console.log({days, hours, minutes})

    return {days, hours, minutes};
  }

  const [countdown, setCountdown] = useState(getRemainingTime(raceDay));

  useEffect(() => {
    const interval = setInterval(() => {
        setCountdown(getRemainingTime(raceDay));
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [countdown, raceDay])


  return (
    <>
      {countdown.days >= 0 ?
        <div className="flex flex-col place-content-center">
            <h5 className={textStyle}>{`Race Starts in...`}</h5>
            <div className="grid grid-cols-3 mt-3">
                <div>
                    <p className={numberStyle}>{countdown.days}</p>
                    <h6 className={catStyle}>{`days`}</h6>
                </div>
                <div>
                    <p className={numberStyle}>{countdown.hours}</p>
                    <h6 className={catStyle}>{`hours`}</h6>
                </div>
                <div>
                    <p className={numberStyle}>{countdown.minutes}</p>
                    <h6 className={catStyle}>{`minutes`}</h6>
                </div>
            </div>
        </div>
        : countdown.days === -1 &&
        <div className="flex flex-col place-content-center">
            <h5 className={textStyle}>{`The Race Starts Today!!!`}</h5>
        </div>
      }
    </>

  )
}
