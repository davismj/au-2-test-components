import { AuDatePickerCustomElement } from '../elements/date-picker';
import template from './date-picker.html';
import { customElement } from '@aurelia/runtime';

@customElement({
  name: 'date-picker',
  template,
  dependencies: [AuDatePickerCustomElement]
})
export class DatePickerViewModel {

}
