import { Component } from '@angular/core';

@Component({
  selector: 'HK-root',
  host: {'(window:keydwon)': 'HK($event)'},
  template: `
    <button (click)=showMessage()>Hotkey Test</button>
    
  `
})
export class AppComponent {
  // As you can see I’ve used the element host to add a listener to the window:keydown event,
  //  it will call the function hotkeys(event) every time this event occurs, all we have to do now on
  // this function is to determine which key was pressed and take actions accordingly.
  HK (event) {
    if ( event.KeyCode === 65 && event.ctrlKey ) {
      this.showMessage();
    }
  }
 // this is for showing us the message.
  showMessage() {
    alert('Alex Test');
}
}
