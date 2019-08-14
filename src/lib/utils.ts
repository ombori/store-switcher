export function typesOf(vars: any[], type: string) {
  for (let i = 0; i < vars.length; i++) if (typeof vars[i] !== type) return false;
  return true;
}
