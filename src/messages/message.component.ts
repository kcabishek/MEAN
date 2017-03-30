import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Message} from "./message.model";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  @Input('input-message') message: Message;
  @Output() editClicked = new EventEmitter();

  onEdit(){
      this.editClicked.emit("An updated message");
  }
}