
import { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);

  return (
    <FormContext.Provider
      value={{
        selectedPlan,
        setSelectedPlan,
        isYearly,
        setIsYearly,
        selectedAddons,
        setSelectedAddons,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormContext);
}
