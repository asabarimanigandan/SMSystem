import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
    selector: '[numberonly]'
})

export class HandleNumberDirective{
    constructor(element:ElementRef){
        element.nativeElement
    }

    @Input() numberonly:boolean;

   @HostListener('keydown',['$event']) onkeydown(event){
       let e = <KeyboardEvent> event;
       if(this.numberonly){
           if([46,8,9,27,13,110,190].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)){
                return;
            }
            if((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)){
                    e.preventDefault();
            }
       }
    }
}