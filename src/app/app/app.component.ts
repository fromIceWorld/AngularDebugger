import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myContext = { $implicit: "World", localSk: "Svet" };
  title = "debugger";
  handleEvent($event) {
    console.log($event);
  }
}
