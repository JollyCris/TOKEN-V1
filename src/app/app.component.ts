import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from './services/common.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lost - Found ID Management';
  subtitle ='Report Loss';
  subtitle1;
  lfConcCode:string;
  idType:string;
  operationId:string;
  seriesYes:string;
  dispConcCode=false;
  lfForm : FormGroup;
  lfZone:string;
  seriesStart = 'Serial Number';


  IDTypes= [ {value:'Metal Token',viewValue:'Metal Token'},
            {value:'Passes'     ,viewValue:'Passes'},
            {value:'Bpt'     ,viewValue:'Bpt'},
            {value:'Eft'     ,viewValue:'Eft'},
            {value:'Vouchers'     ,viewValue:'Vouchers'},
            {value:'Ticket Rolls' ,viewValue:'Ticket Rolls'}
          ];
  concCodes=[
    {value:'GOPASS',viewValue:'GOPASS'},
    {value:'SVPASS',viewValue:'SVPASS'},
    {value:'BRPASS',viewValue:'BRPASS'},
    {value:'DTPASS',viewValue:'DTPASS'}
  ];

  vchCodes=[
    {value:'1707F',viewValue:'1707F'},
    {value:'1707R',viewValue:'1707R'},
    {value:'707FAM',viewValue:'707FAM'},
    {value:'707FMR',viewValue:'707FMR'},
    {value:'BSF',viewValue:'BSF'},
    {value:'CRPF',viewValue:'CRPF'},
    {value:'CSTCSS',viewValue:'CSTCSS'},
    {value:'HORFRM',viewValue:'HORFRM'},
    {value:'I1714 ',viewValue:'I1714 '},
    {value:'I1953 ',viewValue:'I1953 '},
    {value:'I1954 ',viewValue:'I1954 '},
    {value:'INF03 ',viewValue:'INF03 '},
    {value:'INF461',viewValue:'INF461'},
    {value:'POLICE',viewValue:'POLICE'},
    {value:'WCORDF',viewValue:'WCORDF'},
    {value:'WCORDR',viewValue:'WCORDR'},
    {value:'WGREFF',viewValue:'WGREFF'},
    {value:'WGREFR',viewValue:'WGREFR'},
    {value:'WJCODF',viewValue:'WJCODF'},
    {value:'WJCODR',viewValue:'WJCODR'},
    {value:'WNCODF',viewValue:'WNCODF'},
    {value:'WNCODR',viewValue:'WNCODR'},
    {value:'WOFFDF',viewValue:'WOFFDF'},
    {value:'WOFFDR',viewValue:'WOFFDR'},
    {value:'WOFFLF',viewValue:'WOFFLF'},
    {value:'WOFFLR',viewValue:'WOFFLR'},
    {value:'DELCD1',viewValue:'DELCD1'},
    {value:'DELCD2',viewValue:'DELCD2'},
    {value:'I1709A',viewValue:'I1709A'},
    {value:'I1719 ',viewValue:'I1719 '},
    {value:'I1720U',viewValue:'I1720U'},
    {value:'I1728 ',viewValue:'I1728 '},
    {value:'I1732 ',viewValue:'I1732 '},
    {value:'I1736U',viewValue:'I1736U'},
    {value:'I1760 ',viewValue:'I1760 '},
    {value:'I1761 ',viewValue:'I1761 '},
    {value:'YMMUD1',viewValue:'YMMUD1'},
    {value:'YMMUD2',viewValue:'YMMUD2'},
    {value:'YMMUD3',viewValue:'YMMUD3'},
    {value:'YMMUD4',viewValue:'YMMUD4'},
    {value:'YMMUD5',viewValue:'YMMUD5'},
    {value:'YMMUD6',viewValue:'YMMUD6'},
    {value:'YMMUD7',viewValue:'YMMUD7'},
    {value:'YMMUD8',viewValue:'YMMUD8'},
    {value:'YMMUD9',viewValue:'YMMUD9'},
    {value:'YMMUD ',viewValue:'YMMUD '}
  ];
  
  zoneList = [
        {value:'INDIAN RAILWAYS',viewValue:'INDIAN RAILWAYS'},
        {value:'KONKAN RAILWAY',viewValue:'KONKAN RAILWAY'},
        {value:'CENTRAL RAILWAY',viewValue:'CENTRAL RAILWAY'},
        {value:'EASTERN RAILWAY',viewValue:'EASTERN RAILWAY'},
        {value:'NORTHERN RAILWAY',viewValue:'NORTHERN RAILWAY'},
        {value:'NORTH EAST RAILWAY',viewValue:'NORTH EAST RAILWAY'},
        {value:'NORTH FRONT RAILWAY',viewValue:'NORTH FRONT RAILWAY'},
        {value:'SOUTHERN RAILWAY',viewValue:'SOUTHERN RAILWAY'},
        {value:'SOUTH EASTERN RAILWAY',viewValue:'SOUTH EASTERN RAILWAY'},
        {value:'WESTERN RAILWAY',viewValue:'WESTERN RAILWAY'},
        {value:'SOUTH CENTRAL RAILWAY',viewValue:'SOUTH CENTRAL RAILWAY'},
        {value:'EAST CENTRAL RAILWAY',viewValue:'EAST CENTRAL RAILWAY'},
        {value:'NORTH WESTERN RAILWAY',viewValue:'NORTH WESTERN RAILWAY'},
        {value:'EAST COAST RAILWAY',viewValue:'EAST COAST RAILWAY'},
        {value:'NORTH CENTRAL RAILWAY',viewValue:'NORTH CENTRAL RAILWAY'},
        {value:'SOUTH EAST CENTRAL RAILWAY',viewValue:'SOUTH EAST CENTRAL RAILWAY'},
        {value:'SOUTH WEST RAILWAY',viewValue:'SOUTH WEST RAILWAY'},
        {value:'WEST CENTRAL RAILWAY',viewValue:'WEST CENTRAL RAILWAY'}
  ]

  constructor(private commonservice : CommonService,private fb:FormBuilder) {

    this.lfForm = fb.group({
        'idType' : '',
        'lfConcCode':'',
        'seriesYes':'',
        'lfZone':'',
        'lfVchBillNo':'',
        'seriesStart': '',
        'seriesEnd':'',
        'RefLtr':'',
        'IssuingAuthority':''
    });
  }
  concCodeSelection(event){
    
    //this.lfConcCode = event;
    
    //this.commonservice.setConcCode(event);

    // console.log(this.lfConcCode);
    // console.log("%s",this.lfConcCode);
   }      
   setIdType(event) {
    //  this.idType = event.value;
    //  console.log(this.idType);
    //  if(this.idType == "Metal Token" || this.idType == "Passes") {
    //     this.dispConcCode=true;
    //  }  
    //  else
    //     this.dispConcCode=false;

        this.lfConcCode = this.lfForm.value.lfConcCode='' ;
   }  

   seriesSelection(event) {
    // this.seriesYes = event.value;
    // console.log(this.seriesYes);
    if(this.seriesYes == '1')
      this.seriesStart = "Serial Number Start";
    else
      this.seriesStart = "Serial Number";   
  }  
  zoneChange(event) {

  }
   setOperation(event:any){
     this.operationId = event.value;
    //  console.log(event.value);
   }
  onSubmit() {}
  ngDoCheck() {
    // if(this.lfForm.value.idType != "Passes" && this.lfForm.value.idType != "Metal Tokens")
    // this.lfConcCode = this.lfForm.value.lfConcCode='' ;
    // console.log("------");
    // console.log(this.lfForm.value.idType);
    // console.log(this.lfForm.value.lfConcCode);
  }
}
