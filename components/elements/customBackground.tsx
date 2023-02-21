import { ReactElement } from "react";

export default function Layout({children}:{children:ReactElement}) {

    return (
      <section>
        {children}
      </section>
    )
}
