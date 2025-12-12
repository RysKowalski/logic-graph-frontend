import React, { ChangeEventHandler } from 'react';
import { useState, useCallback } from 'react';
import "./App.css"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  Controls,
  Background,
  NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './nodes/Nodes.css'
import IONode from './nodes/IONode';
import IFNode from './nodes/IfNode';

const initialNodes: Node[] = [
  { id: 'start', position: { x: 0, y: 0 }, data: { label: 'Start' }, type: "input", className: 'start-stop' },
  { id: 'stop', position: { x: 0, y: 50 }, data: { label: 'Stop' }, type: "output", className: 'start-stop' },
  { id: 'Reference', position: { x: 0, y: 100 }, data: {}, type: "input", className: 'reference-node' },
  { id: 'IONode', position: { x: 0, y: 150 }, data: {}, type: "IONode" },
  { id: 'IFNode', position: { x: 0, y: 200 }, data: {}, type: "IFNode" }
];

const initialEdges: Edge[] = [
  { id: 'start-stop', source: 'start', target: 'stop' },
];


const nodeTypes = {
  IONode: IONode,
  IFNode: IFNode,
}

export default function App(): React.ReactElement {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot));
    },
    [],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
