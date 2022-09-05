import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { creditCard } from './validator';
import * as i0 from "@angular/core";
const CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CreditCardValidator),
    multi: true
};
export class CreditCardValidator {
    validate(c) {
        return creditCard(c);
    }
}
CreditCardValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CreditCardValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CreditCardValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: CreditCardValidator, selector: "[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]", providers: [CREDIT_CARD_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CreditCardValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                    providers: [CREDIT_CARD_VALIDATOR]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jcmVkaXQtY2FyZC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUV6QyxNQUFNLHFCQUFxQixHQUFRO0lBQ2pDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixRQUFRLENBQUMsQ0FBa0I7UUFDekIsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7aUhBSFUsbUJBQW1CO3FHQUFuQixtQkFBbUIsd0dBRm5CLENBQUMscUJBQXFCLENBQUM7NEZBRXZCLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsK0VBQStFO29CQUN6RixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBjcmVkaXRDYXJkIH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5cclxuY29uc3QgQ1JFRElUX0NBUkRfVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcmVkaXRDYXJkVmFsaWRhdG9yKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY3JlZGl0Q2FyZF1bZm9ybUNvbnRyb2xOYW1lXSxbY3JlZGl0Q2FyZF1bZm9ybUNvbnRyb2xdLFtjcmVkaXRDYXJkXVtuZ01vZGVsXScsXHJcbiAgcHJvdmlkZXJzOiBbQ1JFRElUX0NBUkRfVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlZGl0Q2FyZFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgcmV0dXJuIGNyZWRpdENhcmQoYyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==