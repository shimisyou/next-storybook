import React, { createContext } from "react";
import { TreeView, TreeItem } from "@mui/lab";

const PageTreeContext = createContext({ page: null, level: 0 });

const PageListTreeItem = ({ page, level }) => {
  return (
    <PageTreeContext.Provider value={{ page, level }}>
      <TreeItem
        nodeId={page.id}
        label={<p>{`Level ${level}: ${page.name}`}</p>}
        sx={{ marginLeft: level * 10 }}
      >
        {page.children &&
          page.children.map((child) => (
            <PageListTreeItem key={child.id} page={child} level={level + 1} />
          ))}
      </TreeItem>
    </PageTreeContext.Provider>
  );
};

const SimpleTreeView = ({ pageTree, operationArea }) => {
  pageTree, operationArea;
  return (
    <TreeView>
      {pageTree.map((item) => (
        <PageListTreeItem key={item.id} page={item} level={1} />
      ))}
    </TreeView>
  );
};

export default SimpleTreeView;
