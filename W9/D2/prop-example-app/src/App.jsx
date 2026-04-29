import './App.css'
import { PropBasics } from './components/P1'
import { PropDestructuring } from './components/P2'
import { PropsChildren } from './components/P3';
import {PropDrillingDemo} from './components/P4.jsx'
import{SharedStateParent} from './components/p5.jsx'
import{CompositionDemo} from './components/p6.jsx'
function App() {
  return (
    <>
      {/* <PropBasics/> */}
      {/* <PropDestructuring/> */}
      {/* <PropsChildren/> */}
      {/* <PropDrillingDemo/> */}
      {/* <SharedStateParent/> */}
      <CompositionDemo/>
    </>
  );
}

export default App