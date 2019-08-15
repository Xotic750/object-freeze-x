import $P, {implementation as $I} from '../src/object-freeze-x';

[$I, $P].forEach((freeze, testNum) => {
  describe(`freeze ${testNum}`, function() {
    it('is a function', function() {
      expect.assertions(1);
      expect(typeof freeze).toBe('function');
    });

    it('should throw when typed array has elements', function() {
      expect.assertions(2);
      const uint8 = new Uint8Array(0);
      expect(freeze(uint8)).toBe(uint8);
      const uint81 = new Uint8Array(1);
      expect(function() {
        freeze(uint81);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should return primitives', function() {
      expect.assertions(6);
      expect(freeze()).toBeUndefined();
      expect(freeze(undefined)).toBeUndefined();
      expect(freeze(null)).toBeNull();
      expect(freeze(1)).toBe(1);
      expect(freeze(true)).toBe(true);
      expect(freeze('x')).toBe('x');
    });

    it('should return objects', function() {
      expect.assertions(4);
      const array = [];
      expect(freeze(array)).toBe(array);
      const object = {};
      expect(freeze(object)).toBe(object);
      const date = new Date();
      expect(freeze(date)).toBe(date);
      const rx = /none/;
      expect(freeze(rx)).toBe(rx);
    });
  });
});
