import React from "react";
import './Sidebar.css'

const SideBar = ({activeStep}) => {
 return (
     <div className="image">
    <div className="side-bar-container">

    <div className="step-one-container">
       <div className={`step-circle ${activeStep === 1 ? "active" : ""}`}>
        <span>1</span>
       </div>

       <div className="step-content">
            <p className="step-label">Step 1</p>
            <h2 className="step-title">Your info</h2>
        </div>
    </div>

    <div className="step-two-container">

        <div className={`step-circle ${activeStep === 2 ? "active" : ""}`}>
            <span>2</span>
        </div>

        <div className="step-content">
            <p className="step-label">Step 2</p>
            <h2 className="step-title">select plan</h2>
        </div>
    </div>

     <div className={`step-circle ${activeStep === 3 ? "active" : ""}`}>
        <span>3</span>
     </div>

    <div className="step-content">
        <p className="step-label">Step 3</p>
        <h2 className="step-title">add-ons</h2>
    </div>

<div className={`step-circle ${activeStep === 3 ? "active" : ""}`}>
    <span>4</span>
</div>

 <div className="step-content">
    <p className="step-label">Step 4</p>
    <h2 className="step-title">summary</h2>
</div>

</div>
</div>
 )
}

export default SideBar