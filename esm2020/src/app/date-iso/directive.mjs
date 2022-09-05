import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { dateISO } from './validator';
import * as i0 from "@angular/core";
const DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidator),
    multi: true
};
export class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
}
DateISOValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateISOValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DateISOValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: DateISOValidator, selector: "[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]", providers: [DATE_ISO_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateISOValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                    providers: [DATE_ISO_VALIDATOR]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9kYXRlLWlzby9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUV0QyxNQUFNLGtCQUFrQixHQUFRO0lBQzlCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixRQUFRLENBQUMsQ0FBa0I7UUFDekIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7OEdBSFUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsK0ZBRmhCLENBQUMsa0JBQWtCLENBQUM7NEZBRXBCLGdCQUFnQjtrQkFKNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0VBQXNFO29CQUNoRixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBkYXRlSVNPIH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5cclxuY29uc3QgREFURV9JU09fVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlSVNPVmFsaWRhdG9yKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZGF0ZUlTT11bZm9ybUNvbnRyb2xOYW1lXSxbZGF0ZUlTT11bZm9ybUNvbnRyb2xdLFtkYXRlSVNPXVtuZ01vZGVsXScsXHJcbiAgcHJvdmlkZXJzOiBbREFURV9JU09fVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUlTT1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgcmV0dXJuIGRhdGVJU08oYyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==