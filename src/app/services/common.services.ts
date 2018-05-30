import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';

@Injectable()
export class CommonService {

  // constructor(private restClient: RestClientService) { }

  // getIdTypeList(){
  //   return this.restClient.get('idTypes');
  // }
  // getConcCodeList(){
  //   return this.restClient.get('concCodeList');
  // }
  // getVoucherCodeList(){
  //   return this.restClient.get('vchCodeList');
  // }
  // getZoneCodeList(){
  //    return this.restClient.get('zoneCodeList');
  // }

  lfConcCode : string;

  setConcCode(event) {
    console.log(event.value);
  }

}
