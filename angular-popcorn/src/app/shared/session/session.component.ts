import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {

    //Crear el SessionId y setearlo. 
    //this.authService.createSessionId()

    this.authService.createSessionId().subscribe(

      //TODO Solucionar por qué no settea el nuevo ID
      sessionId => this.authService.setSessionId(sessionId.session_id)
    )
   
    
  }


}
