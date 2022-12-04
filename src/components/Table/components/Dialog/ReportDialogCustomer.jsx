import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {FiPlusCircle} from "react-icons/fi";
import {FiMinusCircle} from "react-icons/fi";
import "./ReportDialogCustomer.css";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { ClearAll, WifiLock } from "@mui/icons-material";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import jsPDF from "jspdf";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
   
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ReportDialogCustomer(props) {
  const [opens, setOpens] = React.useState(true);
  const[length, setLength]=useState(5);

  var orderData='';
  const [order, setOrder] = useState();
  
  useEffect(()=>{
    
    console.log("in use EFFECT of receipt")

console.log(props.reportData);

 
  },[]);
 


  const handleClose = () => {
        var doc = new jsPDF( 'p', 'pt', 'a4' );
        doc.html(document.querySelector("#dialog_content"), {
            callback: function (doc) {
                doc.save("report.pdf");
            }

        }
        )
        ;
    

     
       
    setOpens(false);
    props.setOpenReportDialog(false);
    
    
  };
 
 

  return (
    <div style={{width:'30px !important'}} >
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opens}
        fullWidth
        height="200px"
        maxWidth="sm"
      >
        {/* <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Product
        </BootstrapDialogTitle> */}
        <DialogContent id="dialog_content" style={{
            width:"595px",
            marginLeft:"10px"
        }}>
          <div className="receiptDialog">
            <div className="receiptDialog_wrapper">
              <div className="receiptDialog_topContain">
                <div className="receiptDialog_top_header">FastMart</div>
                <div style={{
                    width:"40%",
                    display:'flex',
                    flexDirection:'column',
                    backgroundColor:'var(--orangestandard)',
                    opacity:'0.6',
                    color:"white",
                    textAlign:'center',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <div style={{
                        fontSize:'20px',
                        fontWeight:'bold',
                        padding:'15px',

                    }}> Total Orders</div>
                    <div style={{
                        fontSize:'18px',
                        fontWeight:'bold',
                        marginTop:"-10px"
                      

                    }}>{props.reportData.totalOrder}</div>

                </div>
              </div>
              <div className="reportDialog_body">
                <div className="reportDialog_salesHeader">Customer Purchase Report</div>
             <div className="receiptDialog_top_date">Date : {" "+new Date().toLocaleString()}</div>

                <div className="reportDialog_tableDiv">
                    <table style={{
                        alignItems:'center',
                        justifyContent:'center',
                        textAlign:'center',
                        width:'100%',
                        border:'0.5px solid var(--darkgray)',
                    
                        height:"60px",
                        
                    }}>
                        <thead style={{
                            textAlign:'center',
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:"#67B7D1",
                            color:"white",
                            padding:"30% !important",
                            height:"40px"
                        }}>
                        <tr style={{
                            padding:"30px !important",
                        }}>
                            <th style={{
                                width:"1px",
                                padding:"30px !important",
                            }}>Sr No</th>
                            <th style={{
                                width:"10px",
                            }}>Attributes</th>
                            <th style={{
                                width:"8px",
                            }}>Value</th>
                    {/* <th> Discount</th>
                    <th> Gross profit</th>
                    <th>Net Profit</th>
                    <th>Operating Expense</th>
                    <th>Retail Price</th>
                    <th>Sale Price</th>
                    <th>Tax Collected</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        <tr style={{
                           backgroundColor:"var(--lightgray)",
                        }}>
                            <td>1</td>
                        <td style={{
                            fontWeight:"bold",
                        }}> Total Orders</td>   
                        <td>{props.reportData.totalOrder}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                        <td style={{
                            fontWeight:"bold",
                        }}> Total Amount Spent</td>
                        <td>{props.reportData.totalAmountSpent}</td>
                        </tr>
                        <tr style={{
                           backgroundColor:"var(--lightgray)",
                        }}>
                            <td>3</td>
                        <td style={{
                            fontWeight:"bold",
                        }}>Total Discount Availed</td>
                        <td>{props.reportData.totalDiscountAvail}</td>
                        </tr>
                     
                            </tbody>
                    </table>

                </div>
                <div style={{
                    color:"lightgray",
                    marginTop:"220px",
                    marginLeft:"4px"    ,
                }}>-----------------------------------------------------------------------</div>
              </div>
              <div className="Footer">
                <div>FastMart</div>
                <div>Comsats University Islamabad</div>
                <div>+93029288383</div>
              </div>
              {/* <div className="receiptDialog_middleContain">
                <div className="middleContain_line"></div>
                <div className="middleContain_header">
                  <div className="middleContain_productName">Product</div>
                  <div className="middleContain_productQty">QTY</div>
                  <div className="middleContain_productPrice">Unit Price</div>
                  <div className="middleContain_total">Total</div>
                </div>
                <div className="middleContain_line"></div>
                <div className={length>=5?"middleContain_productContainer_scroll":"middleContain_productContainer"}>
              {console.log("in receeipt renders")}
               { cartItems ? cartItems.map((cartProduct)=>{
              console.log(cartProduct);
              return(
                  <ProductContainer product={cartProduct}/>)
            }):null } 
            <ProductContainer/>
                </div>
                <div className="middleContain_line"></div>
              </div>
              <div className="receiptDialog_bottomContain">
                <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Subtotal</div>
                  <div className="receiptDialog_subtotalNumber"> 777</div>
                </div>
                <div className="middleContain_line"></div>
                 <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Discount</div>
                  <div className="receiptDialog_subtotalNumber"> 300</div>
                </div> 
                <div className="middleContain_line"></div>
                <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Grand Total</div>
                  <div className="receiptDialog_subtotalNumber">888</div>
                </div>
                <div className="middleContain_line"></div>

              </div> */}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="printReceipt">
         Download
          </Button>
        </DialogActions>
      </BootstrapDialog>
      
    </div>

  );
}
