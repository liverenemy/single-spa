import Event from "../../../root-config/src/events/Event";

export const REACT_CLICK_EVENT: string = "ReactClickEvent";

export default class ReactClickEvent extends Event {
  readonly name: string = REACT_CLICK_EVENT;

  constructor(params: number) {
    super(params);
  }
}
