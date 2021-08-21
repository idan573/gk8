import { ILiteHandler, LiteEvents } from "../../utils/liteEvents";

export enum ToastType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface IToastOptions {
  text: string;
  type: ToastType;
  className: string;
  persist: boolean;
  onClick: () => void;
  action: {
    title: string;
    onClick: () => void;
    dismissOnClick?: boolean;
  };
}

class ToasterService {
  private eventsEmitter = new LiteEvents<Partial<IToastOptions>>();

  public showToast(options: Partial<IToastOptions>) {
    this.eventsEmitter.trigger(options);
  }

  public on(callback: ILiteHandler<Partial<IToastOptions>>) {
    this.eventsEmitter.on(callback);
  }

  public off(callback: ILiteHandler<Partial<IToastOptions>>) {
    this.eventsEmitter.off(callback);
  }
}

export const toasterService = new ToasterService();

export function showToast(options: Partial<IToastOptions>) {
  toasterService.showToast(options);
}
