import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CardComponent } from "./common/card/card.component";
import { Backgroud } from "./directives/backgroud.component";
import { ChildModuleModule } from "./offmodules/child-module/child-module.module";
@NgModule({
  declarations: [AppComponent, Backgroud, CardComponent],
  imports: [BrowserModule, ChildModuleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
