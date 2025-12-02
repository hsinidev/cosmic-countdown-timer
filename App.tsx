
import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import CountdownTimerTool from './components/CountdownTimerTool';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <CountdownTimerTool />
    </ThemeLayout>
  );
};

export default App;
