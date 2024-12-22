export function slugFromPath(path: string) {
  return path.split("/").pop()?.replace(/\..+$/, "").replace(/^\d+-/, "") ?? "";
}
