import { SquareDashedBottomCode } from "lucide-react"

type TTool = {
  name: string
  icon: React.ElementType
  path: string
}

export const toolList: TTool[] = [
  {
    name: 'JWT Decode',
    icon: SquareDashedBottomCode,
    path: '/jwt'
  }
]

