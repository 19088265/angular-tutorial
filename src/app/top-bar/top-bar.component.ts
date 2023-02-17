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

    //checkBtn.style.transitionProperty = 'width, borderRadius';
    //checkBtn.style.transitionDuration = '1000ms';
    //checkBtn.style.transitionTimingFunction = 'ease';

    checkBtn.style.width = '40px';
    checkBtn.style.borderRadius = '50px';
    cartIcon.style.marginLeft = '-70%';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
