import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittlecartComponent } from './littlecart.component';

describe('LittlecartComponent', () => {
  let component: LittlecartComponent;
  let fixture: ComponentFixture<LittlecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LittlecartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LittlecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
