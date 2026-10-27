
import { useFormData } from "./FormContext";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import Button from "./Button";
import "./AddsOn.css";

const addonPrices = {
  monthly: {
    "online-service": 1,
    "large-storage": 2,
    "customizable-profile": 2,
  },
  yearly: {
    "online-service": 10,
    "large-storage": 20,
    "customizable-profile": 20,
  },
};

const addonDetails = [
  {
    id: "online-service",
    title: "Online service",
    description: "Access to multiplayer games",
  },
  {
    id: "large-storage",
    title: "Large storage",
    description: "Extra 1TB of cloud service",
  },
  {
    id: "customizable-profile",
    title: "Customizable Profile",
    description: "Custom theme on your profile",
  },
];

const AddsOn = () => {
  const navigate = useNavigate();

  const {
    isYearly,
    selectedAddons,
    setSelectedAddons,
  } = useFormData();

  const price = isYearly
    ? addonPrices.yearly
    : addonPrices.monthly;

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setSelectedAddons((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  return (
    <section className="add-on-container">
      <SideBar activeStep={3} />

      <div className="addon-on-content-container">
        <h2 className="add-on-heading">Pick add-ons</h2>

        <p className="add-on-title">
          Add-ons help enhance your gaming experience
        </p>

        <div className="service-container">
          {addonDetails.map((addon) => (
            <label
              key={addon.id}
              htmlFor={addon.id}
              className={`addon-card ${
                selectedAddons.includes(addon.id)
                  ? "active"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                id={addon.id}
                className="add-on-checkbox"
                value={addon.id}
                checked={selectedAddons.includes(addon.id)}
                onChange={handleCheckboxChange}
              />

              <div className="addon-description">
                <h3>{addon.title}</h3>
                <p>{addon.description}</p>
              </div>

              <span className="add-on-price">
                +${price[addon.id]}/{isYearly ? "yr" : "mo"}
              </span>
            </label>
          ))}
        </div>

        <div className="btn-container">
          <div className="back-btn">
            <Button
              variant="neutral"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>

          <div className="next-btn">
            <Button
              variant="primary"
              onClick={() => navigate("/summary")}
            >
              Next Page
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddsOn;
