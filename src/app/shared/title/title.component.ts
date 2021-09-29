import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gr-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
