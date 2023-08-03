import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import Icon from "@ui/icon";

interface MenuButtonProps extends ComponentPropsWithoutRef<"button"> {
  toggled: boolean;
}

const MenuButton = (props: MenuButtonProps) => {
  const { onClick, toggled, className } = props;
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "relative flex h-[64px] w-[64px] items-center justify-center rounded-[50%] rounded-tr-none bg-light-brand text-light-brand-inverted",
      )}
    >
      <Icon
        name="menuLine"
        size={36}
        className={clsx(
          "absolute inset-0 m-auto transition-all duration-300",
          toggled ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
        )}
      />
      <Icon
        name="closeLine"
        size={36}
        className={clsx(
          "absolute inset-0 m-auto transition-all duration-300",
          !toggled ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
        )}
      />
    </button>
  );
};

export default MenuButton;
