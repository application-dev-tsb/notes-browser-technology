import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogContentComponent} from './dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialogdemo',
  templateUrl: './dialogdemo.component.html',
  styleUrls: ['./dialogdemo.component.scss']
})
export class DialogdemoComponent implements OnInit {

  lastLog = 'None';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      // width: '700px',
      // height: '350px',
      data: {
        name: 'Test Name'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.lastLog = `Result: ${result}`;
    });
  }

}
