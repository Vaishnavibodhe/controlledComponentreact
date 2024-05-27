import React ,{ useState}from 'react'

const App = () => {
  const [useObj, setUseobj] = useState(
    {
      uname:"",
      uemail:'',
      upassword:'',
      uphone:'',
      index:''  
  }
);
const [userData, setUserData] = useState([])
 
let getValue=(e)=>{ //onchange means entering data to input tha will save 
  let oldData={...useObj}
  let inputName=e.target.name; //for name
  let inputValue=e.target.value;//this is for value 
   oldData[inputName]=inputValue;
   setUseobj(oldData);      //update jisko krna hai vo yaha likhna hai
 }
 let handleSubmit=(e)=>{
  let currentUser={
    uname:useObj.uname,
    uemail:useObj.uemail,
    upassword:useObj.upassword,
    uphone:useObj.uphone
  }

  let checkFilter=userData.filter((v)=> //thiis is for checking email or phone 
  //is that already exist intable? or not if yes then alert or enter data
  v.uemail==useObj.uemail || v.uphone==useObj.uphone)

  if(checkFilter.length==1){ //if already exist then alert
    alert("Email or Phone already exist");
  }
  else{//else again we can enter value
  //current user is storing all data
  let oldUserdata=[...userData,currentUser]//we cannot add one by one data so we r making
  //one variable for that and storing data there
  e.preventDefault();
  console.log(oldUserdata);
  setUserData(oldUserdata);
  setUseobj( {//for emptying after saving data
    uname:"",
    uemail:'',
    upassword:'',
    uphone:'',
    index:''  
}
)
  }
  



 }
  return (
   <>
   <div  className="flex  bg-black ">
    {userData.length}
    <form  onSubmit={handleSubmit} className=" h-screen  text-white bg-blue-900 w-96">
      
      <div className=" pb-4 text-bold " >
        <h2 className="ml-4">User Name</h2>
        <input type="text" onChange={getValue} value={useObj.uname}name='uname' className="m-6 text-black bg-slate-200 border-gray-600  " />
      </div>
      
      <div className=" pb-4 ">
      <h2 className="ml-4">Email</h2>
      <input  type="text" onChange={getValue}  value={useObj.uemail} name='uemail' className="m-6 ml-9  text-black bg-slate-200 border-gray-600" />
      </div>
      
      <div  className="  pb-4 text-bold">
      <h2 className="ml-4"> PassWord</h2>
      <input  type="text" onChange={getValue} value={useObj.upassword} name='upassword' className="m-6  text-black bg-slate-200 border-gray-600" />
      </div>
     
      <div  className="  pb-4 text-bold">
      <h2 className="ml-4"> Phone</h2>
      <input  type="text" onChange={getValue} value={useObj.uphone} name='uphone' className="m-6  text-black bg-slate-200 border-gray-600" />
      </div>
      <button  className= " w-1/5 bg-blue-500 text-white border ml-8 mb-3">
     {
     useObj.index!=="" ? 'update' : 'save'
     } 
    </button>
    </form>
    <div>
    <table className="table-auto  justify-items-center text-white items-center  p-3 mx-4">
  <thead>
    <tr>
      <th className="m-2 p-3 pr-2">Name</th>
      <th className="m-2 p-3 pr-2">Email</th>
      <th className="m-2 p-3 pr-2">Password</th>
      <th className="m-2 p-3 pr-2">Phone</th>
    </tr>
  </thead>
  <tbody className="ml-4 items-center p-3 text-center text-xl font-bold bg-green-600">
    { userData.length>=1 ?
    userData.map((v,i)=>{
      return(
        <tr key={i} className="bg-green-200  text-white p-3 items-center text-center">
      <td className="p-3 mt-4 mb-3">{v.uname}</td>
      <td className="p-3 mt-4 mb-3">{v.uemail}</td>
      <td className="p-3 mt-4 mb-3">{v.upassword}</td>
      <td className="p-3 mt-4 mb-3">{v.uphone}</td>
    </tr>
      )
    })

    :
    <tr>
      <td>No data found</td>
      </tr> 
}
    
    
  </tbody>
</table>
</div>
     </div>
     
   

   </>
  )
}

export default App