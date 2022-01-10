import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable()
export class ClientsService {

  possibleValues: string = 'abcdefghijklmnopqrstuvwxyz';
  gridList: Array<string[]> = [];
  time: Date = new Date();
  disableField = false;
  code: string = '';
  optionalField = '';
  started = false;
  form = this.fb.group({
    payment: [null, Validators.required],
    ammount: [null, Validators.required]
  });
  paymentsTable = {
    columns: [
      {
        label: 'Name',
        width: '60%',
        value: 'payment'
      },
      {
        label: 'Ammount',
        width: '10%',
        value: 'ammount'
      },
      {
        label: 'Code',
        width: '10%',
        value: 'code'
      },
      {
        label: 'Grid',
        width: '10%',
        value: 'gridLabel'
      }
    ],
    rows: [

    ] as any
  };

  constructor(private fb: FormBuilder) {

  }

  public start(): void {
    this.buildList();
    this.buildTimerInterval();
    this.buildTwoSecondsInterval();
    this.started = true;
  }

  private buildTimerInterval(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  private buildTwoSecondsInterval(): void {
    setInterval(() => {
      this.buildList();
      this.disableField = !this.disableField;
      this.buildCode(this.time.getSeconds().toString());
    }, 2000);
  }

  private buildList(): void {
    this.gridList = [];
    const header = [''];
    const tempArray = [];
    let counter = this.optionalField ? 8 : 10;


    for (let i = 0; i < 10; i++) {
      const gridArr = [];
      for (let j = 0; j < counter; j++) {
        gridArr.push(this.generateRandomLabel());
      }

      if (counter < 10) {
        gridArr.push(this.optionalField, this.optionalField);
        gridArr.sort();
      }

      header.push(i.toString());
      tempArray.push(gridArr);
    }
    this.gridList.push(header, ...tempArray);
  }
  private generateRandomLabel(): string {
    return this.possibleValues.charAt(Math.floor(Math.random() * this.possibleValues.length));
  }

  private buildCode(seconds: string): void {
    let vCount = 0;
    let cCount = 0;
    this.code = '';

    seconds = seconds.length < 2 ? `0${seconds}` : seconds;
    const secondsList = seconds.split('');
    const grid = this.gridList.slice(1, this.gridList.length);
    const vLetter = grid[Number(secondsList[0])][Number(secondsList[1])];
    const cLetter = grid[Number(secondsList[1])][Number(secondsList[0])];

    grid.forEach((gr) => {
      vCount += this.filterLetter(gr, vLetter);
      cCount += this.filterLetter(gr, cLetter);
    });
    this.code = this.verifyCount([vCount, cCount]);
  }

  private filterLetter(array: string[], letter: string): number {
    return array.filter((value) => value === letter).length;
  }

  private verifyCount(countList: number[]): string {
    return countList.map((num) => num > 9 ? this.findLowestDivisor(num) : num).toString().replace(',', '');
  }

  private findLowestDivisor(num: number): string {
    let lastResult = 0;
    for (let i = num; i > 1; i--) {
      const result = Math.floor(num / i);
      if (result < 10) {
        lastResult = result;
      } else {
        break;
      }
    }
    return lastResult.toString();
  }

  public savePayment(): void {
    this.paymentsTable.rows.push({ ...this.form.getRawValue(), code: this.code, grid: this.gridList.slice(1, this.gridList.length), gridLabel: '100' });
    this.form.reset();
  }
}