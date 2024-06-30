import type { Metadata } from 'next'
import PButton from '@/app/components/Ui/PButton'
import PIcon from '@/app/components/Ui/PIcon'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  const uiControl = {
    loading: true,
    disabled: false,
  }

  return (
    <>
      <section className='bg-blue-600 py-[120px]'>
        <div className='container flex flex-row space-x-6'>
          <div className='basis-1/2'>
            <div className='flex space-x-4'>
              <PButton color='primary'>Get Started</PButton>
              <PButton color='info' variant='outline'>
                Free Try
              </PButton>
            </div>
          </div>
          <div className='basis-1/2 bg-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, maxime.
          </div>
        </div>
      </section>

      <div className='flex flex-col space-y-4 items-center justify-center py-10'>
        <div className='text-title font-semibold'>Button Test</div>
        <div className='flex items-center space-x-4'>
          <PButton disabled={uiControl.disabled} loading={uiControl.loading}>
            Normal
          </PButton>
          <PButton color='primary' disabled={uiControl.disabled} loading={uiControl.loading}>
            Primary
          </PButton>
          <PButton color='info' disabled={uiControl.disabled} loading={uiControl.loading}>
            Info
          </PButton>
          <PButton color='success' disabled={uiControl.disabled} loading={uiControl.loading}>
            Success
          </PButton>
          <PButton color='warning' disabled={uiControl.disabled} loading={uiControl.loading}>
            Warning
          </PButton>
          <PButton color='error' disabled={uiControl.disabled} loading={uiControl.loading}>
            Error
          </PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton variant='outline' disabled={uiControl.disabled} loading={uiControl.loading}>
            Normal
          </PButton>
          <PButton
            color='primary'
            variant='outline'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Primary
          </PButton>
          <PButton
            color='info'
            variant='outline'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Info
          </PButton>
          <PButton
            color='success'
            variant='outline'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Success
          </PButton>
          <PButton
            color='warning'
            variant='outline'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Warning
          </PButton>
          <PButton
            color='error'
            variant='outline'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Error
          </PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton variant='soft' disabled={uiControl.disabled} loading={uiControl.loading}>
            Normal
          </PButton>
          <PButton
            color='primary'
            variant='soft'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Primary
          </PButton>
          <PButton
            color='info'
            variant='soft'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Info
          </PButton>
          <PButton
            color='success'
            variant='soft'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Success
          </PButton>
          <PButton
            color='warning'
            variant='soft'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Warning
          </PButton>
          <PButton
            color='error'
            variant='soft'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Error
          </PButton>
        </div>
        <div className='flex items-center space-x-4'>
          <PButton variant='text' disabled={uiControl.disabled} loading={uiControl.loading}>
            Normal
          </PButton>
          <PButton
            color='primary'
            variant='text'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Primary
          </PButton>
          <PButton
            color='info'
            variant='text'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Info
          </PButton>
          <PButton
            color='success'
            variant='text'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Success
          </PButton>
          <PButton
            color='warning'
            variant='text'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Warning
          </PButton>
          <PButton
            color='error'
            variant='text'
            disabled={uiControl.disabled}
            loading={uiControl.loading}
          >
            Error
          </PButton>
        </div>
      </div>
    </>
  )
}
