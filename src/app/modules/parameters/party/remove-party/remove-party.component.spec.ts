import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePartyComponent } from './remove-party.component';

describe('RemovePartyComponent', () => {
  let component: RemovePartyComponent;
  let fixture: ComponentFixture<RemovePartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
