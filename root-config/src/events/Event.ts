export const BASIC_EVENT_NAME: string = "Event";

export default class Event {
  readonly name: string = BASIC_EVENT_NAME;
  constructor(readonly params: any) {}
}
