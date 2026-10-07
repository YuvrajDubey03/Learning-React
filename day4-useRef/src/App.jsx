import Form from './components/form'
import RHF from './components/RHF';

const App = () => {
  console.log("app is rendering");
  
  return (
    <div className="h-screen bg-gray-400 p-5">
      <h1 className="text-white text-xl font-semibold mb-3">This is form</h1>
      {/* <Form /> */}
      <RHF />
    </div>
  )
}

export default App
