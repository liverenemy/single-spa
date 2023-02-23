import Event from "./Event";
import EventListener, { EventListenerCallbackType } from "./EventListener";

class EventManager {
  constructor(protected listeners: EventListener[] = []) {}

  on(eventName: string, callback: EventListenerCallbackType): void {
    const listener = new EventListener(eventName, callback);
    this.listeners.push(listener);
  }

  trigger(event: Event): void {
    this.listeners.forEach((listener: EventListener) => {
      if (listener.eventName === event.name) {
        listener.callback(event.params);
      }
    });
  }
}

let eventManager: EventManager;

// @ts-ignore
eventManager = window.eventManager || new EventManager();

// @ts-ignore
window.eventManager = eventManager;

export default eventManager;
