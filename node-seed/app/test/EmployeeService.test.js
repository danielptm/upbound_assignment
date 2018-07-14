import { assert } from 'chai';
import employeeService from '../src/service/EmployeeService';

describe('Employee service',() => {
  describe('Making sure all the functions in this module work.', () => {
    it('Authenticate employee', () => {
		assert.equal('99', employeeService.authenticateEmployee())
    });
  });
});
