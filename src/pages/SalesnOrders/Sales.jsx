// import React from "react";
// import Search from "../../components/search/Search";
// import TablePaginate from "../../components/Table/components/TablePagination/TablePaginate";
// import Price from "../../components/select/Price";
// import "./sales.css"
// import Chart from "../../components/chart/Chart";
// import styled from "styled-components";
// import {AreaChart, Area, tooltip, ResponsiveContainer} from 'recharts';
// import {AiOutlineCaretDown} from "react-icons/ai";
// function Sales() {
//   const Section = styled.section`
//   `;
//   // const data = [
//   //   {
//   //     name: 'Page A',
//   //     Sales: 4000,
//   //     Revenue: 2400,
//   //     amt: 2400,
//   //   },
//   //   {
//   //     name: 'Page B',
//   //     Sales: 3000,
//   //     Revenue: 1398,
//   //     amt: 2210,
//   //   },
//   //   {
//   //     name: 'Page C',
//   //     Sales: 2000,
//   //     Revenue: 9800,
//   //     amt: 2290,
//   //   },
//   //   {

//   //     name: 'Page D',
//   //     Sales: 2780,
//   //     Revenue: 3908,
//   //     amt: 2000,
//   //   },
//   //   {

//   //     name: 'Page E',
//   //     Sales: 1890,
//   //     Revenue: 4800,

//   //     amt: 2181,
//   //   },
//   // ];

//   return (
//     <div  className="Sales" style={{width:"100%"}}>
//      <div className="salesWrapper">
//      <h2 className="sales_title">Sales</h2>
//      {/* <div className="sales_searchContainer"  >
//           <div className="sales_searchContainer_wrapper" style={{justifyContent:"space-evenly"}}>
//             <div className="sales_searchField">
//               <Search placeholder="Search Product" />
//             </div>
//             <div className="orderslimit_Field">
//               <Price />
//             </div>
//             <div className="download_sales">
//               <button
//                 className="downloadSales_btn"

//               >
//                 Download Sales
//               </button>
//             </div>
//             </div>
//           </div> */}
//           {/* <div className="sales_table">
//             <TablePaginate/>
//           </div> */}
//           <div className="salesContainer">
//             <div className="salesContainer_wrapper">
//               <div className="salesContainer_wrapper_left">
//                 <div className="salesContainer_wrapper_left_top">left top
//                 <div className="sales__graph">
//                   <ResponsiveContainer
//                   width='100%'
//                   height='100%'
//                   >
//                     <AreaChart
//                     width={500}
//                     height={500}
//                     data={data}
//                     margin={{
//                       top: 10,
//                     }}>
//                       <defs>
//                         <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//                           <stop offset="30%" stopColor="#668DFF" stopOpacity="{0.4}"/>
//                           <stop offset="85%" stopColor="#D4E0FF" stopOpacity="{0.2}"/>
//                           </linearGradient>
//                       </defs>
//                       <tooltip cursor="{false}"/>
//                       <Area
//                       type={"monotone"}
//                       dataKey="data2"
//                       stroke="#668DFF"
//                       fill="gray"
//                       >

//                       </Area>
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>
//                   </div>
//                   <div className="salesContainer_wrapper_left_bottom">left bottom
//                   <div></div>
//                   <div></div>
//                   <div></div>
//                   </div>
//             </div>
//             <div className="salesContainer_wrapper_right">
//               <div className="salesContainer_wrapper_right_top">right top </div>
//               <div className="salesContainer_wrapper_right_bottom">right bottom</div>
//             </div>
//           </div>
//           </div>

//     </div>
//     </div>

//   );
// }

// export default Sales;
import React from "react";
import { AreaChart, ResponsiveContainer, Legend as Relegend } from "recharts";
import { Area, Bar } from "recharts";
import { Label } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { CartesianGrid } from "recharts";
import { Tooltip as Retooltip } from "recharts";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import "./sales.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import config from "../../config/config";
import { useEffect } from "react";
import ReportDialog from "../../components/Table/components/Dialog/ReportDialog";

import TextSnippetIcon from '@mui/icons-material/TextSnippet';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data1 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      locationbar: "bottom",
      lastbar: "right",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        //  "#B3F6D8",
        //  "#52A7C1",
        //  "#96E4DF",
        //  "#4DCCC6",

        //  "#7EE8FA",
        // "#D3D3D3",
        "#83EAF1",
        "#63A4FF",
        "#89D4CF",
        "#7EE8FA",
        "#96E4DF",
        "#83EAF1",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 0.1,
      borderAlign: "inner",
      offset: false,
      hoverOffset: 10,
    },
  ],
};

