import { Injectable, ValueProvider } from '@angular/core';
import { InjectionToken, Injector, INJECTOR, inject } from '@angular/core';
import { interval } from 'rxjs';

export interface ISchemaConfigs {
  host: string;
  port: number;
}

export const SCHEMA_CONFIG = new InjectionToken<ISchemaConfigs>('default_schema', {
  providedIn: 'root',
  factory: () => {
    return {
      host: 'default_host',
      port: 5555
    };
  }
});

export function schemaConfigsProviderFactory(
  value: ISchemaConfigs,
  multi: boolean = false
): ValueProvider {
  return {
    provide: SCHEMA_CONFIG,
    useValue: value,
    multi
  };
}


@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  constructor(private injector: Injector) {

    interval(3000).subscribe(() => {
      console.log(
        'App Module log',
        injector.get(SCHEMA_CONFIG)
      );
    });

  }
}
