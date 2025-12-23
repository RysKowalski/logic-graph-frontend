import {
  type Node,
  type Edge,
} from '@xyflow/react';
import IONode from './IONode';
import IFNode from './IfNode';
import ReferenceNode from './ReferenceNode'
import StartStopNode from './StartStopNode';

export const initialNodes = [
  { id: 'start', position: { x: 0, y: 0 }, data: {}, type: "StartNode" },
  { id: 'stop', position: { x: 0, y: 50 }, data: {}, type: "StopNode" },
  { id: 'ReferenceIn', position: { x: 0, y: 100 }, data: { name: "1" }, type: "ReferenceNodeIn" },
  { id: 'ReferenceOut', position: { x: 40, y: 100 }, data: { name: "1" }, type: "ReferenceNodeOut" },
  { id: 'IONode', position: { x: 0, y: 150 }, data: {}, type: "IONode" },
  { id: 'IFNode', position: { x: 0, y: 230 }, data: {}, type: "IFNode" }
];

export const initialEdges: Edge[] = [
  { id: 'start-stop', source: 'start', target: 'stop' },
];

export const nodeTypes = {
  StartNode: StartStopNode,
  StopNode: StartStopNode,
  IONode: IONode,
  IFNode: IFNode,
  ReferenceNodeIn: ReferenceNode,
  ReferenceNodeOut: ReferenceNode,
}
