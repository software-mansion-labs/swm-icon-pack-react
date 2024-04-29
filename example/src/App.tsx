import { Icon } from '@swm-labs/swm-icon-pack-react';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'blue',
      }}
    >
      <Icon name="air" variant="curved" size={100} />
      <Icon name="alarm" color="red" />
      <Icon name="arrow-right" color="green" variant="broken" />
    </div>
  );
}

export default App;
