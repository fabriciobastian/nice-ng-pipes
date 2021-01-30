import { Pipe, PipeTransform } from '@angular/core';
import { asyncScheduler, Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Pipe({ name: 'throttleTime', pure: true })
export class ThrottleTimePipe<T> implements PipeTransform {
	transform(stream: Observable<T>, time: number = 0, leading: boolean = true, trailing: boolean = true): Observable<T> {
		return stream.pipe(
			throttleTime(time, asyncScheduler, { leading, trailing }),
		);
	}
}
