import React from "react";
import { HttpClient } from "../../services/httpClient/httpClient";
import { showToast, ToastType } from "../../services/toaster/toaster";
import { validateEthAddress } from "../../utils/validateAddress";
import { InputForm } from "./components/InputForm/InputForm";
import { TxGrid } from "./components/TxGrid/TxGrid";
import { TxRow } from "./models";

const HomePage: React.FC = () => {
  const etherscanUrl =
    "https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=2VJZPCY15M514YR5H7M7ZYWCVK4KQ4SD7N";

  const httpClient = new HttpClient();

  const fetchUrl = async () => {
    const response = await httpClient.get(etherscanUrl);

    console.log(response?.result);
  };

  const [address, setAddress] = React.useState<string>("");
  const [isVerified, setIsVerified] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchUrl();
  }, []);

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
