import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { SimpleComponentComponent } from "./examples/simple-component/simple-component.component"
import { AntdesignExamplesComponent } from "./examples/antdesign-examples/antdesign-examples.component"
import { TwoWayUpdateComponent } from "./examples/two-way-update/two-way-update.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    SimpleComponentComponent,
    AntdesignExamplesComponent,
    TwoWayUpdateComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = "ngx-react-app"
}
