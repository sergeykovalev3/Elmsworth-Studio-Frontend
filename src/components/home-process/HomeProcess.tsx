import { brandFull } from '../../brand'
import { processSteps } from './steps'
import './HomeProcess.css'

export function HomeProcess() {
  return (
    <section className="home-process">
      <div className="home-process-inner">
        <div className="home-process-intro">
          <h2 className="home-process-title">
            {brandFull}
            <span>A clear sequence</span>
          </h2>
        </div>
        {processSteps.map((step) => (
          <div key={step.title} className="home-process-step">
            <img src={step.icon} alt="" className="home-process-icon" />
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
