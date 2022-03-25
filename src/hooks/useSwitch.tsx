import { useState } from "react";

export const useSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return { isEnabled, toggleSwitch }
}