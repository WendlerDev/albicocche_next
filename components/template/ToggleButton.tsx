"use client";
import React, { useState } from "react";
import { DayIcon, NightIcon } from "../icons/icons";

interface ToggleButtonProps {
    initialChecked?: boolean;
    onToggle?: (checked: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialChecked = false, onToggle }) => {
    const [isChecked, setIsChecked] = useState(initialChecked);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        if (onToggle) {
            onToggle(newChecked);
        }
    };

    return (
            <label className={`flex items-center cursor-pointer`}>
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={handleToggle}
                />
                <div className={`w-20 h-8 rounded-full transition-all duration-300 ease-in-out ${isChecked ? "bg-green-500" : "bg-gray-300"}`}>
                    <div className={`absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out ${isChecked ? "translate-x-12" : "translate-x-0"}`}>
                        {isChecked ? (
                            <span role="img" aria-label="Noite">{NightIcon}</span>
                        ) : (
                            <span role="img" aria-label="Dia">{DayIcon}</span>
                        )}
                    </div>
                </div>
            </label>
    );
};

export default ToggleButton;

