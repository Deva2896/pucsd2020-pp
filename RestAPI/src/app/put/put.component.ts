import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit 
{
	id = "";
	fname = "";
	lname = "";
	email = "";
	password = "";
	updatedBy="";
	phoneNumber = "";

    constructor(public rest:RestService){}

    ngOnInit(): void
    {
	
  	}

  	getValue()
  	{
  		console.log("pit");
	    let postString ={"first_name":this.fname,"last_name":this.lname,"email":this.email,"password":this.password,"contact_number":this.phoneNumber,"updated_by":this.updatedBy};
	  	
	  	this.rest.update(this.id,JSON.stringify(postString)).subscribe((data: {}) => {
	      console.log(data);
	    });
  	}

}
