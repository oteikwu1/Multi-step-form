import SideBar from "./SideBar"
import './AddsOn.css'

const AddsOn = () => {
    return (
      <section className="add-on-container">
        <SideBar activeStep={3} />

        <div className="content-container">
            <h2>picks add-ons</h2>
            <p>Add-ons helps enhance gaming experience</p>
        </div>
      </section>
    )
}

export default AddsOn