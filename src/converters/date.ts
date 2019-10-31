import { valueConverter } from "@aurelia/runtime";

@valueConverter({
  name: 'asDate'
})
export class AsDateValueConverter {
  toView(value: Date): string {
    return value ? value.toDateString() : '';
  }
}
