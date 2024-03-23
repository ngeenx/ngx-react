import { copy } from "fs-extra"

copy("./README.md", "./dist/ngx-react/README.md", (err) => {
  if (err) return console.error(err)
})

copy("./license", "./dist/ngx-react/LICENSE", (err) => {
  if (err) return console.error(err)
})
