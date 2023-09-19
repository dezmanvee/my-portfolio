import { ProjectsData } from "./Data"
import WorkItems from "./WorkItems"

const Works = () => {
  return (
    <div className="work__container container grid">
        {ProjectsData.map(item => {
            return <WorkItems {...item} key={item.id}/>
        })}
    </div>
  )
}
export default Works