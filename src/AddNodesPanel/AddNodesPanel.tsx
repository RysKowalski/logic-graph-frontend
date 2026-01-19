import { Panel, PanelProps } from "@xyflow/react";
import { AddIFNode } from "./AddIFNode";
import { AddIONode } from "./AddIONode";
import { AddJoinNode } from "./AddJoinNode";
import { AddOperationsNode } from "./AddOperationsNode";
import { AddReferenceNode } from "./AddReferenceNode";

export default function AddNodesPanel(props: PanelProps) {
  return (
    <Panel position="top-right">
      <div id="add-nodes-panel">
        <details>
          <summary>add IO node</summary>
          <AddIONode />
        </details>
        <details>
          <summary>add IF node</summary>
          <AddIFNode /></details>
        <details>
          <summary>add operations node</summary>
          <AddOperationsNode />
        </details>
        <details>
          <summary>add reference node</summary>
          <AddReferenceNode />
        </details>
        <details>
          <summary>add join node</summary>
          <AddJoinNode />
        </details>
      </div>
    </Panel>
  )
}
