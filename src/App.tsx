import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Header } from './components/layouts/Header';
import { AppRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';

function App() {
  return (
    <>
      <Router>
        <ChakraProvider>
          <Header />
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
