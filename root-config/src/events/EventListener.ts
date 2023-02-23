export type EventListenerCallbackType = (params: any) => any;

export default class EventListener {
  constructor(
    readonly eventName: string,
    readonly callback: EventListenerCallbackType
  ) {}
}
