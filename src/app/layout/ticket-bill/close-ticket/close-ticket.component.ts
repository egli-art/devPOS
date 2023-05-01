import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'close-ticket',
  templateUrl: './close-ticket.component.html',
  styleUrls: ['./close-ticket.component.scss']
})
export class CloseTicketComponent {


  constructor(
    public dialogRef: MatDialogRef<CloseTicketComponent>,
    private dialog: MatDialog

  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
