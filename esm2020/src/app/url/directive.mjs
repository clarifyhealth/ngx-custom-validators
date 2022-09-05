import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { url } from './validator';
import * as i0 from "@angular/core";
const URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
export class UrlValidator {
    validate(c) {
        return url(c);
    }
}
UrlValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UrlValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
UrlValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: UrlValidator, selector: "[url][formControlName],[url][formControl],[url][ngModel]", providers: [URL_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UrlValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                    providers: [URL_VALIDATOR]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91cmwvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFbEMsTUFBTSxhQUFhLEdBQVE7SUFDekIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxPQUFPLFlBQVk7SUFDdkIsUUFBUSxDQUFDLENBQWtCO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7OzBHQUhVLFlBQVk7OEZBQVosWUFBWSxtRkFGWixDQUFDLGFBQWEsQ0FBQzs0RkFFZixZQUFZO2tCQUp4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwREFBMEQ7b0JBQ3BFLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyB1cmwgfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5jb25zdCBVUkxfVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVcmxWYWxpZGF0b3IpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t1cmxdW2Zvcm1Db250cm9sTmFtZV0sW3VybF1bZm9ybUNvbnRyb2xdLFt1cmxdW25nTW9kZWxdJyxcclxuICBwcm92aWRlcnM6IFtVUkxfVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXJsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICByZXR1cm4gdXJsKGMpO1xyXG4gIH1cclxufVxyXG4iXX0=