import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
