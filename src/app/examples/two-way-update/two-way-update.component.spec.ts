/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { DebugElement } from "@angular/core"

import { TwoWayUpdateComponent } from "./two-way-update.component"

describe("TwoWayUpdateComponent", () => {
  let component: TwoWayUpdateComponent
  let fixture: ComponentFixture<TwoWayUpdateComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayUpdateComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayUpdateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
