import { Aurelia } from '@aurelia/runtime';
import { JitHtmlBrowserConfiguration } from '@aurelia/jit-html-browser';
import { RouterConfiguration } from '@aurelia/router';
import { ShellViewModel } from './shell';
import { AsDateValueConverter } from './converters/date';

new Aurelia()
  .register(
    JitHtmlBrowserConfiguration,
    RouterConfiguration,
    AsDateValueConverter,
  )
  .app({
    host: document.body,
    component: ShellViewModel,
  })
  .start();
