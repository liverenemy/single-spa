import { Component, NgZone } from '@angular/core';
import eventManager from "../../../root-config/src/events/EventManager";
import {BASIC_EVENT_NAME} from "../../../root-config/src/events/Event";
import AngularClickEvent, {ANGULAR_CLICK_EVENT} from "../events/AngularClickEvent";
import ReactClickEvent, {REACT_CLICK_EVENT} from "../../../react-app/src/events/ReactClickEvent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  clickTimes: number = 0;
  reactAppClickTimes: number = 0;

  constructor(private ngZone: NgZone) {
    eventManager.on(ANGULAR_CLICK_EVENT, (clickTimes: number) => {
      this.clickTimes = clickTimes;
    });
    eventManager.on(REACT_CLICK_EVENT, (clickTimes: number) => {
      this.reactButtonClick(clickTimes);
    });
  }

  buttonClick() {
    eventManager.trigger(new AngularClickEvent(++this.clickTimes));
  }

  reactButtonClick(clickTimes: number) {
    this.ngZone.run(() => {
      this.reactAppClickTimes = clickTimes;
    });
  }
}

