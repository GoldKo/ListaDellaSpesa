import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

  @Input() title !: string;
  
  @Input() index !: number;

  constructor(private router : Router, private listsService : ListsService) {}

  deleteList(){
    if(confirm("Sei sicuro di voler cancellare "+this.title+"?")){
      this.listsService.removeList(this.index)
    }
      
  }

  openList(){

    this.listsService.changeList(this.index);
    this.router.navigate(["../products"])
    
  }
}
