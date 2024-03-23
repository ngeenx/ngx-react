import { Component, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { ReactComponentDirective } from "../../../../projects/ngx-react/src/public-api"
import App from "./react/App"

@Component({
  selector: "app-two-way-update",
  templateUrl: "./two-way-update.component.html",
  styleUrls: ["./two-way-update.component.scss"],
  standalone: true,
  imports: [ReactComponentDirective, FormsModule]
})
export class TwoWayUpdateComponent implements OnInit {
  public App: typeof App = App
  public props = {
    checkState: true,
    ngSetCheckState: (state: boolean) => this.ngSetCheckState(state)
  }

  constructor() {}

  ngOnInit() {
    this.ngSetCheckState = this.ngSetCheckState.bind(this)
  }

  private ngSetCheckState(state: boolean): void {
    this.props = {
      ...this.props,
      checkState: state
    }
  }
}
