import { Sidebar } from '@cp/cms/app/components'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
