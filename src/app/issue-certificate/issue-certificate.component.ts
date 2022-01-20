import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-issue-certificate',
  templateUrl: './issue-certificate.component.html',
  styleUrls: ['./issue-certificate.component.css']
})
export class IssueCertificateComponent implements OnInit {

  public issueCertificateForm!: FormGroup;
  responseData: any;
  issueFormDetails:any;
  message:any;
  id:any;
  

  constructor(private fb: FormBuilder, private certificateService:CertificateService) { }

  ngOnInit(): void {
    this.issueCertificateForm= this.fb.group({
      course:['',Validators.required],
      owner:['',Validators.required],
      score:['',Validators.required],


    })
  }
  submitIssueForm(){
    console.log(this.issueCertificateForm.value);
    this.certificateService.sendIssueCertificateForm(this.issueCertificateForm.value).subscribe((res)=>{
      console.log(res);
      this.responseData=res;
      console.log(this.responseData.data.ID);
      this.message= this.responseData.msgs;
      this.id= this.responseData.data.ID;


    })

  }

}
