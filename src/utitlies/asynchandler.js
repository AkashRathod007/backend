const asynchandler = (repsonseHandler) =>{
    return (req , res , next)=>{
        Promise.resolve(repsonseHandler(req, res , next)).catch((err) =>next(err))
      
    }
}

export{asynchandler}