// const dailydata1 = [
//   {
//     name: "slot1",
//     Sales: 6666,
//     Revenue: 34777,
//     //amt: 2400,
//   },
//   {
//     name: "03:00",
//     Sales: 3000,
//     Revenue: 56,
//     //amt: 2210,
//   },
//   {
//     name: "06:00",
//     Sales: 1466,
//     Revenue: 788,
//    // amt: 2290,
//   },
//   {
//     name: "09:00",
//     Sales: 777,
//     Revenue: 7654,
//    // amt: 2000,
//   }
// ];

function Sales() {
  const dailydata = [];
  const weeklydata = [];
  const monthlydata = [];
  const [salesOption, setSalesOption] = useState("Daily");
  const [dailyData, setDailyData] = useState();
  const [weeklyData, setWeeklyData] = useState();
  const [monthlyData, setMonthlyData] = useState();
  const[categorySales, setCategorySales] = useState();
  const[dailyReportData, setDailyReportData] = useState();
  const[weeklyReportData, setWeeklyReportData] = useState();
  const[monthlyReportData, setMonthlyReportData] = useState();
  const [openReportDialog , setOpenReportDialog] = useState(false);
  const[reportTitle, setReportTitle] = useState();
  const[reportData, setReportData]= useState();
  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
       
        lastbar: "right",
        data: [],
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
          //  "#B3F6D8",
           "#52A7C1",
           "#96E4DF",
           "#4DCCC6",
  
           "#7EE8FA",
          "#D3D3D3",
          "#83EAF1",
          "#63A4FF",
          "#89D4CF",
          "#7EE8FA",
          "#96E4DF",
          "#83EAF1",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
         
        ],
        borderWidth: 0.1,
        borderAlign: "inner",
        offset: false,
        hoverOffset: 10,
      },
    ],
  };
