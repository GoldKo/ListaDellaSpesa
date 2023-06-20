import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-amount-button',
  templateUrl: './amount-button.component.html',
  styleUrls: ['./amount-button.component.scss']
})
export class AmountButtonComponent {
  clicked = false;

  @Input() amount: number = 1

  onClick() {
    this.clicked = !this.clicked;
    this.onClickEvent.emit(this.clicked);
  }

  @Output() onClickEvent = new EventEmitter<boolean>();
  @Output() incDecClickedEvent = new EventEmitter<number>();


  incDecClick(increment: boolean) {
    if (!increment)
      if (this.amount == 1)
        return
      else
        this.incDecClickedEvent.emit(--this.amount);
    else
      this.incDecClickedEvent.emit(++this.amount);
  }

}
