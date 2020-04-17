import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

   getAllEnable=false;
   getByIdEnable=false;
   myJSON = "";

   displayedColumns: string[] = ['id','fname', 'lname', 'Email', 'password','contact','updated_by'];

   dataSource = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
   ];

	constructor(public rest:RestService){}

    ngOnInit(): void
    {

    // 	let check = this.rest.extractData();
    // 	console.log(check);


    //   let products = [];
   
  	}

    getAll()
    {

      console.log("hello");
          this.getAllEnable=true;
      this.getByIdEnable=false;
    this.dataSource = [
                {"id":"1","fname":"Deva","lname":"Surwase","Email":"deva@gmail.com","password":"1111","contact":"7083388384","updated_by":0},
                {"id":"2","fname":"Sama","lname":"ivare","Email":"sama@gmail.com","password":"2222","contact":"8888888888","updated_by":0},
                {"id":"3","fname":"Mahesh","lname":"bhelke","Email":"mahesh@gmail.com","password":"3333","contact":"9999999999","updated_by":0},
                {"id":"4","fname":"Anand","lname":"chavan","Email":"anand@gmail.com","password":"4444","contact":"9898989898","updated_by":0},
                {"id":"5","fname":"yogi","lname":"jadhav","Email":"yogi@gmail.com","password":"5555","contact":"7887788787","updated_by":0},
                {"id":"6","fname":"prince","lname":"kumar","Email":"prince@gmail.com","password":"6666","contact":"9696969696","updated_by":0},
                {"id":"19","fname":"shubham","lname":"chin/jadhav","Email":"shubhaM@gmail.com","password":"7777","contact":"8989898998","updated_by":0},
                            ];
 
    }

    getById()
    {
      this.getAllEnable=false;
      this.getByIdEnable=true;
      this.rest.extractData().subscribe((data: {}) => {
          
          // console.log(data);
          this.createDatasource(data);
          
      });
    }

    createDatasource(data)
    {
      console.log(data.data[0].id);
      // 
      this.myJSON = JSON.stringify(data.data[0]);
      console.log(this.myJSON);
    //   console.log(typeof(myJSON));
    //   console.log(myJSON[0]);
      // this.dataSource=data.data[0];
      let key = Object.keys(data.data[0]);
      let value = Object.values(data.data[0]);
      var d={}
      for(var i = 0; i < key.length; i++)
      { 
        d[key[i]] = value[i]; 
      } 
      this.dataSource  = [d];
      console.log(typeof(this.dataSource));
    }

    applyFilter(event: Event) 
    {
     var dataSource = new MatTableDataSource(this.dataSource);
     var filterValue = (event.target as HTMLInputElement).value;
     dataSource.filter = filterValue.trim().toLowerCase();
    }

}