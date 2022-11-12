import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CreateCandidateComponent } from './candidates/create-candidate/create-candidate.component';
import { EditCandidateComponent } from './candidates/edit-candidate/edit-candidate.component';
import { ListCandidateComponent } from './candidates/list-candidate/list-candidate.component';
import { RemoveCandidateComponent } from './candidates/remove-candidate/remove-candidate.component';
import { CreateElectionComponent } from './election/create-election/create-election.component';
import { EditElectionComponent } from './election/edit-election/edit-election.component';
import { ListElectionComponent } from './election/list-election/list-election.component';
import { RemoveElectionComponent } from './election/remove-election/remove-election.component';
import { CreatePartyComponent } from './party/create-party/create-party.component';
import { EditPartyComponent } from './party/edit-party/edit-party.component';
import { ListPartyComponent } from './party/list-party/list-party.component';
import { RemovePartyComponent } from './party/remove-party/remove-party.component';

const routes: Routes = [
  {
    path:'create-election',
    component:CreateElectionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-election',
    component:EditElectionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-election',
    component:RemoveElectionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-election',
    component:ListElectionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-candidate',
    component:CreateCandidateComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-candidate',
    component:EditCandidateComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-candidate',
    component:RemoveCandidateComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-candidates',
    component:ListCandidateComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'create-party',
    component:CreatePartyComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'edit-party/:id',
    component:EditPartyComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'remove-party/:id',
    component:RemovePartyComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:'list-parties',
    component:ListPartyComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
