import { Component, OnInit } from '@angular/core';
import {Collection} from "../shared/models/collection.model";
import {CollectionService} from "./collection.service";
import {Observable, Subscription} from "rxjs";
import {ConfirmDialogComponent} from "../shared/components/confirm-dialog/confirm-dialog.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
//collections$ :Observable<Collection[]>;
  collection: Collection[];
  searchedCollection: Collection[];
  loading = true;
  errMsg: string;
  constructor(private  collectionService: CollectionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.collectionService.getCollection().subscribe({
      next: collection => {
        this.collection = collection;
        this.loading = false;
        this.searchedCollection = this.collection;
      },
      error: err => this.errMsg = err
    });
  }

  deleteItem(item: Collection) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to delete ' + item.id + '?',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("Hello")
      } else {
        console.log('Canceled Delete');
      }
    })
  }
  filterByName(searchBy?: string) : void {
    if(searchBy){
      searchBy = searchBy.toLocaleLowerCase();
      this.searchedCollection=this.collection.filter((item) =>
        item.name.toLocaleLowerCase().indexOf(searchBy) !== -1)
    } else {
      this.searchedCollection = this.collection;
    }
  }

  filter(value: string) {
    this.filterByName(value);
  }
}
