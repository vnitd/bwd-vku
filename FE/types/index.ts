import { SVGProps } from "react";

import webStorageClient from "./webStorageClient";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export { webStorageClient };
