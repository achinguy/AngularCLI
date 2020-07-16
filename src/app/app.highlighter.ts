import {Directive, ElementRef} from '@angular/core'

@Directive({
  selector:'[my-highlighter]'
})

export class MyHighlighter {
  constructor(ef : ElementRef){
    ef.nativeElement.style.background = 'yellow';
  }
}
