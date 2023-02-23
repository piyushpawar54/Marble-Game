import { OrbitControls } from '@react-three/drei';
import { Physics, Debug } from '@react-three/rapier';
import { Levels } from './Levels.jsx';
import Lights from './Lights.jsx';

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <Physics>
        <Debug />
        <Lights />
        <Levels />
      </Physics>
    </>
  );
}
