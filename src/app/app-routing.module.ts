import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueCertificateComponent } from './issue-certificate/issue-certificate.component';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/issue-certificate',pathMatch:'full'
  },
  {
    path:'issue-certificate',
    component: IssueCertificateComponent
  },
  {
    path:'verify-certificate',
    component: VerifyCertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
