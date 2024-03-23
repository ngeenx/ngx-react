import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { SimpleComponentComponent } from "./examples/simple-component/simple-component.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SimpleComponentComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = "ngx-react-app"
}
