import { createAddNode } from './AddNode'

const addIoNode = createAddNode<string>("a")

addIoNode()

export function AddIONode() {
  return (
    <div>
      add IO node component
    </div>
  )
}
