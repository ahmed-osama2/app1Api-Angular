import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IData } from '../idata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {


  constructor(private _DataService:DataService){}



  allData:IData[]=[]

  // imgePathe:string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next:(res)=>{
        this.allData=res
        // console.log(this.allData)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}



