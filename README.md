# ngx-react

This simple Angular library integrates React components into Angular applications with ease. It is based on React [createElement](https://react.dev/reference/react/createElement) function and Angular [directives](https://angular.io/guide/attribute-directives) (as [standalone components](https://angular.io/guide/standalone-component)). See source code [here](./projects/ngx-react/src/lib/directives/react-component.directive.ts).


## 📦 Installation

Please install with peer dependencies `react` and `react-dom` using your favorite package manager.

PNPM

```bash
pnpm i react react-dom @ngeenx/ngx-react
```

NPM

```bash
npm i react react-dom @ngeenx/ngx-react
```

## 🚀 Usage

### 1. Import React Directive

Import `ReactComponentDirective` in your standalone component or module.

```typescript
import { ReactComponentDirective } from '@ngeenx/ngx-react';

@NgModule({
  imports: [
    ...
    ReactComponentDirective
  ]
})
```

### 2. Create React Component

Create a wrapper component for your React component. We will use this component to pass props to the React component.

```typescript
// ReactApp.tsx

import React, { FC, useState } from 'react';

const ReactApp: FC<any> = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="myInput">Label:</label>

      <input
        type="text"
        id="myInput"
        value={inputValue}
        onChange={handleChange}
      />

      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default ReactApp;
```

### Basic Usage

```typescript
// app.component.ts

import { Component, NgModule } from '@angular/core';
import ReactApp from './ReactApp';

@Component({
  selector: "app-component",
  template: `<div
    [reactComponent]="ReactApp"
    [props]="props"
  ></div>`,
  standalone: true,
  imports: [ReactComponentDirective],
})
export class StandaloneComponent {
  public ReactApp: typeof ReactApp = ReactApp;
  public props: any = {}
}
```
