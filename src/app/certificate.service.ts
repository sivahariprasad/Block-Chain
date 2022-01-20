import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http : HttpClient) { }

 sendIssueCertificateForm(data:any){
   return this.http.post('https://dev.edinspire.uk/student-information-system/api/block-chain/issue-certificate',data);
 }

getVerifyCertificate(id:any){
  return this.http.get('https://dev.edinspire.uk/student-information-system/api/block-chain/verify-certificate/' + id, { responseType: 'arraybuffer'} );
}


}
