/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { DebugElement } from "@angular/core"

import { AntdesignExamplesComponent } from "./antdesign-examples.component"

describe("AntdesignExamplesComponent", () => {
  let component: AntdesignExamplesComponent
  let fixture: ComponentFixture<AntdesignExamplesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AntdesignExamplesComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdesignExamplesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
