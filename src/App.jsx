import './App.css';
import { Button } from './components/ui/button';
import { Card,
  CardHeader, 
  CardFooter,
  CardTitle,
  CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';



function App() {
  

  return (

    <div className='ml-96'>
<Card className="w-[350px] m-20 items-center" >
  <CardHeader>
    <CardTitle>Login</CardTitle>
  </CardHeader>
  <CardContent>
    <div className='grid w-full gap-4' >
    <div className='flex flex-col items-start space-y-2' >
      <Label>Email</Label>
      <Input type="email" placeholder="n@example.com" ></Input>
    </div>
    <div className='flex flex-col items-start space-y-2'>
      <Label>Password</Label>
      <Input></Input>
    </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full" >Create account</Button>
  </CardFooter>
  <CardFooter>
    <Button className="w-full" >Sign-up</Button>
  </CardFooter>
    </Card>
    </div>
    
  )
}

export default App;
