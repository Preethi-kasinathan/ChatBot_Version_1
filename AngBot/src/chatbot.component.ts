import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private api:ChatbotService) { }
  answer=[];
  data:any=[];
  ngOnInit(): void {
  }


  massage(massage:any)
  {
    this.data=massage.split(' ');
    console.log(this.data);
    (<HTMLInputElement>document.getElementById("form__input")).value=''
    if(massage==''){
      alert("Please Enter the Question")
    }
    this.api.getMassage()
    .subscribe(data => {
      console.log(data)
      this.answer=data;
       this.answer.forEach(e=>{
        if(e.question==massage)
         {
           var userinput=document.createElement('div');
           userinput.innerHTML=massage;
           userinput.className="chatarea-inner user"
           document.getElementById('massage').appendChild(userinput);
         
           var answer=document.createElement('div');
           answer.innerHTML=e.answer;
           answer.className="chatarea-inner chatbot"
           document.getElementById('massage').appendChild(answer);
         }
       })
    }, error => console.log(error));
  
  }
 

}
