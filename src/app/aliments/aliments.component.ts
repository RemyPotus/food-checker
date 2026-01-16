import { Component, inject, OnInit, signal } from '@angular/core';

import { Aliment } from './models/aliment.model';
import { AlimentService } from './services/aliment.service';
import { mockAlimentList } from './consts/mock-list.const';
import { SearchResponseDto } from './models/search-response.model';

@Component({
    selector: 'app-aliments',
    templateUrl: './aliments.component.html',
    styleUrls: ['./aliments.component.scss'],
})

export class AlimentsComponent implements OnInit {

  public aliments = signal<Aliment[]>(mockAlimentList);
  private alimentService = inject(AlimentService);

  ngOnInit(): void {
    this.alimentService.getAliments().subscribe((data: SearchResponseDto) =>{
      if(data.products !== null){
        const mappedAliments: Aliment[] = data.products.map((product) => {
          return {
            generic_name: product.generic_name,
            nutriments: product.nutriments,
            image_url: product.image_url
          } as Aliment
        });

        this.aliments.set(mappedAliments);
      }
    })
  }
}
