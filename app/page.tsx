import packageJSON from '@/package.json'

export default function Home() {
  return (
    <>
      <main className='main'>
        Main: v{ packageJSON.version }
      </main>
    </>
  )
}
