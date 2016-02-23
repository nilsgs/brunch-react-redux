import { expect } from 'chai';
import { ui as reducer } from '../../app/src/modules/ui/reducers';
import * as types from '../../app/src/modules/ui/constants';

describe('UI reducer', () => {
   
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
        .to.deep.equal({ title: ''});
    });
    
    it('should handle UPDATE_TITLE', () => {
      expect(reducer({ title: 'A'}, {
          type: types.UPDATE_TITLE,
          title: 'B'
      }))
      .to.deep.equal({
          title: 'B'
      });
   });
});