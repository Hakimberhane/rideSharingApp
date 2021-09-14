import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  private data = {};  

  constructor() { }

  setData(key, value) {      
    this.data[key] = value;  
  }  
  getData() {  
    return this.data;  
  }  

  getItem(key) {
  	
  	return this.data[key];
  }

}

