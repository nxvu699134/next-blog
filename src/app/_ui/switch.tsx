"use client";

import { ComponentPropsWithoutRef, useState, useCallback, useRef } from "react";
import clsx from "clsx";

interface Props extends ComponentPropsWithoutRef<"div"> {
  toggled?: boolean;
  onChange?: () => void;
  variant: "success" | "danger";
}

const variantColor = {
  success: "bg-emerald-500",
  danger: "bg-red-500",
};

const Switch = (props: Props) => {
  const { toggled: initToggled, onChange, variant } = props;
  const [toggled, setToggled] = useState(initToggled);

  const handleChange = useCallback(() => {
    setToggled((t) => !t);
    onChange && onChange();
  }, [onChange]);

  const id = useRef(Math.random() * 1_000_000_000);

  return (
    <div className="switch-container">
      <input
        checked={toggled}
        onChange={handleChange}
        className="switch-checkbox"
        id={`switch-${id.current}`}
        type="checkbox"
      />
      <label
        className={clsx(
          "switch-label",
          toggled ? variantColor[variant] : "bg-slate-200",
        )}
        htmlFor={`switch-${id.current}`}
      >
        <span className={`switch-button`} />
      </label>
    </div>
  );
};

export default Switch;
