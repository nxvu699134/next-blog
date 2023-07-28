import { headers } from "next/headers";

export const useServerPathname = () => {
  const headersList = headers();
  return headersList.get("x-invoke-path") || "";
};
