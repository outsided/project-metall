import { AppProvider } from "@/components/providers"
import { HomePage } from "@/pages/home"

export default function Home(){
  return (<AppProvider >
         <HomePage/>
    </AppProvider>
  )
}