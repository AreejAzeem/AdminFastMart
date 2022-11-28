import { width } from "@mui/system";
import React from "react";
import "./Offer.css";
function Offer(offer) {
  console.log(offer.offer);

  return (
    <div className="offer">
      <div className="offer_Wrapper">
        <div className="offer_Container">
          <div className="offer_LeftContainer">
            <div className="offer_LeftContainer_title">
              <h5 className="offer_LeftContainer_h1">{offer.offer.advertismentTitle}</h5>
              {/* <h5 style={{
                fontSize: "1.5rem",
                marginTop: "0.1rem",
                marginLeft: "0.3rem",
              }}>!</h5> */}
            </div>
            <div className="offer_LeftContainer_description">{offer.offer.advertismentDesc}</div>
            <div style={{display:'flex',justifyContent:'space-between',
            width:'90%',alignSelf:'center'
       }}>
            {/* <div className="offerRightConatiner_validDiv">
                <h5 style={{
                    fontSize:"1rem",
                    marginTop:'1px'
                }}>From</h5>
                <h5 style={{
                    fontSize:"0.8rem",
                    color:'gray',
                    marginLeft:"5px",
                    marginRight:"5px",
                    width:"fit-content",
                    padding:"4px",
                    borderRadius:"5px",
                }}>{offer.offer.startDate}</h5>
                <h5 style={{
                    fontSize:"1rem",
                }}>Till</h5>
                <h5  style={{
                   fontSize:"0.8rem",
            
                    color:'gray',
                    marginLeft:"5px",
                    marginRight:"5px",
                    width:"fit-content",
                    padding:"4px",
                    borderRadius:"5px",
                }}>{offer.offer.endDate}</h5>
               </div> */}
               <div className="offer_RightContainer_categoryDiv">
                <div className="offer_RightContainer_categoryhead">
                    <h5 style={{
                        fontSize:"0.9rem",
                     color:'var(--orangestandard)',
                     marginTop:"4px",
                     marginLeft:"30px",

                    }}>Category : </h5>
                </div>
                <div className="offer_RightContainer_category">
                    <h5 style={{
                        fontSize:"0.9rem",
                        color:"black",
                        border:"1px solid white",
                     
                        borderRadius:"0.5rem",
                        padding:"0.3rem",
                    }}>{offer.offer.categoryId.categoryName}</h5>
                </div>

            </div>
            <div className="offer_RightContainer_discountDiv">
                <div className="offer_RightContainer_discounthead">
                    <h5 style={{
                        fontSize:"0.9rem",
                     color:'var(--orangestandard)',
                     marginTop:"4px"

                    }}>Discount : </h5>
                    <h5 >{offer.offer.discount}{"%"}</h5>
                  </div>
            </div>
            
               </div>
                 <div className="offerRightConatiner_validDiv">
                <h5 style={{
                    fontSize:"1rem",
                    marginTop:"4px",
                }}>From</h5>
                <h5 style={{
                    fontSize:"1rem",
                
                    color:'gray',
                    marginLeft:"10px",
                    width:"fit-content",
                    padding:"4px",
                    borderRadius:"5px",
                }}>{offer.offer.startDate}</h5>
                <h5 style={{
                    fontSize:"1rem",
                    marginTop:"4px",
                    marginLeft:"10px",
                }}>Till</h5>
                <h5  style={{
                    fontSize:"1rem",
                    backgroundColor:"",
                    color:'gray',
                    marginLeft:"10px",
                    width:"fit-content",
                    padding:"4px",
                    borderRadius:"5px",
                }}>{offer.offer.endDate}</h5>
               </div> 

          </div>
         <div
         className="offer_RightContainer"
         >
           
            {/* <div className="offerRigntContainer_bottom"> */}
              
            {/* </div> */}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
