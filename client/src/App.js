import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { deepPurple, red } from '@mui/material/colors';
import Home from './pages/Home';
import Layout from './components/Layout';

import { Provider } from 'react-redux'
import store from './app/store'

import ProtectedRoute from './components/ProtectedRoute';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: red
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
        <Layout>
          <Routes>
            <Route element={<ProtectedRoute />}>

            </Route>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Layout>
        </Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
