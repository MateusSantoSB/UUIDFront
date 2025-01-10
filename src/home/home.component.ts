import { Component } from '@angular/core';
import { ServiceGenerateUUIDService } from '../servico/service-generate-uuid.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor (private service:ServiceGenerateUUIDService){

  }
uuid:Generator;
generateUUID(){
  this.service.generate().subscribe((resp:any)=>{

      this.uuid=resp.id;
      
      console.log(this.uuid)

  },error=>{
    console.log("Erro ao gerar UUID",error)
  })


  

}  



}

