import { createContext } from "react";

//we can use this context to share the state of the adopted pets
const bodyPart = createContext<[string, (bodyPart: string) => void]>([
  "all",
  () => {},
]);

export default bodyPart;
