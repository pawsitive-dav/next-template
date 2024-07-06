'use client'

import PButton from '@/app/components/Ui/PButton'
import PCard from '@/app/components/Ui/PCard'
import PCardBody from '@/app/components/Ui/PCardBody'
import PCardFooter from '@/app/components/Ui/PCardFooter'
import PCardHeader from '@/app/components/Ui/PCardHeader'

export default function Page() {
  return (
    <>
      <div className='container py-20'>
        <div className='mb-4'>
          <h1 className='text-header-2 font-semibold'>App Document</h1>
        </div>

        <div className='py-10'>
          <PCard>
            <PCardHeader>Header Title</PCardHeader>
            <PCardBody>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste inventore, dolorem
              quidem id suscipit debitis vel nesciunt, molestias similique nam quae veniam
              praesentium ipsum dignissimos consequatur, laboriosam eveniet iure voluptas.
            </PCardBody>
            <PCardFooter>
              <PButton>Close</PButton>
              <PButton>Create</PButton>
            </PCardFooter>
          </PCard>
        </div>

        <section className='p-4 border border-gray-200 rounded-md'>
          <div className='mb-4'>
            <div className='text-title font-semibold'>#Transform</div>
            <p className='text-soft'>Text can be transformed with text capitalization classes</p>
          </div>
          <div className='flex flex-col space-y-4 bg-gray-100 p-4'>
            <p className='uppercase'>This text will be uppercase. </p>
            <code className='px-2 py-1 rounded-md bg-gray-900 text-white w-fit'>{`<p className='uppercaspe'>text</p>`}</code>
            <p className='lowercase'>THIS TEXT WILL BE LOWERCASE.</p>
            <p className='capitalize'>this text will be capitalized.</p>
          </div>
        </section>

        <section className='my-6 p-4'>
          <div className='flex space-x-2'>
            <p className='truncate'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quasi!
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
