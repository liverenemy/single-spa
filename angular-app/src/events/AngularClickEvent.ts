import Event from "../../../root-config/src/events/Event";

export const ANGULAR_CLICK_EVENT = 'AngularClickEvent';

export default class AngularClickEvent extends Event {
  readonly name: string = ANGULAR_CLICK_EVENT;

  constructor(readonly params: number) {
    super(params);
  }
}
