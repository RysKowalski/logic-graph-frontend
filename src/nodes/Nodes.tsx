import {
  type Node,
  type Edge,
} from '@xyflow/react';
import IONode from './IONode';
import IFNode from './IfNode';
import ReferenceNode from './ReferenceNode';
import StartStopNode from './StartStopNode';
import OperationNode from './OperationsNode';

export const nodeTypes = {
  StartNode: StartStopNode,
  StopNode: StartStopNode,
  IONode: IONode,
  IFNode: IFNode,
  ReferenceNodeIn: ReferenceNode,
  ReferenceNodeOut: ReferenceNode,
  OperationNode: OperationNode
}

export const initialNodes = [
  { id: 'start', position: { x: 0, y: 0 }, data: {}, type: "StartNode" },
  { id: 'stop', position: { x: 0, y: 50 }, data: {}, type: "StopNode" },
  { id: 'ReferenceIn', position: { x: 0, y: 100 }, data: { name: "1" }, type: "ReferenceNodeIn" },
  { id: 'ReferenceOut', position: { x: 40, y: 100 }, data: { name: "1" }, type: "ReferenceNodeOut" },
  { id: 'IONode', position: { x: 0, y: 150 }, data: {}, type: "IONode" },
  { id: 'IFNode', position: { x: 0, y: 230 }, data: {}, type: "IFNode" },
  { id: 'OperationNode', position: { x: 0, y: 260 }, data: {}, type: "OperationNode" }
];

export const initialEdges: Edge[] = [
  { id: 'start-stop', source: 'start', target: 'stop' },
];