const [dataset, setDataset] = useState();
 
  useEffect(() => {
    getDailySalesData();
    getSalesByCategory();
    getDailyReportData();
    
   

  }, []);
  const getDailySalesData = async () => {
    await axios({
      method: "GET",
      url: config.apiURL + "/sales/getDailySales",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // "Sales",item[index].slot1.total
      console.log(res.data.data);
      res.data.data.map((item, index) => {
        console.log(item.slot1);
        console.log(dailydata1);
        if (res.data.data) {
          dailydata.push({
            name: "11:00-2:00pm",
            Sales: item.slot1.quantity,
            Revenue: item.slot1.total,
            //amt: 2400,
          });
          dailydata.push({
            name: "02:00 - 05:00pm",
            Sales: item.slot2.quantity,
            Revenue: item.slot2.total,
            //amt: 2210,
          });
          dailydata.push({
            name: "05:00 - 08:00pm",
            Sales: item.slot3.quantity,
            Revenue: item.slot3.total,
            // amt: 2290,
          });
          dailydata.push({
            name: "08:00 - 11:00pm",
            Sales: item.slot4.quantity,
            Revenue: item.slot4.total,
            // amt: 2000,
          });

          console.log(dailydata);
          setDailyData(dailydata);
          console.log(dailyData);
        }
      });
      return res.data;
    });
  };
  const getWeeklySalesData = async () => {
    await axios({
      method: "GET",
      url: config.apiURL + "/sales/getWeeklySales",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // "Sales",item[index].slot1.total
      console.log(res.data.data);
      res.data.data.map((item, index) => {
        console.log(item.day1);

        if (res.data.data) {
          weeklydata.push({
            name: "Day1",
            Sales: item.day1.quantity,
            Revenue: item.day1.total,
            //amt: 2400,
          });
          weeklydata.push({
            name: "Day2",
            Sales: item.day2.quantity,
            Revenue: item.day2.total,
            //amt: 2210,
          });
          weeklydata.push({
            name: "Day3",
            Sales: item.day3.quantity,
            Revenue: item.day3.total,
            // amt: 2290,
          });
          weeklydata.push({
            name: "Day4",
            Sales: item.day4.quantity,
            Revenue: item.day4.total,
            // amt: 2000,
          });
          weeklydata.push({
            name: "Day5",
            Sales: item.day5.quantity,
            Revenue: item.day5.total,
            // amt: 2290,
          });
          weeklydata.push({
            name: "Day6",
            Sales: item.day6.quantity,
            Revenue: item.day6.total,
            // amt: 2000,
          });
          weeklydata.push({
            name: "Day7",
            Sales: item.day7.quantity,
            Revenue: item.day7.total,
            // amt: 2290,
          });

          console.log(weeklydata);
          setWeeklyData(weeklydata);
          console.log(weeklyData);
        }
      });
      return res.data;
    });
  };
  const getMonthlySalesData = async () => {
    await axios({
      method: "GET",
      url: config.apiURL + "/sales/getMonthlySales",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // "Sales",item[index].slot1.total
      console.log(res.data.data);
      res.data.data.map((item, index) => {
        console.log(item.month1);

        if (res.data.data) {
          monthlydata.push({
            name: "Jan",
            Sales: item.month1.quantity,
            Revenue: item.month1.total,
            //amt: 2400,
          });
          monthlydata.push({
            name: "Feb",
            Sales: item.month2.quantity,
            Revenue: item.month2.total,
            //amt: 2210,
          });
          monthlydata.push({
            name: "March",
            Sales: item.month3.quantity,
            Revenue: item.month3.total,
            // amt: 2290,
          });
          monthlydata.push({
            name: "April",
            Sales: item.month4.quantity,
            Revenue: item.month4.total,
            // amt: 2000,
          });
          monthlydata.push({
            name: "May",
            Sales: item.month5.quantity,
            Revenue: item.month5.total,
            // amt: 2290,
          });
          monthlydata.push({
            name: "June",
            Sales: item.month6.quantity,
            Revenue: item.month6.total,
            // amt: 2000,
          });
          monthlydata.push({
            name: "July",
            Sales: item.month7.quantity,
            Revenue: item.month7.total,
            // amt: 2290,
          });
          monthlydata.push({
            name: "Aug",
            Sales: item.month8.quantity,
            Revenue: item.month8.total,
            // amt: 2000,
          });
          monthlydata.push({
            name: "Sept",
            Sales: item.month9.quantity,
            Revenue: item.month9.total,
            // amt: 2290,
          });
          monthlydata.push({
            name: "Oct",
            Sales: item.month10.quantity,
            Revenue: item.month10.total,
            // amt: 2000,
          });
          monthlydata.push({
            name: "Nov",
            Sales: item.month11.quantity,
            Revenue: item.month11.total,
            // amt: 2290,
          });
          monthlydata.push({
            name: "Dec",
            Sales: item.month12.quantity,
            Revenue: item.month12.total,
            // amt: 2290,
          });
          console.log(monthlydata);
          setMonthlyData(monthlydata);
          console.log(monthlyData);
        }
      });
      return res.data;
    });
  };

  const getSalesByCategory = async () => {
    await axios({
      method: "GET",
      url: config.apiURL + "/sales/getCategorySales",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // "Sales",item[index].slot1.total
      console.log(res.data.data);
      var labe=[];
      var dat=[];
      res.data.data.map((item, index) => {
        if(index<5){
       labe.push(item.categoryName);
       dat.push(item.total);}

      //   setDataset(...dataset, dataset.labels.push(item.categoryName));
      // setDataset(...dataset,dataset.data.push(item.total));
      // setDataset(dataset, dataset.data.push(item.total))
        // data.labels.push(item.categoryName);
        // data.datasets[0].data.push(item.total);
        // data.datasets[0].backgroundColor.push(
        //   "#" + Math.floor(Math.random() * 16777215).toString(10)
        // );
        
      
      });
      console.log(labe) ;
      console.log(dat);
     if(res.data.data){
      setDataset({
        labels: labe,
        datasets: [
          {
            label: "Sales by Category",
            data: dat,
            backgroundColor: [
              "#83EAF1",
              "#63A4FF",
              "#89D4CF",
              "#B3F6D8",
              "#52A7C1",
           ],
          },
        ],
      });
    }
              
      console.log(dataset);
      console.log(data1);
      
     
      // res.data.data.map((item, index) => {
      //   console.log(item.category1);
      
      // })
    
    });}
    const getDailyReportData = async () => {
      await axios({
        method: "GET",
        url: config.apiURL + "/reports/getDailyReport",
        headers: {
          "Content-Type": "application/json",
        },

      }).then((res) => {
        console.log(res.data.data);
        var data=res.data.data;
        if(res.data.data){
        setDailyReportData(data);
        getWeeklyReportData();}
        }).catch((err) => {
          console.log(err);
        }
      );
      
    }
    const getWeeklyReportData = async () => {
      await axios({
        method: "GET",
        url: config.apiURL + "/reports/getWeeklyReport",
        headers: {
          "Content-Type": "application/json",
        },

      }).then((res) => {
        console.log(res.data.data);
        var data=res.data.data;
        if(res.data.data){
        setWeeklyReportData(data);
        getMonthlyReportData();}
        }).catch((err) => {
          console.log(err);
        }
      );
    }
    const getMonthlyReportData = async () => {
      await axios({
        method: "GET",
        url: config.apiURL + "/reports/getMonthlyReport",
        headers: {
          "Content-Type": "application/json",
        },

      }).then((res) => {
        console.log(res.data.data);
        var data=res.data.data;
        if(res.data.data){
        setMonthlyReportData(data);}
        }).catch((err) => {
          console.log(err);
        }
      );
    }

  return (
    <div className="sales">
      <div className="sales__details">
        
       
      </div>
      <div className="salesContainer">
        <div className="salesContainer_wrapper">
          <div className="salesContainer_wrapper_left">
            <div className="salesContainer_wrapper_left_top">
              <div style={{ width: "100%" }}>
              <div className="sales_details_monthlyDiv">
          <select
            className="sales_details_monthlyBtn"
            onChange={(e) => {
              console.log(e.target.value);
              setSalesOption(e.target.value);
              if (e.target.value === "Daily") {
                getDailySalesData();
              } else if (e.target.value === "Weekly") {
                console.log("weekly");
                getWeeklySalesData();
              } else if (e.target.value === "Monthly") {
               
                console.log("monthly");
                getMonthlySalesData();
              }
            }}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
                <ResponsiveContainer width="100%" height={450}>
                  
                  {dailyData ? (
                    <AreaChart
                      width={730}
                      height={250}
                      data={
                        salesOption === "Monthly"
                          ? monthlyData
                          : salesOption === "Weekly"
                          ? weeklyData
                          : salesOption === "Daily"
                          ? dailyData.length > 0
                            ? dailyData
                            : []
                          : []
                      }
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorSales"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorRevenue"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#82ca9d"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#82ca9d"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Relegend />
                      <XAxis dataKey="name"></XAxis>

                      <YAxis type="number"></YAxis>

                      <CartesianGrid strokeDasharray="3 3" />
                      <Retooltip />
                      <Area
                        type="monotone"
                        dataKey="Sales"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorSales)"
                      />
                      <Area
                        type="monotone"
                        dataKey="Revenue"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  ) : (
                    <div style={{ textAlign: "center" }}>No Data</div>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
            <div className="salesContainer_wrapper_right_top">
           {dataset ?
              <Doughnut data={dataset} style={{
                width: "100%",
              }} /> : <div style={{ textAlign: "center" }}>No Data</div>}
            
              <h5
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  marginTop: "7px",
                }}
              >
                Sales by Category
              </h5>
            </div>
          
          </div>
          <div className="salesContainer_wrapper_right">
          

            <div className="salesContainer_wrapper_left_bottom">
             <div style={{
              display: "flex",
 textAlign: "center",
 justifyContent: "center",
 alignItems: "center",
             }}>
              <table style={{
               marginTop: "20px",
                width: "95%",
                backgroundColor: "white",
                
              }}>
                <thead>
                  <tr style={{
                    marginLeft: "30px",
                    backgroundColor: "#67B7D1",
                    color:"white",
                    height:"50px",
                    fontSize:"10px",

                  }}>
                    <th>[]</th>
                    <th> Discount</th>
                    <th> Gross profit</th>
                    <th>Net Profit</th>
                    <th>Operating Expense</th>
                    <th>Retail Price</th>
                    <th>Sale Price</th>
                    <th>Tax Collected</th>
                    <th>Generate Report</th>
                  </tr>
                </thead>
                <tbody>
                  { dailyReportData  && weeklyReportData? (
                      <tr>
                        <td  style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          color:"gray"

                        }}>Daily</td>
                        <td>{dailyReportData.totalDiscount}</td>
                        <td>{dailyReportData.totalGrossProfit}</td>
                        <td>{dailyReportData.totalNetProfit.toFixed(2)}</td>
                        <td>{dailyReportData.totalOperatingExpense}</td>
                        <td>{dailyReportData.totalRetailPrice}</td>
                        <td>{dailyReportData.totalSalePrice}</td>
                        <td>{dailyReportData.totalTaxCollected}</td> 
                        <td><TextSnippetIcon color="red"style={{
                          cursor: "pointer",
                          color:"skyblue",
                        }} onClick={
                          () => {
                            console.log("clicked")
                            setOpenReportDialog(true)
                            setReportTitle("Daily")
                            setReportData(dailyReportData)
                          //  getDailyReportData()
                          }
                        }/></td>
                      </tr>
                 ) : <div>No data</div>}
                { weeklyReportData ? (
                      <tr>
                        <td style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          color:"gray",
                        

                        }}
                       
                        >Weekly</td>
                        <td>{weeklyReportData.totalDiscount}</td>
                        <td>{weeklyReportData.totalGrossProfit}</td>
                        <td>{weeklyReportData.totalNetProfit.toFixed(2)}</td>
                        <td>{weeklyReportData.totalOperatingExpense}</td>
                        <td>{weeklyReportData.totalRetailPrice}</td>
                        <td>{weeklyReportData.totalSalePrice}</td>
                        <td>{weeklyReportData.totalTaxCollected}</td>
                        <td><TextSnippetIcon style={{
                          cursor: "pointer",
                          color:"skyblue"
                        }}
                         onClick={
                          () => {
                            console.log("clicked")
                            setOpenReportDialog(true)
                            setReportTitle("Weekly")
                            setReportData(weeklyReportData)
                          //  getDailyReportData()
                          }
                        }
                        /></td>
                      </tr>
                 ) :<div>No data</div>}
                 { monthlyReportData ? (
                  <tr>
                    <td style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          color:"gray"

                        }}>Monthly</td>
                  <td>{monthlyReportData.totalDiscount}</td>
                  <td>{monthlyReportData.totalGrossProfit}</td>
                  <td>{monthlyReportData.totalNetProfit.toFixed(2)}</td>
                  <td>{monthlyReportData.totalOperatingExpense}</td>
                  <td>{monthlyReportData.totalRetailPrice}</td>
                  <td>{monthlyReportData.totalSalePrice}</td>
                  <td>{monthlyReportData.totalTaxCollected}</td>
                  <td><TextSnippetIcon style={{
                    color:"skyblue",
                    cursor: "pointer",

                  }}
                  onClick={
                    () => {
                      console.log("clicked")
                      setOpenReportDialog(true)
                      setReportTitle("Monthly")
                      setReportData(monthlyReportData)
                    //  getDailyReportData()
                    }
                  }/></td>
                </tr>

                 ) : (
                    <div style={{ textAlign: "center" }}>No Data</div>
                 )}
                                        {openReportDialog ? <ReportDialog  setOpenReportDialog={setOpenReportDialog} reportData={reportData} reportTitle={reportTitle} /> : null}

                </tbody>

              </table>
             </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
