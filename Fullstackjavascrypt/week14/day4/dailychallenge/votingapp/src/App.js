import Option from "./Option";

function App() {
  return (
    <>
      <div style={{
        width : '90vw',
        border: '2px solid red',
        display:'flex',
        justifyContent:'space-around'
        }}
      >
        
        <Option name='javascrypt' />
      </div>
      <div style={{
        width : '90vw',
        border: '2px solid red',
        display:'flex',
        justifyContent:'space-around'
        }}
      >
        
        <Option name='php' />
      </div>
      <div style={{
        width : '90vw',
        border: '2px solid red',
        display:'flex',
        justifyContent:'space-around'
        }}
      >
        
        <Option name='Python' />
      </div>
      <div style={{
        width : '90vw',
        border: '2px solid red',
        display:'flex',
        justifyContent:'space-around',
        }}
      >
        
        <Option name='React' />
      </div>
    </>
  );
}

export default App;
