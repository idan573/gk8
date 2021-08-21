import React from "react";
import { AppButton } from "../../../../components/AppButton/AppButton";
import { AppCard } from "../../../../components/AppCard/AppCard";
import { AppInput } from "../../../../components/AppInput/AppInput";
import "./InputForm.scss";

export interface InputFormProps {
  isAddressChanged: () => void;
  onSubmit: (address: string) => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  isAddressChanged,
  onSubmit,
}: InputFormProps) => {
  const [addressForm, setAddressForm] = React.useState<string>("");
  const onSubmitCallback = React.useCallback(() => {
    onSubmit(addressForm);
  }, [addressForm]);

  return (
    <div className="input-form">
      <AppCard className="address-card">
        <div className="card-content">
          <AppInput
            label={"Address"}
            onChange={(res) => {
              isAddressChanged();
              setAddressForm(res);
            }}
            value={addressForm}
            placeHolder={"Valid Ethereum address"}
          />
          <AppButton onClick={onSubmitCallback} size={"small"}>
            Submit
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};