const dailydata1 = [
  {
    name: "00:00",
    Sales: 40,
    Revenue: 2400,
    // amt: 2400,
  },
  {
    name: "03:00",
    Sales: 35,
    Revenue: 1398,
    // amt: 2210,
  },
  {
    name: "06:00",
    Sales: 120,
    Revenue: 12000,
    // amt: 2290,
  },
  {
    name: "09:00",
    Sales: 80,
    Revenue: 7000,
    //amt: 2000,
  },
  // {
  //   name: "12:00",
  //   Sales: 70,
  //   Revenue: 4800,
  //   //amt: 2181,
  // },
  // {
  //   name: "15:00",
  //   Sales: 1009,
  //   Revenue: 7800,
  //   //amt: 2500,
  // },
  // {
  //   name: "18:00",
  //   Sales: 65,
  //   Revenue: 4300,
  //   //amt: 2100,
  // },
  // {
  //   name: "21:00",
  //   Sales: 65,
  //  Revenue: 4300,
  //   //amt: 2100,
  // },
  // {
  //   name: "24:00",
  //   Sales: 70,
  //   Revenue: 4800,
  //   //amt: 2181,
  // },
];
const monthlydata = [
  {
    name: "Jan",
    Sales: 40,
    Revenue: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Sales: 35,
    Revenue: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Sales: 120,
    Revenue: 12000,
    amt: 2290,
  },
  {
    name: "April",
    Sales: 80,
    Revenue: 7000,
    amt: 2000,
  },
  {
    name: "May",
    Sales: 70,
    Revenue: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Sales: 1009,
    Revenue: 7800,
    amt: 2500,
  },
  {
    name: "July",
    Sales: 65,
    Revenue: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    Sales: 1009,
    Revenue: 7800,
    amt: 2500,
  },
  {
    name: "Sep",
    Sales: 65,
    Revenue: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    Sales: 1009,
    Revenue: 7800,
    amt: 2500,
  },
  {
    name: "Nov",
    Sales: 65,
    Revenue: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    Sales: 1009,
    Revenue: 7800,
    amt: 2500,
  },
];
const weeklydata = [
  {
    name: "Day1",
    Sales: 40,
    Revenue: 2400,
    amt: 2400,
  },
  {
    name: "Day2",
    Sales: 35,
    Revenue: 1398,
    amt: 2210,
  },
  {
    name: "Day3",
    Sales: 120,
    Revenue: 12000,
    amt: 2290,
  },
  {
    name: "Day4",
    Sales: 80,
    Revenue: 7000,
    amt: 2000,
  },
  {
    name: "Day5",
    Sales: 70,
    Revenue: 4800,
    amt: 2181,
  },
  {
    name: "Day6",
    Sales: 1009,
    Revenue: 7800,
    amt: 2500,
  },
  {
    name: "Day7",
    Sales: 65,
    Revenue: 4300,
    amt: 2100,
  },
];

