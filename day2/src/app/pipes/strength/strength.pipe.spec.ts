import { StrengthPipe } from './strength.pipe';

describe('Test StrengthPipe ', () => {
  let strengthPipe:any;
  beforeEach(()=>{
     strengthPipe= new StrengthPipe();
  })
  beforeAll(()=>{

  })
  afterEach(()=>{

  })
  afterAll(()=>{
    //
  })
  
  it('Test trnsform if input less than 10 ahould return weak', () => {
      expect(strengthPipe.transform(4)).toEqual("4 (weak)")
  });
  it('Test trnsform if input >= 10 less than 20 ahould return strong', () => {
      expect(strengthPipe.transform(11)).toEqual("11 (strong)")
  });
  it('Test trnsform if input >20 ahould return unbelievable', () => {
      expect(strengthPipe.transform(33)).toEqual("33 (unbelievable)")
  });

});
