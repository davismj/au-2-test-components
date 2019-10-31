import { DatePickerViewModel } from './pages/date-picker';
import { IRouter } from '@aurelia/router';
import { customElement } from '@aurelia/runtime';
import template from './shell.html';

@customElement({
  name: 'shell',
  template,
  dependencies: [DatePickerViewModel]
})
export class ShellViewModel {
  modules = [
    'date-picker',
    'date-range'
  ]
}
