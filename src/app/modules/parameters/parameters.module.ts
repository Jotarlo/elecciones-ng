import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CreateElectionComponent } from './election/create-election/create-election.component';
import { EditElectionComponent } from './election/edit-election/edit-election.component';
import { RemoveElectionComponent } from './election/remove-election/remove-election.component';
import { ListElectionComponent } from './election/list-election/list-election.component';
import { ListCandidateComponent } from './candidates/list-candidate/list-candidate.component';
import { CreateCandidateComponent } from './candidates/create-candidate/create-candidate.component';
import { EditCandidateComponent } from './candidates/edit-candidate/edit-candidate.component';
import { RemoveCandidateComponent } from './candidates/remove-candidate/remove-candidate.component';
import { CreatePartyComponent } from './party/create-party/create-party.component';
import { EditPartyComponent } from './party/edit-party/edit-party.component';
import { ListPartyComponent } from './party/list-party/list-party.component';
import { RemovePartyComponent } from './party/remove-party/remove-party.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateElectionComponent,
    EditElectionComponent,
    RemoveElectionComponent,
    ListElectionComponent,
    ListCandidateComponent,
    CreateCandidateComponent,
    EditCandidateComponent,
    RemoveCandidateComponent,
    CreatePartyComponent,
    EditPartyComponent,
    ListPartyComponent,
    RemovePartyComponent,
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametersModule { }
