export const Card = () => {
  return (
    <div className='mx-auto w-full max-w-sm rounded-md border border-gray-300 p-4 shadow'>
      <div className='flex animate-pulse space-x-4'>
        <div className='h-12 w-12 rounded-full bg-gray-400'></div>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-4 w-3/4 rounded bg-gray-400'></div>
          <div className='space-y-2'>
            <div className='h-4 rounded bg-gray-400'></div>
            <div className='h-4 w-5/6 rounded bg-gray-400'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
