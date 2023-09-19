import "./Work.css"
import Works from "./Works"

const Work = () => {
  return (
    <section className="section work" id="projects">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Some completed projects</span>

        <Works />
    </section>
  )
}
export default Work