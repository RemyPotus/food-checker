import { Component, OnInit } from '@angular/core';
import { Aliment } from '../models/Aliment';
import { AlimentService } from '../services/AlimentService';

@Component({
    selector: 'app-aliments',
    templateUrl: './aliments.component.html',
    styleUrls: ['./aliments.component.scss'],
    standalone: false
})

export class AlimentsComponent implements OnInit {
  aliments: Array<Aliment> = [
    {
      generic_name_fr: "Chocolat",
      nutriments: {
        "energy-kcal_100g":256,
        "carbohydrates_100g":50,
        "proteins_100g":10,
        "fat_100g":40
      },
      image_front_small_url: 'some link to an image'
    },
    {
      generic_name_fr: "Nutella",
      nutriments: {
        "energy-kcal_100g":539,
        "carbohydrates_100g":57.5,
        "proteins_100g":6.3,
        "fat_100g":30.9
      },
      image_front_small_url: 'some link to an image'
    },
    {
      generic_name_fr: "Test",
      nutriments: {
        "energy-kcal_100g":1,
        "carbohydrates_100g":2,
        "proteins_100g":3,
        "fat_100g":4
      },
      image_front_small_url: 'some link to an image'
    }
  ];

  constructor(private alimentService: AlimentService) {}

  ngOnInit(): void {
    this.alimentService.getAliments().subscribe((data: any) =>{
      console.log(data)
      if(data.products !== null){
        this.aliments = data.products
      }
    })
  }
}
