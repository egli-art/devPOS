import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketBillComponent} from "../../ticket-bill/ticket-bill.component";
@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent implements OnInit{
  selectedSquareValue: number | any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(TicketBillComponent, {
      width: '390px',
      height: '465px',
      panelClass: '.mat-dialog-container',
      data: ''
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();

    });

  }



  pizza =

    {
      "nuis": "L01511027P",
      "businessName": "Comunical",
      "categories": [

        {
          "id": 34,
          "name": "Pizza",
          "products": [
            {
              "name": "Al tonno",
              "unitPrice": 800
            },
            {
              "name": "Parma with Philadelphia children",
              "unitPrice": 550
            },
            {
              "name": "Parma with Philadelphia",
              "unitPrice": 1100
            },
            {
              "name": "Parma and Rucola children",
              "unitPrice": 450
            },
            {
              "name": "Parma and Rucola",
              "unitPrice": 900
            },
            {
              "name": "Margherita children",
              "unitPrice": 250
            },
            {
              "name": "Margherita",
              "unitPrice": 500
            },
            {
              "name": "Hawaiian children",
              "unitPrice": 400
            },
            {
              "name": "Hawaiian",
              "unitPrice": 800
            },
            {
              "name": "Ham and Salami children",
              "unitPrice": 400
            },
            {
              "name": "Ham and Salami",
              "unitPrice": 800
            },
            {
              "name": "Four Seasons children",
              "unitPrice": 400
            },
            {
              "name": "Four Seasons",
              "unitPrice": 800
            },
            {
              "name": "Four Cheese children",
              "unitPrice": 350
            },
            {
              "name": "Four Cheese",
              "unitPrice": 700
            },
            {
              "name": "Diavola children",
              "unitPrice": 350
            },
            {
              "name": "Diavola",
              "unitPrice": 700
            },
            {
              "name": "Calzone children",
              "unitPrice": 300
            },
            {
              "name": "Calzone",
              "unitPrice": 600
            },
            {
              "name": "Al tonno children",
              "unitPrice": 400
            },
            {
              "name": "Vegetarian",
              "unitPrice": 600
            },
            {
              "name": "Vegetarian children",
              "unitPrice": 300
            },
            {
              "name": "Pica Proshut",
              "unitPrice": 350
            },
            {
              "name": "margarita",
              "unitPrice": 300
            },
            {
              "name": "Paracetamol",
              "unitPrice": 10
            },
            {
              "name": " kapricoza kapricozak apric",
              "unitPrice": 250
            },
            {
              "name": "cxvxzcvd",
              "unitPrice": 0
            },
            {
              "name": "Pica Kater Stinet",
              "unitPrice": 450
            },
            {
              "name": "Family Pizza",
              "unitPrice": 700
            },
            {
              "name": "1254",
              "unitPrice": 250
            },
            {
              "name": "margarita",
              "unitPrice": 0
            }
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

