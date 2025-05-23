// App.tsx (exemplo)
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './style/App.css';

const App: React.FC = () => {
  return (
    <div className="page-container">
      <NavBar />
      <div className="content-wrap">
        <h1>Bem-vindo ao Security Hub!</h1>
        <p>Gerencie suas senhas com segurança e praticidade.</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
