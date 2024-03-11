export function deepMergeObjects(src: any, dest: any) {
  if (dest === undefined) { dest = {} }
  for (const key in src) {
      if (src.hasOwnProperty(key)) {
          if (typeof src[key] === "object") {
              if (typeof dest[key] !== "object" || Array.isArray(dest[key])) {
                  dest[key] = Array.isArray(src[key]) ? [] : {};
              }
              deepMergeObjects(src[key], dest[key]);
          } else if (src[key] !== undefined) {
              dest[key] = src[key];
          }
      }
  }
  return dest;
}

