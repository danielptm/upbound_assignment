import { assert } from 'chai';
import utils from '../src/utils/PasswordUtility';

describe('Utils',() => {
  describe('Making sure all the utils functions are working.', () => {
    it('Encrypt password', () => {
		assert.equal(null, utils.encryptPassword());
    });
  });
});
