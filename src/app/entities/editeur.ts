import {Test} from './test';

export class Editeur {
    tests
    constructor(tests: [Test]) {
        
                    this.tests = tests;
              }
              
        tests: [Test];

  
        toString(): String {
              return (this.tests);
        }
}
}
