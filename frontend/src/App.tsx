import { Button } from "@/components/ui/button"
import { Greet } from '@backend/go/app/App'

function App() {
  async function onClick() {
    const name = await Greet("Quang Chien")
    console.log(name)
  }

  return (
    <div className="min-h-screen bg-white grid place-items-center mx-auto py-8">
      <div className="text-blue-900 text-2xl font-bold flex flex-col items-center space-y-4">
        <h1>Vite + React + TS + Tailwind + shadcn/ui</h1>
        <Button onClick={onClick}>Click me</Button>
      </div>
    </div>
  )
}

export default App
