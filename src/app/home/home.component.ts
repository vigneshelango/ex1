import { Component, OnInit, animate } from '@angular/core';
import {trigger,style,transition,animation,keyframes,query,stagger} from "@angular/animations";
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('goals',[
      transition('*=>*',[
        query(':enter',style({opacity:0}),{optional:true} ),
         query( ':enter',stagger('300ms',[
          // animate('.6s ease-in',keyframes([style({opacity:0,transform:'',offset:0}),])) 
         ]))
       
      
      ])
  ])
]
  })

export class HomeComponent implements OnInit {
itemCount:number;
btntxt:string="add item";
gltxt:string="";
goals=[];
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals=res);
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
   
  }
  adGols()
  {
    console.log("clicked");
    this.goals.push(this.gltxt);
    this.gltxt="";
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i)
  {
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }
}
