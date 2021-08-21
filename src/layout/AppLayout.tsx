import React from "react";
import { IToastOptions, toasterService } from "../services/toaster/toaster";
import { AppBody } from "./components/AppBody/AppBody";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { useSnackbar } from "notistack";

const AppLayout: React.FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleShowToast = (options: IToastOptions) => {
    const {
      text,
      type: variant,
      className,
      persist,
      onClick,
      action: snackAction,
    } = options;

    const getActionLink = (key: string) => {
      const handleToastLinkClicked = () => {
        if (snackAction.dismissOnClick) {
          closeSnackbar(key);
        }

        snackAction.onClick();
      };

      return <div onClick={handleToastLinkClicked}>{snackAction.title}</div>;
    };

    enqueueSnackbar(text.toString(), {
      variant,
      className,
      persist,
      onClick,
      action: snackAction && getActionLink,
    });
  };

  React.useEffect(() => {
    //@ts-ignore
    toasterService.on(handleShowToast);

    return () => {
      //@ts-ignore
      toasterService.off(handleShowToast);
    };
  }, []);

  return (
    <>
      <AppHeader />
      <AppBody />
    </>
  );
};

export default AppLayout;
