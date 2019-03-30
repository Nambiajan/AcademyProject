import { Component } from '@angular/core';

@Component({
  template: `<h2>Cognizant Book Mart</h2>
   <p>Find article <a routerLink="list" routerLinkActive="active">list</a></p>
	<div [ngClass] = "'child-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `
})
export class ArticleComponent { 
}
    