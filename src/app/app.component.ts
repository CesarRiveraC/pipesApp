import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    name: string = 'Cesar Rivera';
    value: string = "24";
    obj = {
        nombre: 'Cesar'
    };

    showName(){
        console.log(this.name);
    }
}
