import { Component } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Daniel Albert';
  show = false;

  toggle() {
    this.show = this.show ? false : true

    return this.show;
  }
}
