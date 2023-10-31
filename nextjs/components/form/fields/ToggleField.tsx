import { Switch } from "@headlessui/react";

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: Function;
  errors?: { [key: string]: string | undefined | null };
  id: string;
  name: string;
  description: string;
  activeColor?: string;
}

const ToggleField: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onToggle,
  id,
  name,
  description,
  errors,
  activeColor = "bg-red-600",
}) => {
  return (
    <div className="relative flex items-center justify-start font-medium text-neutral-700 ">
      <p className="order-2 pl-2 text-sm font-normal text-neutral-500">
        {description}
      </p>
      <div className="flex items-center h-5 ml-3 w-min">
        <Switch
          id={id}
          aria-describedby={description}
          name={name}
          checked={isChecked}
          onChange={(e: boolean) => onToggle(e)}
          className={`${
            isChecked ? activeColor : "bg-neutral-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <label htmlFor={id} className="sr-only">
            {description}
          </label>
          <span
            className={`${
              isChecked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>
      </div>
      {errors && errors[id] && (
        <span className="absolute pl-1 text-red-600 -bottom-3">
          {errors[id]}
        </span>
      )}
    </div>
  );
};

export default ToggleField;
