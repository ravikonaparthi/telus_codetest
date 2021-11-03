import { Component, OnInit } from '@angular/core';
import { AuthorService } from './services/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  val: any;

  results: any;

  authorDetails: any;
  authorEntries: any;
  isGridView: boolean = true;

  constructor(private authorService: AuthorService) {

  }

  ngOnInit(): void {
  }

  search(event: any) {
    this.val = null;
    this.authorService.getAuthors(event.query).subscribe((data: any) => {
      this.results = data.docs;
    });
  }

  onSelect(value: any) {
    this.val = value;
    this.authorService.getAuthorDetails(this.val.key).subscribe(data => {
      console.log("Details", data);
      this.authorDetails = data;
    })

    this.authorService.getAuthorWorks(this.val.key).subscribe(data => {
      console.log('works', data);
      this.authorEntries = data.entries;
    });
  }


}
