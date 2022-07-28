import React,{useEffect, useState} from 'react'
import { 
    InputLabel,
    OutlinedInput,
    FormHelperText,
    FormControl,
    Button,
    Box,
    Alert,
} from '@mui/material'

const Form = () => {
// Inputs 
    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)
    const [name,setName] = useState(false)
// Values
    const [emailValue,setEmailValue] = useState("")
    const [passwordValue,setPasswordValue] = useState("")
    const [nameValue,setNameValue] = useState("")
// Success
    const [isSuccess,setIsSuccess] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
       if(emailValue === ""){
        setEmail(true)
       }
       if(passwordValue === ""){
        setPassword(true)
       }
       if(nameValue === ""){
        setName(true)
       }

       if(emailValue !== "" && passwordValue !== "" && nameValue !== ""){
        setIsSuccess(true)
        setEmailValue("")
        setPasswordValue("")
        setNameValue("")
        setEmail(false)
        setPassword(false)
        setName(false)
       }
       
      
        // console.log(`${emailValue}  ${passwordValue}  ${nameValue} `);
      }

    //   Show The Alert Box Within 1s
      useEffect(()=>{

        setTimeout(() => {
            setIsSuccess(false)
        }, 2500);

      },[isSuccess])
      

  return (

     <form onSubmit={handleSubmit}>
    <Box sx={{textAlign:"center",marginBottom:"20px"}}>
      <FormControl sx={{margin:"10px auto",width:"80%"}}>
          <InputLabel>Email Address</InputLabel>
          <OutlinedInput value={emailValue} type="email" label="Email Address" onChange={(e)=>(setEmailValue(e.target.value))} />
          {email && <FormHelperText>* this field is required</FormHelperText>}
      </FormControl>
      <FormControl sx={{margin:"10px auto ",width:"80%"}}>
          <InputLabel>Password</InputLabel>
          <OutlinedInput value={passwordValue} type="password" label="Password" onChange={(e)=>(setPasswordValue(e.target.value))} />
          {password && <FormHelperText>* this field is required</FormHelperText>}
      </FormControl>
      <FormControl sx={{margin:"10px auto",width:"80%"}}>
          <InputLabel>Store Name</InputLabel>
          <OutlinedInput value={nameValue}  type="text" label="Store Name" onChange={(e)=>(setNameValue(e.target.value))} />
          {name && <FormHelperText>* this field is required</FormHelperText>}
      </FormControl>
            {isSuccess &&  <Alert severity="success" sx={{margin:"10px auto",width:"90%"}}>Your Store Created Successfully !!</Alert>}
      <Button type="submit" variant="contained" size="meduim">Create Your Store</Button>
    </Box>

    </form>


  )
}

export default Form