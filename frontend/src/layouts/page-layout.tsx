import GlobalSidebar from "@/components/global-sidebar"
import LayoutProvider from "./layout-provider"

type Props = React.PropsWithChildren

const PageLayout = ({ children }: Props) => {

  return (
    <LayoutProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <GlobalSidebar />

        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            {children}
          </main>
        </div>
      </div>
    </LayoutProvider>
  )
}

export default PageLayout