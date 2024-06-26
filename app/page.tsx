import type { Metadata } from 'next'
import PButton from './components/Ui/PButton'
import PIcon from './components/Ui/PIcon'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <h1 className='text-header-1 font-bold'>Home Page</h1>
      <p>
        Cats are independent, playful, and affectionate creatures that bring joy to many households.
      </p>
      <div className='py-4'>
        <PIcon name={'arrow-path'} size={'6'} color={'primary'} />
      </div>
      <div className='py-4'>
        <PButton disabled>disable</PButton>
      </div>
      <div className='py-4 flex items-center space-x-4'>
        <PButton size='sm'>Small button</PButton>
        <PButton size='md'>Default button</PButton>
        <PButton size='lg'>Large button</PButton>

        <PButton size='sm' loading>
          Small button
        </PButton>
        <PButton size='md' loading>
          Default button
        </PButton>
        <PButton size='lg' loading>
          Large button
        </PButton>
      </div>

      <div className='py-4 w-[500px]'>
        <div className='bg-slate-800 p-4 m-2 text-white'>Box Color</div>
        <div className='py-4 m-2'>
          <h1 className='text-lg font-bold'>Text Title</h1>
          <p className='text-soft'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore, dolor esse
            voluptatum culpa modi perferendis tenetur fugit nostrum soluta.
          </p>
          <p className='text-disable cursor-not-allowed'>Text Disable...</p>
        </div>

        <div className='bg-blue-500 p-4 m-2 text-white'>Box Color</div>
        <div className='py-4 m-2 text-primary'>
          <h1 className='text-lg font-bold'>Text Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore, dolor esse
            voluptatum culpa modi perferendis tenetur fugit nostrum soluta.
          </p>
        </div>

        <div className='bg-sky-500 p-4 m-2 text-white'>Box Color</div>
        <div className='py-4 m-2 text-info'>
          <h1 className='text-lg font-bold'>Text Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore, dolor esse
            voluptatum culpa modi perferendis tenetur fugit nostrum soluta.
          </p>
        </div>

        <div className='bg-emerald-500 p-4 m-2 text-white'>Box Color</div>
        <div className='py-4 m-2 text-success'>
          <h1 className='text-lg font-bold'>Text Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore, dolor esse
            voluptatum culpa modi perferendis tenetur fugit nostrum soluta.
          </p>
        </div>

        <div className='bg-yellow-500 p-4 m-2 text-white'>Box Color</div>
        <div className='py-4 m-2 text-warning'>
          <h1 className='text-lg font-bold'>Text Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore, dolor esse
            voluptatum culpa modi perferendis tenetur fugit nostrum soluta.
          </p>
        </div>

        <div className='bg-red-500 p-4 m-2 text-white'>Box Color</div>
        <div className='py-4 m-2 text-error'>
          <h1 className='text-title font-medium'>Text Title</h1>
          <p className='text-base'>
            <span className='text-soft'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore, dolor esse
              voluptatum culpa modi
            </span>{' '}
            <span className='font-medium'>perferendis</span>{' '}
            <span className='text-soft'>tenetur fugit nostrum soluta.</span>
          </p>
        </div>

        <div className='flex flex-col space-y-2 my-[100px]'>
          <p className='text-overline'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, culpa?
          </p>
          <p className='text-caption'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, culpa?
          </p>
          <p className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, culpa?
          </p>
          <h5 className='text-subtitle'>Subtitle</h5>
          <h4 className='text-title'>Title</h4>
          <h3 className='text-header-3'>Header 3</h3>
          <h2 className='text-header-2'>Header 2</h2>
          <h1 className='text-header-1'>Header 1</h1>
        </div>
      </div>
    </div>
  )
}
