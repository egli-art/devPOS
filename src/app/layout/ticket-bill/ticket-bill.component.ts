import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'ticke-bill',
  templateUrl: './ticket-bill.component.html',
  styleUrls: ['./ticket-bill.component.scss']
})
export class TicketBillComponent {

  protected readonly close = close;

  data =

    {
      "nuis": "L01511027P",
      "businessName": "Comunical",
      "categories": [
        {
          "id": 29,
          "name": "Mish&Peshk",
          "products": [
            {
              "name": "Mix Mishrash",
              "unitPrice": 1100
            },
            {
              "name": "Tave peshku",
              "unitPrice": 1000
            },
            {
              "name": "Merluc",
              "unitPrice": 900
            },
            {
              "name": "Koce",
              "unitPrice": 800
            },
            {
              "name": "Mish qingji",
              "unitPrice": 950
            },
            {
              "name": "Mish vici",
              "unitPrice": 750
            },
            {
              "name": "Daily saltwater fish selection",
              "unitPrice": 2600
            },
            {
              "name": "Grilled salmon fillet",
              "unitPrice": 1350
            },
            {
              "name": "Pan Fried Prawns",
              "unitPrice": 1450
            },
            {
              "name": "Selection of Albanian Fish",
              "unitPrice": 1650
            },

          ]
        }
      ]

    }

  constructor(
    public dialogRef: MatDialogRef<TicketBillComponent>,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
