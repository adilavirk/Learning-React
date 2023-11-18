import { ThemeProvider } from "./Context/theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"
import { useEffect, useState } from "react"

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])



  return (

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            <ThemeBtn />

          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />

          </div>
        </div>
      </div>

    </ThemeProvider>

  )
}

export default App
