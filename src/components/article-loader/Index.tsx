const ArticleLoader = () => {
    return (
        <li className='flex flex-col bg-white rounded-lg w-full h-[22rem] max-w-[17.3rem] sm:w-[17.3rem] animate-pulse'>
            <div className="h-40">

      <svg className="block w-full h-full bg-gray-200 p-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#f8f6f7" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
            </div>
      <div className='flex flex-col bg-white mb-2 justify-start w-full h-full mt-3 p-6 gap-3'>        
          <div className='h-4 bg-gray-200 w-full rounded-full'></div>
          <div className='h-4 bg-gray-200 w-full rounded-full -mt-2'></div>
          <div className='h-4 w-full bg-gray-200 rounded-full mt-4'></div>
          <div className='h-4 w-full bg-gray-200 rounded-full -mt-2'></div>
        </div>
    </li>
    )
}

export default ArticleLoader