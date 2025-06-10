import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  // input
  //main title of title componenet 
  // all these inouts to be used inside the title.html
  @Input()
  title!: string;

  @Input()
  margin? = '1rem 0 1rem 0.2rem';

  @Input()
  fontSize? = '1.7rem';


}
