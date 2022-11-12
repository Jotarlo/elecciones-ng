import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveElectionComponent } from './remove-election.component';

describe('RemoveElectionComponent', () => {
  let component: RemoveElectionComponent;
  let fixture: ComponentFixture<RemoveElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveElectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
