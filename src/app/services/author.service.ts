import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService {

  getAuthors(searchText: string) {
    const methodName: string = "search/authors.json?q=" + searchText;
    return this.get(methodName);
  }

  getAuthorDetails(authorKey: string) {
    const methodName: string = "authors/" + authorKey + ".json";
    return this.get(methodName);
  }

  getAuthorWorks(authorKey: string) {
    const methodName: string = "authors/" + authorKey + "/works.json?limit=5&offset=1";
    return this.get(methodName);
  }

}
