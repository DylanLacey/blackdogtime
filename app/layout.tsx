import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Noto_Serif } from 'next/font/google'
import './globals.css'
import { Todo } from '@/components/todo'
import { Quoter } from '@/components/quoter'

const noto_serif = Noto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blackdogti.me',
  description: 'No! Bad Dog!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-antiflashwhite-50 text-raisin-400">
      <body className={noto_serif.className + " min-h-screen grid grid-cols-5"}>
        
        <div id="header" className="col-span-full row-start-1 text-raisin-500 ">
          <div className="m-10 h-32 w-64 flex items-center">
            <div className="h-full w-2/4 bg-mustard-500 rounded-lg flex items-center justify-end">
              <h2 className="mx-1">Blackdog</h2>
            </div>
            <div className="mx-1 items-center justify-start">
              <h2>ti.me</h2>
            </div>
            
          </div>
        </div>

        <div id="quote" className="px-4 pb-4 col-start-2 col-span-3 mt-2">
          <Quoter userStyles="content-left text-base" />
        </div>
        <div className="col-start-5 col-span-1 bg-mustard-500 ">
          <Todo userStyles="p-4" />
        </div>
        <div className="col-start-2 row-start-3">
          {children}
        </div>
        {/* <div className="row-[span_6_/_span_6] col-start-5  bg-mustard-500"></div> */}
        <div className="row-span-10 col-start-5  bg-mustard-500"></div>
      </body>
    </html>
  )
}
