import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintDate: { blueprintName: string; blueprintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintDate.blueprintName,
      content: bluePrintDate.blueprintContent
    });
  }
}
