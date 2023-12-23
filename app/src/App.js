import './App.css';
import { HomePage } from './pages/home';
import { DefaultLayout } from './layouts/deafult';
import AppRouter from './routes/router';
import { BookProvider } from './providers/BookProvider';

function App() {
  return (
    <div>
      <BookProvider>
        <AppRouter />
      </BookProvider>
    </div>
  );
}

export default App;
