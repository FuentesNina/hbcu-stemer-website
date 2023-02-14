import Link from "next/link";

export default function Footer() {
    const quote = `“Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why its called the present.” - Bil Keane`;
    const instagramURL = 'https://www.instagram.com/hbcustemer/'

    return (
      <>
        <section>
          <p>{quote}</p>
          <div id="black background">
            <div id="followus">
              <div id="collage of Instagram images"></div>
              <Link href={instagramURL}/>
            </div>
          </div>
        </section>
      </>
    )
  }
