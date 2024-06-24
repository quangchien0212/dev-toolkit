import { TooltipProvider } from "@radix-ui/react-tooltip"

type Props = React.PropsWithChildren

const LayoutProvider = ({ children }: Props) => {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  )
}

export default LayoutProvider