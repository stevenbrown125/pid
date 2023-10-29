import { Switch } from "@headlessui/react";
import { ActionKind } from "../../lib/types/IAction";

interface PrivacyCheckboxProps {
  hasConsented: boolean;
  setRMA: Function;
  errors: { hasConsented?: string | undefined | null };
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({
  hasConsented,
  setRMA,
  errors,
}) => {
  return (
    <div className="relative flex pb-6 font-medium text-gray-700">
      <p className="order-2 pl-2 text-sm font-normal text-gray-500">
        By checking this box you acknowledge that you have read and accepted our{" "}
        <a
          href="/privacy-policy"
          className="text-red-600 underline hover:text-red-800"
          target="_blank"
        >
          Privacy Policy
        </a>
        .
      </p>
      <div className="flex items-center h-5 ml-3">
        <Switch
          id="privacy"
          aria-describedby="privacy"
          name="privacy"
          checked={hasConsented}
          onChange={(e: boolean) =>
            setRMA({
              type: ActionKind.ToggleConsent,
              field: "hasConsent",
              payload: e,
            })
          }
          className={`${
            hasConsented ? "bg-red-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <label htmlFor="privacy" className="sr-only">
            Toggle Consent
          </label>
          <span
            className={`${
              hasConsented ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>
      </div>
      {errors.hasConsented && (
        <span className="absolute pl-1 text-red-600 -bottom-3">
          {errors.hasConsented}
        </span>
      )}
    </div>
  );
};

export default PrivacyCheckbox;
