import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  //Change checkout button text when clicked
  checkout() {
    const checkBtn = document.querySelector('#btnCheck') as HTMLDivElement;
    const cartIcon = document.querySelector('#cartIcon') as HTMLDivElement;

    checkBtn.style.backgroundColor = '#1976d2';
    cartIcon.style.color = 'white';
    //cartIcon.style.marginRight = '1000px';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
