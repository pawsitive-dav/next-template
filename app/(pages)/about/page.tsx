import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function Page() {
  return (
    <section className='px-6'>
      <div className='container border my-10 bg-blue-100'>
        <h1 className='text-header-1 mt-6'>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita iste, omnis rerum
          quia, earum consequatur exercitationem quas perferendis suscipit tenetur amet minus
          itaque. Cum, harum optio saepe itaque quod consectetur error earum aut veniam in sunt.
          Architecto eaque tempore dicta quod natus? Similique unde ab repudiandae neque vel eaque?
        </p>
      </div>
    </section>
  )
}
