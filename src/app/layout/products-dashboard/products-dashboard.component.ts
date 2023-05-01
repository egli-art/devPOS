import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketBillComponent} from "../ticket-bill/ticket-bill.component";
@Component({
  selector: 'products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss'],
})
export class ProductsDashboardComponent implements OnInit{
  selectedSquareValue: number | any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(TicketBillComponent, {
      width: '390px',
      height: '465px',
      panelClass: 'my-dialog',
      data: ''
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();

    });

  }



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


  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  protected readonly Object = Object;
}
