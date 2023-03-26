import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsDataService {

  constructor() {
  }

  export(): void {
    const data: any = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)!;
      data[key] = localStorage.getItem(key);
    }
    this.downloadObjectAsJson('dbt', data);
  }

  import(file: File): void {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener('loadend', (event) => {
      const result = event.target?.result;
      if (result) {
        const data = JSON.parse(result.toString());
        Object.keys(data).forEach((key: string) => {
          localStorage.setItem(key, data[key]);
        });
      }
    });
  }

  private downloadObjectAsJson(fileName: string, data: any) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
