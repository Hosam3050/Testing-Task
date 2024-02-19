import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('counter component: ', () => {
 let component: CounterComponent;
 let fixture: ComponentFixture<CounterComponent>;
  beforeEach(() => {
   TestBed.configureTestingModule({
     declarations:[
      CounterComponent
     ]
   })
   fixture = TestBed.createComponent(CounterComponent);
   component = fixture.componentInstance;
   fixture.detectChanges()
  });

  it('test initial value of counter',()=>{
    expect(component.counter).toEqual(0)
  })

  //testing layout

  it('test that be have 0 at first',()=>{
   let p= fixture.debugElement.query(By.css("p"))
   expect(p.nativeElement.textContent).toBe('0')
  })
  it('Test effect of click increase button on counter',()=>{
    let incrBtn=fixture.debugElement.query(By.css('#inc'))
    incrBtn.triggerEventHandler('click')
    fixture.detectChanges()
    let p= fixture.debugElement.query(By.css("p"))
   expect(p.nativeElement.textContent).toBe('1')
  })
  
  it('Test effect of click decrse button on counter',()=>{
    let decrseBtn=fixture.debugElement.query(By.css('#dec'))
    decrseBtn.triggerEventHandler('click')
    fixture.detectChanges()
    let p= fixture.debugElement.query(By.css("p"))
   expect(p.nativeElement.textContent).toBe('-1')
  })

 
});
