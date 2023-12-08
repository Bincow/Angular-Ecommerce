import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import VanillaTilt from "vanilla-tilt";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-commerce';
}


const tiltElements:HTMLElement | null = document.querySelector(".card");

VanillaTilt.init(tiltElements!, {
  scale: 1.1,
  gyroscope: true,
  speed: 800,
  perspective: 1000,
});                 

tiltElements?.addEventListener("tiltChange", (event:any) => {
  debugger;
  let angle = parseInt(event.detail.tiltY, 10) + parseInt(event.detail.tiltX,10);
  tiltElements.style.setProperty("--angle", angle + "deg");
});