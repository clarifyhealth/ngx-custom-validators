import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { notEqualTo } from './validator';
import * as i0 from "@angular/core";
const NOT_EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualToValidator),
    multi: true
};
export class NotEqualToValidator {
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    validate(c) {
        return this.validator(c);
    }
}
NotEqualToValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotEqualToValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NotEqualToValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: NotEqualToValidator, selector: "[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]", inputs: { notEqualTo: "notEqualTo" }, providers: [NOT_EQUAL_TO_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotEqualToValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                    providers: [NOT_EQUAL_TO_VALIDATOR]
                }]
        }], propDecorators: { notEqualTo: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9ub3QtZXF1YWwtdG8vZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUF3RCxNQUFNLGdCQUFnQixDQUFDO0FBRXJHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDLE1BQU0sc0JBQXNCLEdBQVE7SUFDbEMsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRixNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFrQjtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7aUhBWFUsbUJBQW1CO3FHQUFuQixtQkFBbUIsOElBRm5CLENBQUMsc0JBQXNCLENBQUM7NEZBRXhCLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsK0VBQStFO29CQUN6RixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDcEM7OEJBRVUsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgbm90RXF1YWxUbyB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbmNvbnN0IE5PVF9FUVVBTF9UT19WQUxJREFUT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdEVxdWFsVG9WYWxpZGF0b3IpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tub3RFcXVhbFRvXVtmb3JtQ29udHJvbE5hbWVdLFtub3RFcXVhbFRvXVtmb3JtQ29udHJvbF0sW25vdEVxdWFsVG9dW25nTW9kZWxdJyxcclxuICBwcm92aWRlcnM6IFtOT1RfRVFVQUxfVE9fVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90RXF1YWxUb1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0IHtcclxuICBASW5wdXQoKSBub3RFcXVhbFRvOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudmFsaWRhdG9yID0gbm90RXF1YWxUbyh0aGlzLm5vdEVxdWFsVG8pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xyXG4gIH1cclxufVxyXG4iXX0=