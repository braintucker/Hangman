import { MaskPipe } from './mask.pipe';

describe('MaskPipe', () => {

  const maskPipe = new MaskPipe();

  it('should hide everything when no letters selected', () => {
    const masked = maskPipe.transform('LOUISIANA', '');
    expect(masked).toBe('*********');
  });

  it('should reveal only the selected letter', () => {
    const masked = maskPipe.transform('LOUISIANA', 'A');
    expect(masked).toBe('******A*A');
  });

  it('should reveal only the selected letters', () => {
    const masked = maskPipe.transform('LOUISIANA', 'ANI');
    expect(masked).toBe('***I*IANA');
  });

  it('should reveal everything when all letters selected', () => {
    const masked = maskPipe.transform('LOUISIANA', 'LOUISAN');
    expect(masked).toBe('LOUISIANA');
  });

});