/////

// import React from "react";
// import styled from "styled-components";
// import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
// import { AiOutlineCaretDown } from "react-icons/ai";
// import "./sales.css";

// function Sales() {
//   return (
//     <Section style={{width:"100%"}}>
//       <div className="sales">
//           <div className="sales__details">
//             <div>
//               <h4>Sales Overview</h4>
//             </div>
//             <div>
//               <button>
//                 Monthly
//                 <AiOutlineCaretDown />
//               </button>
//             </div>
//           </div>
//           <div className="salesContainer">
//             <div className="salesContainer_wrapper">
//               <div className="salesContainer_wrapper_left">
//                 <div className="salesContainer_wrapper_left_top">
//                   <div className="sales__graph">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <AreaChart width={500} height={400} data={data}>
//                         <defs>
//                           <linearGradient
//                             id="colorview"
//                             x1="0"
//                             y1="0"
//                             x2="0"
//                             y2="1"
//                           >
//                             <stop
//                               offset="30%"
//                               stopColor="#668DFF"
//                               stopOpacity={0.4}
//                             />
//                             <stop
//                               offset="85%"
//                               stopColor="#D4E0FF"
//                               stopOpacity={0.2}
//                             />
//                           </linearGradient>
//                         </defs>
//                         <Tooltip cursor={false} />
//                         <Area
//                           type="monotone"
//                           dataKey="data2"
//                           stroke="#668DFF"
//                           fill="url(#colorview)"
//                         />
//                         <Area
//                           type="monotone"
//                           dataKey="data1"
//                           stroke="#668DFF"
//                           fill="url(#colorview)"
//                         />
//                       </AreaChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 <div className="salesContainer_wrapper_left_bottom">

