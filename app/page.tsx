import type { Metadata } from 'next'
import PButton from './components/Ui/PButton'
import PIcon from './components/Ui/PIcon'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold text-blue-600 mb-4'>Home Page</h1>
      <p className='text-lg text-gray-700 mb-6 text-center'>
        Cats are independent, playful, and affectionate creatures that bring joy to many households.
      </p>
      <div className='py-4'>
        <PIcon name={'arrow-path'} size={'6'} color={'blue-700'} />
      </div>
      <div className='py-4'>
        <PButton>
          <PIcon name={'arrow-path'} size={'6'} color={'white'} spin />
          Loading
        </PButton>
      </div>
      <div className='py-4'>
        <PButton disabled>
          <PIcon name={'arrow-path'} size={'6'} color={'white'} />
          disable
        </PButton>
      </div>
      <div className='py-4 flex items-center space-x-4'>
        <PButton size='sm'>Small</PButton>
        <PButton size='md'>Default</PButton>
        <PButton size='lg'>Large</PButton>
      </div>
    </div>
  )
}
