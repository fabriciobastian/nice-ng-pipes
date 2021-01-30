Forked from Tibing/async-pipeline

## Getting started

- Import required modules:
```typescript
import { CommonModule } from '@angular/common';
import { NotModule, LengthModule, SkipModule } from 'ng-nice-pipes';

@NgModule({
  imports: [
    CommonModule,
    NotModule,
    LengthModule,
    SkipModule,
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

- [debounce](https://rxjs.dev/api/operators/debounce)
- [debounceTime](#debouncetimepipe)
- [delay](#delaypipe)
- [distinctUntilChanged](#distinctuntilchangedpipe)
- [first](#firstpipe)
- [last](#lastpipe)
- [mapTo](#maptopipe)
- [pairwise](#pairwisepipe)
- [skip](#skippipe)
- [skipLast](#skiplastpipe)
- [skipUntil](https://rxjs.dev/api/operators/skipUntil)
- [skipWhile](https://rxjs.dev/api/operators/skipWhile)
- [take](#takepipe)
- [takeLast](#takelastpipe)
- [takeUntil](https://rxjs.dev/api/operators/takeUntil)
- [takeWhile](https://rxjs.dev/api/operators/takeWhile)
- [throttle](#throttlepipe)
- [throttleTime](https://rxjs.dev/api/operators/throttleTime)
- [length](#lengthpipe)
- [log](#logpipe)
- [not](#notpipe)
- [get](#getpipe)
