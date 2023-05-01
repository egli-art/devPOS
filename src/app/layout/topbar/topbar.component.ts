import {Component} from '@angular/core';


@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }


  data =

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
}

