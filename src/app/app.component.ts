import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // sampleObservable: Observable<any> = of(1, 2, 3, 4);
  // constructor() {
  //   this.sampleObservable.pipe(map((res: any) => {
  //     return res * 2;
  //   })).subscribe((result: any) => {
  //     console.log("Result ", result);
  //   })
  // }

  http: HttpClient = inject(HttpClient);
  constructor() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map((res: any)=> {
      return res.map((value: any) => {
        return {
          id: value.id,
          title: value.title
        }
      })
    })
  ).subscribe((data:any)=>{
      console.log("Data ", data);
  }
)
}
}
