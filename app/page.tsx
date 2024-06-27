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

      <div className='flex space-x-4 items-center justify-center py-10'>
        <PButton size='sm'>Small</PButton>
        <PButton size='md'>Default</PButton>
        <PButton size='lg'>Large</PButton>
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
