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

    //Animation

    checkBtn.style.width = '40px';
    cartIcon.style.marginLeft = '-70%';
  }

  //Home button click
  home() {
    const homeLogo = document.querySelector('#home') as HTMLDivElement;
    const checkBtn = document.querySelector('#btnCheck') as HTMLDivElement;
    const cartIcon = document.querySelector('#cartIcon') as HTMLDivElement;

    checkBtn.style.width = 'initial';
    cartIcon.style.marginLeft = 'initial';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
