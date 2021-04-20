import {
  AfterViewInit,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList
} from "@angular/core";

@Directive({
  selector: "[back-color]",
  queries: {
    contentChildren: new ContentChildren(Backgroud)
  }
})
export class Backgroud implements AfterViewInit {
  viewChildren: QueryList<any>;
  @Input("back-color") backColor: string;
  @Output() dirEvent: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) {
    el.nativeElement.style.width = "100px";
    el.nativeElement.style.height = "100px";
    el.nativeElement.style["background-color"] = "red";
  }
  ngOnInit() {
    this.dirEvent.emit("eventPayload");
    //   根据传入数据更新宿主背景
    setTimeout(
      () => (this.el.nativeElement.style["background-color"] = this.backColor),
      2000
    );
  }
  ngAfterViewInit() {
    console.log(this);
  }
}
