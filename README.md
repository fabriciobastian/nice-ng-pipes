Forked from Tibing/async-pipeline

## Getting started

- Import required modules:
```typescript
import { CommonModule } from '@angular/common';
import { NotPipeModule, LengthPipeModule, SkipPipeModule } from 'nice-ng-pipes';

@NgModule({
  imports: [
    CommonModule,
    NotPipeModule,
    LengthPipeModule,
    SkipPipeModule,
  ],
})
export class AppModule {}
```

- Use pipes
```html
<app-errors *ngIf="errors$ | skip:3 | length | not | async"></app-errors>
```

## Available pipes

### Async

#### RxJS
- [debounce](https://rxjs.dev/api/operators/debounce)
- [debounceTime](https://rxjs.dev/api/operators/debounceTime)
- [delay](https://rxjs.dev/api/operators/delay)
- [distinctUntilChanged](https://rxjs.dev/api/operators/distinctUntilChanged)
- [first](https://rxjs.dev/api/operators/first)
- [last](https://rxjs.dev/api/operators/last)
- [mapTo](https://rxjs.dev/api/operators/mapTo)
- [pairwise](https://rxjs.dev/api/operators/pairwise)
- [skip](https://rxjs.dev/api/operators/skip)
- [skipLast](https://rxjs.dev/api/operators/skipLast)
- [skipUntil](https://rxjs.dev/api/operators/skipUntil)
- [skipWhile](https://rxjs.dev/api/operators/skipWhile)
- [take](https://rxjs.dev/api/operators/take)
- [takeLast](https://rxjs.dev/api/operators/takeLast)
- [takeUntil](https://rxjs.dev/api/operators/takeUntil)
- [takeWhile](https://rxjs.dev/api/operators/takeWhile)
- [throttle](https://rxjs.dev/api/operators/throttle)
- [throttleTime](https://rxjs.dev/api/operators/throttleTime)

#### Custom
- length
- log
- not
- get
