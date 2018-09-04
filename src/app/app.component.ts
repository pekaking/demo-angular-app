import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Petar\'s demo Angular application';

  ngOnInit() {
    setTimeout(() => {
      const titleContainer = document.getElementById('app-title');
      titleContainer.style.background = 'black';
      titleContainer.style.color = 'white';
    }, 3500);
  }
}
