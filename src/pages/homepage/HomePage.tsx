import React from "react";
import { HttpClient } from "../../services/httpClient/httpClient";
import { showToast, ToastType } from "../../services/toaster/toaster";
import { validateEthAddress } from "../../utils/validateAddress";
import { InputForm } from "./components/InputForm/InputForm";
import { TxGrid } from "./components/TxGrid/TxGrid";
import { TxRow } from "./models";

const HomePage: React.FC = () => {
  const [address, setAddress] = React.useState<string>("");
  const [isVerified, setIsVerified] = React.useState<boolean>(false);

  const onSubmit = React.useCallback((address: string) => {
    setAddress(address);
    const isVerified = validateEthAddress(address);

    if (!isVerified) {
      showToast({
        type: ToastType.ERROR,
        text: `Invalid Ethreum Address!!`,
      });
      return;
    }

    setIsVerified(isVerified);
  }, []);

  return (
    <>
      <InputForm
        onSubmit={onSubmit}
        isAddressChanged={() => {
          setIsVerified(false);
        }}
      />
      <TxGrid address={isVerified ? address : ""} />
    </>
  );
};

export default HomePage;
