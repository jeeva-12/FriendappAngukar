import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  name=""

  search=()=>
  {
    let data:any=
    {
      "name":this.name
    }
    console.log(data)
  }

}
