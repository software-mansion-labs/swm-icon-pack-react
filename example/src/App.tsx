import { Icon } from '@swm-labs/swm-icon-pack-react';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'blue' }}>
      <Icon name='Air' variant='curved' size={100} />
      <Icon name='Alarm' color='red' />
      <Icon name='ArrowDown' color='green' variant='outline' />
    </div>
  );
}

export default App;
