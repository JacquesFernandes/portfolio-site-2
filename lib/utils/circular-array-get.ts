
export const circularArrayGet = <S extends unknown[]>(source: S, index: number): S[number] => {
   const possiblyNegativeCircularIndex = index % source.length;
   const circularIndex = possiblyNegativeCircularIndex < 0 ? possiblyNegativeCircularIndex + source.length : possiblyNegativeCircularIndex;

   return source[circularIndex];
}