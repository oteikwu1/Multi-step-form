import SideBar from "./SideBar"
import arcade from '../assets/icon-arcade.svg'
import advance from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'
import './SelectPlan.css'
import { useState } from "react"

const SelectPlan = () => {
  const [selectPLan, setSelectPlan] = useState("arcade")

    return (
      <section className="main-container">
        <SideBar  activeStep={2}/>


        <div className="content-container">
            <h2>Select a plan</h2>
            <p>you have option of monthly
              or yearly billing
            </p>
            
          <div className="plan-container">
              <div className="arcade">
                <img src={arcade} alt="arcade icon" />
                <h4>Arcade</h4>
                <p>$9/mo</p>
            </div>

                <div className={`plan-card ${plan-card === "arcade" ? "active" : ""}`}>
                  <img src={advance} alt="advance icon" />
                  <h4>Advance</h4>
                  <p>$12/mo</p>
                </div>

                <div className="arcade">
                  <img src={pro} alt="pro icon" />
                  <p>Pro</p>
                  <p>$15/mo</p>
                </div>
            </div>
        </div>
      </section>
    )
}

export default SelectPlan