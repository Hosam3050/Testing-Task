import {ComponentFixture, TestBed} from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { By } from "@angular/platform-browser"
describe("hero component:", () => {
    let fixture: ComponentFixture<HeroComponent>,component: HeroComponent
    beforeEach(/* async */()=>{
     /*  await  */ TestBed.configureTestingModule({
            declarations:[HeroComponent]
        })/* .compileComponents() */

        fixture= TestBed.createComponent(HeroComponent)
       component= fixture.componentInstance
    })
    it("expect component to be created ",()=>{
       expect(component).toBeTruthy()
    })
  
})