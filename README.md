Perform an action on the observable before subscribing this can be done by map operator in rxjs. Pipe operators combine different operators (chain all the operators inside pipe) using pipe operator, each operands given in the pipe will transform the data and convert data to observable and that data can be subscribed. If there are more than one operators in the pipe, the operands are executed based on the order it has been written. If there are many operators indide the pipe then the way the operators are sequentially written in that order that way the elements will be executed.
Maps are used to perform same operation on the elements that are emitting and will be converted to observable and that can be subscribed.

sampleObservable: Observable<any> = of(1, 2, 3, 4);
constructor() {
this.sampleObservable.pipe(map((res: any) => {
return res * 2;
})).subscribe((result: any) => {
console.log("Result ", result);
})
}


In promise we will be able to perform operation before executing ‘then’.
In observable we will be perform operation on elements before subscribing.

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


The first map is rxjs operator , second map is javascript map which creates new array without changing the original array and call a function to go through each array elements.
The below code will return id and title only from the api call.


return {
id: value.id,
title: value.title
}