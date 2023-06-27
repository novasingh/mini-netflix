import React from "react";
import { get } from "lodash-es";
import paths from "path";

import { hierarchize } from "./utils/hierarchical";

const keyName = "key";
const pathName = "path";
const uniqueKeyName = "uniqueKey";

function pathGenerator(node, parent) {
  const parentUniqueKey = get(parent, uniqueKeyName);
  const uniqueKey = parentUniqueKey
    ? parentUniqueKey + "." + node[keyName]
    : node[keyName];

  const parentPath = get(parent, pathName, "");
  const path = get(node, pathName, paths.join(parentPath, node[keyName]));
  node[uniqueKeyName] = uniqueKey;
  node[pathName] = path;
}

const routeConfig = hierarchize(
  {
    key: "dashboard",
    name: "Dashboard",
    path: "/",
    exact: true,
    component: React.lazy(() => import("./containers/Home")),
    children: [
      {
        key: "dashboard",
        name: "dashboard",
        isPublic: true,
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Home/index")),
        validateRole: false,
      },
    ],
  },
  null,
  pathGenerator
);

export default routeConfig;
