import { Component, OnInit } from "@angular/core"
import { ReactComponentDirective } from "../../../../projects/ngx-react/src/public-api"
import App from "./react/App"

@Component({
  selector: "app-antdesign-examples",
  templateUrl: "./antdesign-examples.component.html",
  styleUrls: ["./antdesign-examples.component.scss"],
  standalone: true,
  imports: [ReactComponentDirective]
})
export class AntdesignExamplesComponent implements OnInit {
  public App: typeof App = App

  constructor() {}

  ngOnInit() {}
}
