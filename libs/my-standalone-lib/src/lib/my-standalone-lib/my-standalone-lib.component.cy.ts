import { TestBed } from '@angular/core/testing';
import { MyStandaloneLibComponent } from './my-standalone-lib.component';

describe(MyStandaloneLibComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(MyStandaloneLibComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(MyStandaloneLibComponent);
  });
});
