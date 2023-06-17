
import {   useState } from 'react';
import './App.css';
import axios from 'axios';
import TypewriterEffect from './TypewritterEffect';
import { Button, Text } from '@chakra-ui/react';


function App() {
  const [data,setdata]=useState("")
  const [responseData, setResponseData] = useState('');
  const [flag,setflag]=useState(false)
  function fetchfun(){
  return   axios.post("https://actual-shoes-api.onrender.com/ask",{message:data})
    .then((res)=>{
      console.log(res)
      setResponseData(res.data.completion.content)
    })
    .catch((err)=>console.log(err))
  }
  const handlesubmit=(e)=>{
    if(responseData){
      setflag(false)
    }
e.preventDefault()
fetchfun().then(()=>{
  setflag(true)
  setdata("")
})


  }



  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <input onChange={(e)=>setdata(e.target.value)} value={data} name='data' type='text' placeholder='Ask Here' style={{width:"40%",height:"40px",margin:"20px"}} />
        <Button colorScheme='teal' variant='outline'><input type='submit' /></Button>
      </form>
      <hr></hr>
 {flag ? <TypewriterEffect data={responseData} />  : data ?<Text fontSize={{base:"21px",md:"50px"}} color={"red.200"}>Wait few Sec after Clicking😁</Text> :""}
    </div>
  );
}

export default App;
