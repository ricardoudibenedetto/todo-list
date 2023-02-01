import { ReactElement } from "react"
import "../layouts/style.css"
interface Props {
    children: ReactElement
}

export const Card = ({children}: Props) => {
  return (
    <section className="card">
        {children}
    </section>
  )
}
