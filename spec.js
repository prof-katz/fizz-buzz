const { expect } = require('chai');
const fizzBuzz = (len)=> {
  const result = [];
  while(result.length < len){
    result.push(result.length + 1);
  }
  return result;
};
describe('fizz buzz', ()=> {
  it('works', ()=> {
    expect(fizzBuzz(2)).to.eql([ 1, 2]);
  });
});
