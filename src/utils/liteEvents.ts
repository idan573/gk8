export interface ILiteEvent<T> {
  on(handler: (data?: T) => void): void;
  off(handler: (data?: T) => void): void;
}

export type ILiteHandler<T> = (data?: T) => void;

export class LiteEvents<T> implements ILiteEvent<T> {
  private handlers: Array<ILiteHandler<T>> = [];

  public on(handler: ILiteHandler<T>): void {
    this.handlers.push(handler);
  }

  public off(handler: ILiteHandler<T>): void {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  public trigger(data?: T) {
    this.handlers.slice(0).forEach((h) => h(data));
  }

  public expose(): ILiteEvent<T> {
    return this;
  }
}
