export function optionalTypesOf(vars: any[], type: string) {
  for (let i = 0; i < vars.length; i++)
    if (typeof vars[i] !== type && typeof vars[i] !== 'undefined') return false;
  return true;
}
