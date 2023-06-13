import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DarkModeProvider } from './context/DarkModeContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CategoryToggleProvider } from './context/CategoryToggleContext.tsx';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <DarkModeProvider>
      <CategoryToggleProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </CategoryToggleProvider>
    </DarkModeProvider>
  </RecoilRoot>
);
