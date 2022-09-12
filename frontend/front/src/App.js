import React, {useEffect,useState} from 'react'
import instance from "./services/instance";
import  {successToast,errorToast} from './Message'

import {
  useFullnamedataQuery,
  usePostdataMutation,
  useUpdatedataMutation,
  useDeletedataMutation
} from './services/getapi'



import { ToastContainer } from 'react-toastify';

function App() {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)

  const { data:fullnameapidata,isLoading,isSuccess,isError,error} = useFullnamedataQuery()
  const [postData] = usePostdataMutation()
  const [updateData] = useUpdatedataMutation()
  const [deleteData] = useDeletedataMutation()



  const _get_data = async() =>{
    setloading(true)
    instance({
      url:"api/",
      method:"GET",
    }).then((res)=>{
      // console.log(res.data)
      setdata(res.data)
      successToast("data Loaded")
    }).catch((err)=>{
      console.log(err)
    })

    setloading(false)
  }

  const _send_data = async() =>{
    var data = {
      first_name: "rohit",
      last_name:"sharma"
    };
    // using axios instance
    instance({
      url:"api/",
      method:"POST",
      data:data
    }).then((res)=>{
      console.log(res)
      successToast("data created")
    }).catch((err)=>{
      console.log(err.response.data["first_name"][0]);
      errorToast(err.response.data["first_name"][0])
    })

     // using rtk-query
     let data_to_send = postData({
      first_name: "",
      last_name:"klod"
    })
    data_to_send.then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
      let content
  if (isLoading){
    content = <p>Loading ....</p>
  } else if (isSuccess) {
    console.log(isSuccess);
    content = JSON.stringify(fullnameapidata)
  } else if (isError) {
    console.log(isError);
    console.log(error)
    content = <p>Error while fetching data</p>
  }
  })
  }



  return (
    <div className="App">
      <button
      onClick={()=>{
        _get_data()
      }}
      >
        Get data
      </button>
      <button
      onClick={()=>{
        _send_data()
      }}
      >
        Post data
      </button>
      {(data)?.map((single_data,index)=>{
          return (
            <div key={index}>
              <p>Full Name : {single_data.first_name} {single_data.last_name}</p>
              <button
                onClick={()=>{
                  deleteData({id:single_data.id+"/"})
                }}>
                  Delete
                </button>
            </div>
          )
        })
      }
      {(loading)?"Loading":null}


      {/* {content?content:null} */}

      <ToastContainer />
    </div>
  );
}

export default App;
