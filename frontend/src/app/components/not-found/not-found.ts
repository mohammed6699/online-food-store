import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
  @Input()
  visible=false
  @Input()
  notFoundImage='NotFound.jpg'
  @Input()
  NotFoundmessage = "Nothing Found!"
  @Input()
  resetLinkText = 'reset'
  @Input()
  resetLinkRoute = '/'
}
