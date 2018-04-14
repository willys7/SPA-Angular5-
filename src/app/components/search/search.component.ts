import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'
import { ActivatedRoute } from "@angular/router"
import { Router } from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  search:string ="";

  constructor( private _heroesService: HeroesService, 
    private router:Router,  private activatedRoute:ActivatedRoute) {
      
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.search = params['value'];
      this.heroes = this._heroesService.getHeroeByName(params['value']);
    });
  }

  showHeroe(index:number){
    this.router.navigate(['/heroe',index])
  }

}
