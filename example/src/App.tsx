import { Icon } from '@swmansion/icons'

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
      <Icon name="air" type="curved" size={100} />
      <Icon name="alarm" color="red" />
      <Icon name="arrow-right" color="green" type="broken" />
    </div>
  )
}

export default App
