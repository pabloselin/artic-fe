import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public label!: string;
  @Input() public icon: IconDefinition | null = null;
  @Input() public isActive: boolean = false;
  @Input() public isDisabled: boolean = false;
  @Output() public action: EventEmitter<void> = new EventEmitter<void>();

  public onClick(): void {
    if (this.isDisabled) return;
    this.action.emit();
  }
}
