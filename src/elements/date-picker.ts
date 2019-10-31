import { AsDateValueConverter } from './../converters/date';
import { customElement, bindable, BindingMode } from "@aurelia/runtime";
import template from './date-picker.html';

function daysInMonth(year: number, month: number): number;
function daysInMonth(date: Date): number;
function daysInMonth(year: Date | number, month?: number): number {
  if (year instanceof Date) {
    month = year.getMonth();
    year = year.getFullYear();
  }
  switch (month) {
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return year % 4 === 0 ? 29 : 28;
  }
}

@customElement({
  name: 'au-date-picker',
  template,
  dependencies: [AsDateValueConverter]
})
export class AuDatePickerCustomElement {

  @bindable({ mode: BindingMode.twoWay }) value?: Date = new Date();

  private currentYear = this.value.getFullYear();
  private currentMonth = this.value.getMonth();

  valueChanged(value: Date = new Date()) {
    this.currentYear = value.getFullYear();
    this.currentMonth = value.getMonth();
  }

  private setMonth(month: number) {
    this.currentMonth = month;
  }

  private weeksInMonth(year, month): number {
    const firstDay = new Date(year, month, 1).getDay();
    return Math.ceil((daysInMonth(year, month) + firstDay) / 7);
  }

  private getDate(year, month, day) {
    const firstDay = new Date(year, month, 1).getDay();
    const date = day - firstDay + 1;
    if (date < 1) {
      return daysInMonth(year, month - 1) + date;
    }
    const lastDay = daysInMonth(year, month);
    if (date > lastDay) {
      return date % lastDay;
    }
    return date;
  }

  private getWeekday(day: number): string {
    return {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thur',
      5: 'Fri',
      6: 'Sat'
    }[day];
  }

  private getMonth(month: number): string {
    return {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December'
    }[month];
  }

  private state = 0;

  open() {
    this.state = 1
  }

  close() {
    this.state = 0;
  }
}
