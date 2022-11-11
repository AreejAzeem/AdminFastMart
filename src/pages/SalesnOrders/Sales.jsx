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
//   //     uv: 4000,
//   //     pv: 2400,
//   //     amt: 2400,
//   //   },
//   //   {
//   //     name: 'Page B',
//   //     uv: 3000,
//   //     pv: 1398,
//   //     amt: 2210,
//   //   },
//   //   {
//   //     name: 'Page C',
//   //     uv: 2000,
//   //     pv: 9800,
//   //     amt: 2290,
//   //   },
//   //   {

//   //     name: 'Page D',
//   //     uv: 2780,
//   //     pv: 3908,
//   //     amt: 2000,
//   //   },
//   //   {

//   //     name: 'Page E',
//   //     uv: 1890,
//   //     pv: 4800,

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
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineCaretDown } from "react-icons/ai";
import "./sales.css";

function Sales() {
  return (
    <Section style={{width:"100%"}}>
      <div className="sales">
          <div className="sales__details">
            <div>
              <h4>Sales Overview</h4>
            </div>
            <div>
              <button>
                Monthly
                <AiOutlineCaretDown />
              </button>
            </div>
          </div>
          <div className="salesContainer">
            <div className="salesContainer_wrapper">
              <div className="salesContainer_wrapper_left">
                <div className="salesContainer_wrapper_left_top">
                  <div className="sales__graph">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart width={500} height={400} data={data}>
                        <defs>
                          <linearGradient
                            id="colorview"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="30%"
                              stopColor="#668DFF"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="85%"
                              stopColor="#D4E0FF"
                              stopOpacity={0.2}
                            />
                          </linearGradient>
                        </defs>
                        <Tooltip cursor={false} />
                        <Area
                          type="monotone"
                          dataKey="data2"
                          stroke="#668DFF"
                          fill="url(#colorview)"
                        />
                        <Area
                          type="monotone"
                          dataKey="data1"
                          stroke="#668DFF"
                          fill="url(#colorview)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="salesContainer_wrapper_left_bottom">
                
                  left bottom
                </div>
              </div>
              <div className="salesContainer_wrapper_right">
                <div className="salesContainer_wrapper_right_top">
                  right top
                </div>
                <div className="salesContainer_wrapper_right_bottom">
                  right bottom
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </Section>
  );
}

export default Sales;
const data = [
  {
    data2: 2000,
    data1: 2400,
  },
  {
    data2: 4000,
    data1: 1398,
  },
  {
    data2: 5000,
    data1: 12800,
  },
  {
    data2: 8780,
    data1: 3908,
  },
  {
    data2: 9890,
    data1: 4800,
  },
  {
    data2: 11390,
    data1: 3800,
  },
  {
    data2: 3490,
    data1: 4300,
  },
];
const Section = styled.section`
  .sales {
    color: black;
    width: 100%;
    .sales__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 3rem 1rem 1rem;
      div {
        display: flex;
        gap: 1rem;
        button {
          border-radius: 0.5rem;
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: #eef4ff;
          color: black;
          svg {
            font-size: 0.6rem;
          }
        }
      }
    }
    .sales__graph {
      height: 25rem;
      width: 100%;
      .recharts-default-tooltip {
        background-color: black !important;
        border-color: black !important;
        color: white !important;
      }
    }
  }
`;