//                   left bottom
//                 </div>
//               </div>
//               <div className="salesContainer_wrapper_right">
//                 <div className="salesContainer_wrapper_right_top">
//                   right top
//                 </div>
//                 <div className="salesContainer_wrapper_right_bottom">
//                   right bottom
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//     </Section>
//   );
// }

// export default Sales;
// const data = [
//   {
//     data2: 2000,
//     data1: 2400,
//   },
//   {
//     data2: 4000,
//     data1: 1398,
//   },
//   {
//     data2: 5000,
//     data1: 12800,
//   },
//   {
//     data2: 8780,
//     data1: 3908,
//   },
//   {
//     data2: 9890,
//     data1: 4800,
//   },
//   {
//     data2: 11390,
//     data1: 3800,
//   },
//   {
//     data2: 3490,
//     data1: 4300,
//   },
// ];
// const Section = styled.section`
//   .sales {
//     color: black;
//     width: 100%;
//     .sales__details {
//       display: flex;
//       justify-content: space-between;
//       margin: 1rem 3rem 1rem 1rem;
//       div {
//         display: flex;
//         gap: 1rem;
//         button {
//           border-radius: 0.5rem;
//           padding: 0.4rem 1rem;
//           border: none;
//           cursor: pointer;
//           background-color: #eef4ff;
//           color: black;
//           svg {
//             font-size: 0.6rem;
//           }
//         }
//       }
//     }
//     .sales__graph {
//       height: 25rem;
//       width: 100%;
//       .recharts-default-tooltip {
//         background-color: black !important;
//         border-color: black !important;
//         color: white !important;
//       }
//     }
//   }
// `;
