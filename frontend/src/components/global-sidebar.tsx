import { toolList } from "@/constants/tools"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { BookOpenCheck, Hammer, Settings } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Ping } from '@backend/go/app/App'

const GlobalSidebar = () => {
  const { pathname: currentPath } = useLocation()

  const handleBackendTest = async () => {
    const msg = await Ping()

    console.log(msg)
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Hammer className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {toolList.map(tool => {
          const { name, icon: Icon, path } = tool
          const isActive = currentPath === path

          return (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Link
                  to={path}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    isActive && "text-foreground bg-primary/[0.1]"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{name}</TooltipContent>
            </Tooltip>
          )
        })}
      </nav>

      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 cursor-pointer"
              onClick={handleBackendTest}
            >
              <BookOpenCheck className="h-5 w-5" />
              <span className="sr-only">Check backend task</span>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">Check backend task</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}

export default GlobalSidebar