import {circularArrayGet} from "./circular-array-get";

const testData: string[] = ['foo', 'bar', 'baz', 'foobar'];

describe('circularArrayGet', () => {
   it('should handle index 0', () => {
      const result = circularArrayGet(testData, 0);
      expect(result).toBe('foo');
   });

   it('should handle a positive index', () => {
      const result = circularArrayGet(testData, 1);
      expect(result).toBe('bar');
   });

   it('should handle a positive index beyond array length', () => {
      const result = circularArrayGet(testData, 6);
      expect(result).toBe('baz');
   });

   it('should handle a negative index', () => {
      const result = circularArrayGet(testData, -6);
      expect(result).toBe('baz');
   })
});