// Create a context for theme
const ThemeContext = React.createContext();

// Provide theme state and toggle function through context
const ThemeProvider = ({children}) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
