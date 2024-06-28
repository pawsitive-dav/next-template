import type { Metadata } from 'next'
import PButton from './components/Ui/PButton'
import PIcon from './components/Ui/PIcon'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  return (
    <>
      <section className='bg-blue-600 py-[120px]'>
        <div className='container flex flex-row space-x-6'>
          <div className='basis-1/2 bg-gray-300'>
            <div>BRILLIANCE IN EXECUTION</div>
          </div>
          <div className='basis-1/2 bg-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, maxime.
          </div>
        </div>
      </section>

      <div className='flex flex-col space-y-4 items-center justify-center py-10'>
        <div className='text-title font-semibold'>Button Size</div>
        <div className='flex items-center space-x-4'>
          <PButton size='sm' loading>
            Small
          </PButton>
          <PButton size='md' loading>
            Default
          </PButton>
          <PButton size='lg' loading>
            Large
          </PButton>
        </div>
        <div className='text-title font-semibold'>Button Loading</div>
        <div className='flex items-center space-x-4'>
          <PButton size='sm' disabled>
            Small
          </PButton>
          <PButton size='md' disabled>
            Default
          </PButton>
          <PButton size='lg' disabled>
            Large
          </PButton>
        </div>

        <div className='text-title font-semibold'>Button Colors</div>
        <div className='flex items-center space-x-4'>
          <PButton>Normal</PButton>
          <PButton color='primary'>Primary</PButton>
          <PButton color='info'>Info</PButton>
          <PButton color='success'>Success</PButton>
          <PButton color='warning'>Warning</PButton>
          <PButton color='error'>Error</PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton disabled>Normal</PButton>
          <PButton color='primary' disabled>
            Primary
          </PButton>
          <PButton color='info' disabled>
            Info
          </PButton>
          <PButton color='success' disabled>
            Success
          </PButton>
          <PButton color='warning' disabled>
            Warning
          </PButton>
          <PButton color='error' disabled>
            Error
          </PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton loading>Normal</PButton>
          <PButton color='primary' loading>
            Primary
          </PButton>
          <PButton color='info' loading>
            Info
          </PButton>
          <PButton color='success' loading>
            Success
          </PButton>
          <PButton color='warning' loading>
            Warning
          </PButton>
          <PButton color='error' loading>
            Error
          </PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton variant='outline'>Normal</PButton>
          <PButton color='primary' variant='outline'>
            Primary
          </PButton>
          <PButton color='info' variant='outline'>
            Info
          </PButton>
          <PButton color='success' variant='outline'>
            Success
          </PButton>
          <PButton color='warning' variant='outline'>
            Warning
          </PButton>
          <PButton color='error' variant='outline'>
            Error
          </PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton variant='soft'>Normal</PButton>
          <PButton color='primary' variant='soft'>
            Primary
          </PButton>
          <PButton color='info' variant='soft'>
            Info
          </PButton>
          <PButton color='success' variant='soft'>
            Success
          </PButton>
          <PButton color='warning' variant='soft'>
            Warning
          </PButton>
          <PButton color='error' variant='soft'>
            Error
          </PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton variant='text'>Normal</PButton>
          <PButton color='primary' variant='text'>
            Primary
          </PButton>
          <PButton color='info' variant='text'>
            Info
          </PButton>
          <PButton color='success' variant='text'>
            Success
          </PButton>
          <PButton color='warning' variant='text'>
            Warning
          </PButton>
          <PButton color='error' variant='text'>
            Error
          </PButton>
        </div>
      </div>

      <section className='h-[1000px]'>
        <div className='container p-6 text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus voluptates
          officia itaque, earum ex cumque! Maiores incidunt laboriosam repellat a necessitatibus
          numquam omnis totam repellendus? Dignissimos facilis minima accusantium eligendi natus. Ab
          optio, deserunt debitis natus vitae aspernatur perspiciatis repellendus doloremque
          perferendis iusto, fugit et corporis repudiandae itaque, cupiditate recusandae possimus
          delectus voluptate dolorem? Mollitia, eligendi? A fuga voluptatibus ipsam! Nemo optio
          ipsum modi tempora cumque natus consectetur impedit dolorem quibusdam obcaecati hic
          aliquam accusamus sapiente odit, ab sequi quam fugiat aliquid doloremque qui voluptas.
          Corporis placeat ex modi excepturi iusto reiciendis quos, veritatis hic aliquid porro,
          natus incidunt?
        </div>
      </section>
    </>
  )
}
