import {InjectFlags, Injector, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Feature1Component} from './feature1.component';

import {
  SCHEMA_CONFIG,
  schemaConfigsProviderFactory,
} from '../../../../src/app/services/configs.service';



@NgModule({
  declarations: [Feature1Component],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: Feature1Component
    }])
  ],
  providers: [
    schemaConfigsProviderFactory({
      host: 'feature1_host',
      port: 3333
    })
  ]
})
export class Feature1Module {
  constructor(
    // @SkipSelf() private injector: Injector,
    private injector: Injector
  ) {
    /**
     *  1. with @SkipSelf logs returned - { host: "api.pure.dongle", port: 5555 } from AppModuleInjector
     *  2. without @SkipSelf - { host: "feature1_host", port: 3333 }
     */
    console.log(
      'Feature1 log',
      injector.get(SCHEMA_CONFIG, null, InjectFlags.Default)
    );

  }
}
