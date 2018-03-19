import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns = ['id', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _data: DataService) {}

  data: any;

  ngOnInit(){
    this.pingData()

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  pingData(){
    this._data.getData().subscribe(res => {
      this.data = res;
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(this.data);
    });

    // setInterval(()=> {
    //   this.pingData();
    // }, 10000);
  }

}
