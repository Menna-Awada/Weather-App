
function LoadingSkeleton(){
    return (
        <div>
            <div className="skeleton">
<div style={{height:"2rem", backgroundColor:"#374151", borderRadius:"0.5rem", width:"75%", marginRight:"auto",
     marginLeft:"auto" }}></div>{/*location*/}

     <div style={{height:"1.5rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"50%", marginRight:"auto",
     marginLeft:"auto" }}></div>{/*icon*/}

        <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"66%", marginRight:"auto",
     marginLeft:"auto" }}></div>{/*temperature*/}

        <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"50%", marginRight:"auto",
     marginLeft:"auto" }}></div>{/*humidity*/}

        <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"33%", marginRight:"auto",
     marginLeft:"auto" }}></div>{/*wind*/}
            </div>
            {/*forecast */}
            <div className="skeletonForeCast">
                {[1,2,3].map((day)=>(
                    <div key={day} className="skeleton-card">
                    <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"50%", marginRight:"auto",
     marginLeft:"auto" }}></div>
     <div style={{height:"3rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"3rem", marginRight:"auto",
     marginLeft:"auto" }}></div>

     <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"75%", marginRight:"auto",
     marginLeft:"auto" }}></div>

     <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"66%", marginRight:"auto",
     marginLeft:"auto" }}></div>

     <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"50%", marginRight:"auto",
     marginLeft:"auto" }}></div>

     <div style={{height:"1rem", backgroundColor:"#4b5563", borderRadius:"0.5rem", width:"75%", marginRight:"auto",
     marginLeft:"auto" }}></div>
     </div>
                ))}
            </div>
        </div>
    )
}
export default LoadingSkeleton