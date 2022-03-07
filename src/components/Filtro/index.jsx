import React, { useState } from "react";
import { TreeSelect } from "antd";

const { TreeNode } = TreeSelect;
const Filtro = () => {
  const [state, setState] = useState(undefined);

  const onChange = (value) => {
    console.log(value);
    setState({ value });
  };

  return (
    <>
      <TreeSelect
        showSearch
        style={{ width: "50%", alignSelf:"center"}}
        value={state}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={onChange}
      >
        <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="my leaf" />
            <TreeNode value="leaf2" title="your leaf" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1">
            <TreeNode
              value="sss"
              title={<b style={{ color: "#08c" }}>sss</b>}
            />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </>
  );
};

export default Filtro;
