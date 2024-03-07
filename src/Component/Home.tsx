import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { HiMiniArrowDown } from "react-icons/hi2";
interface ModelProps {
  scale : number,

}

function Model(props: ModelProps) {
  const { scene, materials, ...rest } = useGLTF("/rick3.glb");


  Object.values(materials).forEach((material: any) => {
      if (material.color) {
          material.color.convertSRGBToLinear(); 
      }
  });

  return <primitive object={scene} scale={0.009} {...rest} />;
}
 
const Home: React.FC = () => {
  return (
      <div className='h-auto w-full gap-y-20 flex flex-col bg-zinc-900'>
        <div className='container flex items-center justify-center flex-col mx-auto gap-y-20  w-full h-screen'>
         <div className='h-5/6 w-full'>
         <Canvas dpr={[1, 2]} shadows camera={{ fov: 35 }}>
            <color attach={'background'} args={['#18181B']}></color>
            <ambientLight intensity={Math.PI / 20} />
            <spotLight position={[6, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-5, -10, -10]} decay={0} intensity={Math.PI} />
            <PresentationControls speed={1.5} global zoom={.4} polar={[-0.5, Math.PI / 4]}>
                <Stage environment={"forest"}>
                    <Model scale={0} />
                </Stage>
            </PresentationControls>
        </Canvas>
         </div>
        <div className='w-full h-1/6 items-center flex justify-center'>
          <span className='text-white'><HiMiniArrowDown className='animate-bounce text-8xl text-white' /></span>
        </div>
        </div>


        <div className='container flex flex-col gap-y-5 w-full mx-auto h-[40rem] '>
          <div className='w-full h-60 gap-x-10 grid grid-cols-3'>
          <a href='/category' >
            <div className='w-full h-full px-2 py-2 hover:px-0 hover:py-0 transition-all duration-300 delay-50 easy-in'>
              <div className='w-full flex items-center flex flex-col justify-center h-full bg-gray-200 rounded-xs'>
              <span className='text-zinc-900 text-4xl font-bold font-bebas '>Kategoriler</span>
              </div>
            </div>
            </a>

            <a href='/location' >
            <div className='w-full h-full px-2 py-2 hover:px-0 hover:py-0 transition-all duration-300 delay-50 easy-in'>
              <div className='w-full flex items-center flex flex-col justify-center h-full bg-gray-200 rounded-xs'>
              <span className='text-zinc-900 text-4xl font-bold font-bebas '>Lokasyonlar</span>
              </div>
            </div>
            </a>

            <a href='/episode' >
            <div className='w-full h-full px-2 py-2 hover:px-0 hover:py-0 transition-all duration-300 delay-50 easy-in'>
              <div className='w-full flex items-center flex flex-col justify-center h-full bg-gray-200 rounded-xs'>
              <span className='text-zinc-900 text-4xl font-bold font-bebas '>Bölümler</span>
              </div>
            </div>
            </a>
          </div>
          <a href='/favorite' >
            <div className='w-full h-60 gap-x-10 grid grid-cols-1 items-center justify-center'>
            
             <div className='w-full h-full px-2 py-2 hover:px-0 hover:py-0 transition-all duration-300 delay-50 easy-in'>
              <div className='w-full flex items-center flex flex-col justify-center h-full bg-gray-200 rounded-xs'>
              <span className='text-zinc-900 text-4xl font-bold font-bebas '>Favoriler</span>
              </div>
             </div>
            </div>
          </a>
        </div>
    </div>
  );
};

export default Home;
