import './App.css';
import { HomePage } from './pages/home';
import { DefaultLayout } from './layouts/deafult';
import AppRouter from './routes/router';

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
