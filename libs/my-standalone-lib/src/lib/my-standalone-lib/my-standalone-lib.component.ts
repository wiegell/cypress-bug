import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-standalone-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-standalone-lib.component.html',
  styleUrls: ['./my-standalone-lib.component.css'],
})
export class MyStandaloneLibComponent {}
