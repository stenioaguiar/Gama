import { BoolPipe } from './bool.pipe';

describe('BoolPipe', () => {
  it('create an instance', () => {
    const pipe = new BoolPipe();
    expect(pipe).toBeTruthy();
  });
  it('retornar sim se não for false',()=>{
    const pipe = new BoolPipe();
    expect(pipe.transform(false)).not.toBe('Sim');
  });
  it('retornar sim se for true',() => {
    const pipe = new BoolPipe();
    expect(pipe.transform(true)).toBe('Sim');
  })
});
