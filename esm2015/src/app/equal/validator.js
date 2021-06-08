import { Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
export const equal = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val === v ? null : { equal: { value: val } };
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9lcXVhbC92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrRCxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQVEsRUFBZSxFQUFFO0lBQzdDLE9BQU8sQ0FBQyxPQUF3QixFQUFvQixFQUFFO1FBQ3BELElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxDQUFDLEdBQVEsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU3QixPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUN0RCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc1ByZXNlbnQgfSBmcm9tICcuLi91dGlsL2xhbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKHZhbDogYW55KTogVmFsaWRhdG9yRm4gPT4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyA9PiB7XHJcbiAgICBpZiAoaXNQcmVzZW50KFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHY6IGFueSA9IGNvbnRyb2wudmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIHZhbCA9PT0gdiA/IG51bGwgOiB7IGVxdWFsOiB7IHZhbHVlOiB2YWwgfSB9O1xyXG4gIH07XHJcbn07XHJcbiJdfQ==