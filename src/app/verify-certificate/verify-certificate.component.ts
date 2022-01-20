import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-verify-certificate',
  templateUrl: './verify-certificate.component.html',
  styleUrls: ['./verify-certificate.component.css']
})
export class VerifyCertificateComponent implements OnInit {
  verifyForm!: FormGroup;

  constructor(private fb: FormBuilder, private certificateService:CertificateService) { }

  ngOnInit(): void {
    this.verifyForm= this.fb.group({
      pasteId:['', Validators.required]


    })
  }
  submitId(){
    console.log(this.verifyForm.value.pasteId);
    this.certificateService.getVerifyCertificate(this.verifyForm.value.pasteId).subscribe((res)=>{
      console.log(res);
      const file = new Blob([res], { type: 'application/pdf' });
        const anchor = document.createElement('a');
        const fileURL = window.URL.createObjectURL(file);
        anchor.href = fileURL;
        anchor.download = 'verify-certificate.pdf';
        anchor.click();
    })
  }

}
