import { ThrottleTimePipe } from './throttleTime.pipe';
import { getTestScheduler, cold } from 'jasmine-marbles';

describe('ThrottleTimePipe', () => {
	it('should throttle by the specified time amount without trailing emit', () => {
		const scheduler = getTestScheduler();
		scheduler.run(() => {
			const input$ = cold('t 10ms f 10ms t 10ms f 10ms t|', { t: true, f: false });
			const expected$ = cold('t 21ms t 21ms t|', { t: true });

			const throttlePipe = new ThrottleTimePipe();

			const result$ = throttlePipe.transform(input$, 20, true, false);

			expect(result$).toBeObservable(expected$);
		});
	});

	it('should throttle by the specified time amount with trailing emit', () => {
		const scheduler = getTestScheduler();
		scheduler.run(() => {
			const input$ = cold('t 2ms f 20ms t 2ms f 20ms t|', { t: true, f: false });
			const expected$ = cold('t 19ms f 3ms t 19ms f 3ms t|', { t: true, f: false });

			const throttlePipe = new ThrottleTimePipe();

			const result$ = throttlePipe.transform(input$, 20);

			expect(result$).toBeObservable(expected$);
		});
	});
});
