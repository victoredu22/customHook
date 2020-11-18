import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) =>{

  const isMounted = useRef(true)

  const [state, setState] = useState({data:null, loading:true, error:null});
  

  //pasa por primera vez
  useEffect(()=>{
    return()=>{
      isMounted.current = false
    }
  },[]);

  console.log(state);
  
   useEffect(()=>{
    setState({data:null, loading:true, error:null})


    fetch(url)
      .then(respo=>respo.json())
      .then(data=>{
        

          if(isMounted.current){
            setState({
              loading:false,
              error:null,
              data
            })
          }


  
  
      });
  },[url]) 

  

  return state;

}
