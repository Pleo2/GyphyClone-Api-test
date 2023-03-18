import React from "react"
import TitleSeccions from "../TitleSeccions"
import './StoriesSeccion.css'

export default function StoriesSeccion() {
  return (
    <>
    <section className="container-storiesSeccion">
      <TitleSeccions pathSvg={'/stories.svg'} title={'Stories'} />
    </section>
    </>
  )
}