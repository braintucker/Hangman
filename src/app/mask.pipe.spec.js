describe('MaskPipe', () => {

  const maskPipe = new MaskPipe();

  it('should hide everything when no letters selected', () => {
      const masked = maskPipe.transform('LOUISIANA', '');
      expect(masked).toBe('*********');
  });

  it('should only reveal the selected letter', () => {
      const masked = maskPipe.transform('LOUISIANA', 'A');
      expect(masked).toBe('******A*A');
  });

  it('should only reveal the selected letters', () => {
      const masked = maskPipe.transform('LOUISIANA', 'ABCS');
      expect(masked).toBe('****S*A*A');
  });

  it('should reveal everything when all letters are selected', () => {
      const masked = maskPipe.transform('LOUISIANA', 'LOUISAN');
      expect(masked).toBe('LOUISIANA');
  });




});
