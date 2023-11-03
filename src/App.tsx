import { RouterProvider } from "react-router-dom"
import mainRouter from "./router/mainRouter"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


let client = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
      <RecoilRoot>
      <RouterProvider router={mainRouter}/>
      </RecoilRoot>
      </QueryClientProvider>
    </div>
  )
}

export default App