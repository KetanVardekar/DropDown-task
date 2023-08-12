import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) { }
  selectedOption: any;
  output: any = []

  i = 0;
  j = 0;
  ans: any = []
  outputArray: any = []

  selected(data: any) {
    console.log(data);


    // this.selectedOption = ''
    this.cdr.detectChanges()
    if (data == 'select') {
      alert('Enter Valid Value')
    } else {
      this.output.push(data);
      this.selectedOption = 'select'
    }
  }
  submit() {

    for (let k = 0; k < this.output.length; k++) {
      if (!this.ans[this.i]) {
        this.ans[this.i] = [];
      }
      if (this.output[k] == "H") {
        this.ans[this.i][this.j] = "H";
        this.i++;
        if (this.output[k + 1] == "T") this.i = 0, this.j++;
      } else {
        this.ans[this.i][this.j] = "T";
        this.i++;
        if (this.output[k + 1] == "H") this.i = 0, this.j++;
      }
    }

    for (let x = 0; x < this.ans.length; x++) {
      for (let y = 0; y < this.ans[0].length; y++) {
        if (!this.ans[x][y]) {
          this.ans[x][y] = " ";
        }
      }
    }
    this.outputArray = this.ans.map((row: any) => row.join(''));


  }



}
