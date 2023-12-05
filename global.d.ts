// required to support our use of svg files in Typescript
declare module "*.svg" {
  import * as React from "react";
  const content: string;

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };

  export default content;
}
