import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbardemo',
  templateUrl: './snackbardemo.component.html',
  styleUrls: ['./snackbardemo.component.scss']
})
export class SnackbardemoComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  click1() {
    const snackBarRef = this.snackBar.open('Evil was unleashed', 'Undo', {duration: 3000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Dismissed!');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('Action Triggered');
    });
  }

  click2() {
    this.snackBar.openFromComponent(ImbaSnackbarComponent, {duration: 5000});
  }

}

@Component({
  selector: 'app-custom-snackbar',
  template: '<span style="color: pink">A Custom Snackbar Bitches!!!</span>'
})
export class ImbaSnackbarComponent {}
