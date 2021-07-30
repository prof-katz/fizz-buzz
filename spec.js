const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_widgets_db');

const Widget = conn.define('widget', {
});

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  await Promise.all([
    Widget.create(),
    Widget.create(),
    Widget.create(),
    Widget.create(),

  ]);
};
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
describe('widgets', ()=> {
  beforeEach(()=> syncAndSeed());
  it('there are 4', async()=> {
    const widgets = await Widget.findAll();
    expect(widgets.length).to.equal(4);
  });
});
