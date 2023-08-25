export const formatDate = (s: string | Date): string => {
  let t: Date;
  if (typeof s === "string") {
    t = new Date(s);
  } else {
    t = s;
  }
  if (isNaN(t.getTime())) {
    return "";
  }
  return t.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
