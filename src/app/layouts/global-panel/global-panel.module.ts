import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.component';
import { GlobalPanelComponent } from './global-panel.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { HelpComponent } from './help/help.component';
import { GlobalPanelService } from './global-panel.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GlobalPanelComponent, AttachmentComponent, HelpComponent]
})
export class GlobalPanelModule { }
