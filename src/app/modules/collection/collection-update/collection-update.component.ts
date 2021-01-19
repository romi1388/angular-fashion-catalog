import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {CollectionService} from "../collection.service";
import {Collection} from "../../shared/models/collection.model";

@Component({
  selector: 'app-collection-update',
  templateUrl: './collection-update.component.html',
  styleUrls: ['./collection-update.component.css']
})
export class CollectionUpdateComponent implements OnInit {
  title: string;
  item: Collection;
  createNew: boolean = false;
  errMsg: string;
  loading = true;

  constructor(private collectionService: CollectionService ,private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe( params => {
         console.log(params);
       const id = +params.get('id');
       this.getCollectionItem(id);
       })

  }

  getCollectionItem(id:number) : void {
    console.log("hello");
    this.collectionService.getCollectionItem(id).subscribe({
      next: item => this.retriveItem(item),
      error: err => this.errMsg = err
    });
  }

  retriveItem(item: Collection): void {
    this.item = item;
    console.log("hello2");
    if(!this.item) {
      this.title = 'no item';
      console.log("hello3");
    } else if(this.item.id === 0) {
      this.title = 'Add new Item';
    } else {
      this.title = `Edit Item: ${this.item.itemType}`;
      console.log("hello4");
      this.loading = false;
    }
  }

  close(): void {
    this.router.navigate(['/collection']);
  }
}
