import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ReactComponentDirective } from "../../../../projects/ngx-react/src/public-api"
import ReactApp from "./react/ReactApp"

@Component({
  selector: "app-simple-component",
  templateUrl: "./simple-component.component.html",
  styleUrls: ["./simple-component.component.scss"],
  standalone: true,
  imports: [ReactComponentDirective, CommonModule]
})
export class SimpleComponentComponent implements OnInit {
  public ReactApp: typeof ReactApp = ReactApp
  public props = {
    someValue: 2024,
    initialInputValue: "Some Value",
    ngHandleChange: (event: any) => {
      this.props.initialInputValue = event.target.value
    }
  }

  constructor() {}

  ngOnInit() {}
}
