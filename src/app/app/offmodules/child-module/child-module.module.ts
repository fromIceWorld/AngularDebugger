import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChildComponent } from "./child/child.component";

@NgModule({
  imports: [CommonModule],
  exports: [ChildComponent],
  declarations: [ChildComponent]
})
export class ChildModuleModule {}
