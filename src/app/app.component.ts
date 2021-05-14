import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { BackendService } from './backend.service';


export interface WeatherData {
  id: string;
  date: string;//this date has all three combined which we then need to strip
  year: string;
  month: string;
  day: string;
  type: string;
  value: string;
  flag1: string;
  flag2: string;
  flag3: string;
  flag4: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  stationData!: WeatherData
  nullData: boolean = false
  idInput: string = ''
  title = 'frontend'
  searchForm = new FormGroup({
    stationId: new FormControl('', Validators.required)
  })

  constructor(private backend: BackendService) {}
  ngOnInit() {

  }
  async getData() {
    let id = String(this.searchForm.controls["stationId"].value)
    try {
      let response = await this.backend.getStationData(id)
      this.nullData = false
      this.stationData = response
      this.stationData.year = response.date.substr(0,4)//strip date apart
      this.stationData.month = response.date.substr(4,2)//strip date apart
      this.stationData.day = response.date.substr(6,2)//strip date apart
    }
    catch(err) {
      if(err.status===404) {
        this.nullData = true
      }
    }
  }
}
