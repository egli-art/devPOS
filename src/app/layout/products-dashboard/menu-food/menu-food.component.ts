import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketBillComponent} from "../../ticket-bill/ticket-bill.component";
@Component({
  selector: 'menu-food',
  templateUrl: './menu-food.component.html',
  styleUrls: ['./menu-food.component.scss'],
})
export class MenuFoodComponent implements OnInit{
  selectedSquareValue: number | any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(TicketBillComponent, {
      width: '320px',
      height: '465px',
      position: {
        left: '10%',},
      panelClass: '.mat-dialog-container',
      data: ''
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });

  }



  datasproduct =

    {
      "nuis": "L01511027P",
      "businessName": "Comunical",
      "categories": [
        {
          "id": 32,
          "name": "Food Menu/ Snacks",
          "products": [
            {
              "name": "Croissant",
              "unitPrice": 200
            },
            {
              "name": "Cubano Sandwich",
              "unitPrice": 800
            },
            {
              "name": "Feta Cheese",
              "unitPrice": 700
            },
            {
              "name": "French frites",
              "unitPrice": 350
            },
            {
              "name": "Fried eggs 2",
              "unitPrice": 400
            },
            {
              "name": "Grilled vegetable",
              "unitPrice": 700
            },
            {
              "name": "Ham And Cheese Toast",
              "unitPrice": 350
            },
            {
              "name": "MC B.Lunch",
              "unitPrice": 450
            },
            {
              "name": "Mix grill",
              "unitPrice": 1500
            },
            {
              "name": "Omelets",
              "unitPrice": 500
            },
            {
              "name": "or grilled prawns",
              "unitPrice": 750
            },
            {
              "name": "or sliced beef fillet",
              "unitPrice": 650
            },
            {
              "name": "Precel",
              "unitPrice": 250
            },
            {
              "name": "Salmon Wraps",
              "unitPrice": 800
            },
            {
              "name": "Side dishes",
              "unitPrice": 250
            },
            {
              "name": "Club Sandwich",
              "unitPrice": 1050
            },
            {
              "name": "Bussines Lunch",
              "unitPrice": 990
            },
            {
              "name": "Bruschetta",
              "unitPrice": 550
            },
            {
              "name": "Spicy Buffalo Chicken Wings",
              "unitPrice": 1000
            },
            {
              "name": "*Add chicken breast",
              "unitPrice": 350
            },
            {
              "name": "“Frankfurter”",
              "unitPrice": 650
            },
            {
              "name": "“Leberkäsesemmel”",
              "unitPrice": 450
            },
            {
              "name": "100 Gram Beef Burger",
              "unitPrice": 990
            },
            {
              "name": "Antipasti",
              "unitPrice": 1100
            },
            {
              "name": "Austrian cake",
              "unitPrice": 300
            },
            {
              "name": "Bratwust",
              "unitPrice": 600
            },
            {
              "name": "Vegetarian Sandwich",
              "unitPrice": 600
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

