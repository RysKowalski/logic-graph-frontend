import { nanoid } from 'nanoid';
import type { XYPosition } from '@xyflow/react';
import type { Node } from '@xyflow/react';
import { nodeTypes } from '../nodes/Nodes';

export type NodeType = keyof typeof nodeTypes;

export type FlowNode<TData = unknown> = Node<TData, NodeType>;
type AddNodeParams<TData> = {
  type: NodeType;
  data: TData;
  position?: XYPosition;
};

export function createAddNode(
  setNodes: React.Dispatch<React.SetStateAction<FlowNode[]>>
) {
  return function addNode<TData>({
    type,
    data,
    position = { x: 0, y: 0 },
  }: AddNodeParams<TData>): void {
    setNodes((nodes) => [
      ...nodes,
      {
        id: nanoid(),
        type,
        data,
        position,
      },
    ]);
  };
}
