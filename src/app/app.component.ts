import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `

    <div>
      HELLO WORLD
    </div>
    <router-outlet></router-outlet>

`,

  styles: [`
    * {
      font-family: 'Rubik';
    },

`]
})
export class AppComponent {
  title = 'Maxwell';
}
