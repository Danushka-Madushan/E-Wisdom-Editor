// main.tsx or main.jsx
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <Toaster />
      <App />
    </main>
  </NextUIProvider>,
)
