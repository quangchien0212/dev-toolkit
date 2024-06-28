import { NotebookPen } from 'lucide-react';

type TTool = {
  name: string
  icon: React.ElementType
  path: string
}

export const toolList: TTool[] = [
  {
    name: 'Notes',
    icon: NotebookPen,
    path: '/notes'
  }
]

