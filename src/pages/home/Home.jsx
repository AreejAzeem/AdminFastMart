import React from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./home.css";
import Chart from "../../components/chart/Chart";
import { userData } from "../../DummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar.jsx";
import { useState, useEffect } from "react";
import { AreaChart, ResponsiveContainer, Legend as Relegend } from "recharts";
import { Area, Bar } from "recharts";
import { Label } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { CartesianGrid } from "recharts";
import { Tooltip as Retooltip } from "recharts";
import axios from "axios";
import config from "../../config/config";

function Home() {
  useEffect(() => {
     getDailySalesData();
  }, []);

  const dailydata = [];
 const [dailyData, setDailyData] = useState();
  const [totalSales, setTotalSales] = useState();
  const [quantity, setQuantity] = useState();

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
        console.log(item.slot1.total);
        console.log(item.slot2.total);
        console.log(item.slot3.total);
        console.log(item.slot4.total);
        var total =
          item.slot1.total +
          item.slot2.total +
          item.slot3.total +
          item.slot4.total;
        var quantity=item.slot1.quantity+item.slot2.quantity+item.slot3.quantity+item.slot4.quantity;
        setQuantity(quantity);
        setTotalSales(total);
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
  return (
    <div className="home">
      <div>
       {dailyData? <FeaturedInfo total={totalSales} quantity={quantity} /> :null}
      </div>
      {/* <Chart
        data={userData}
        title="User Analystics"
        grid
        dataKey="Active User"
      /> */}
      <div
        style={{
          marginLeft: "50px",
          marginTop:"40px"
        }}
      >
        <ResponsiveContainer width="90%" height={400}>
          <AreaChart
            width={730}
            height={250}
            data={
              dailyData ? dailyData : null
            }
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
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
        </ResponsiveContainer>
      </div>
      {/* <div className="homeWidgets"></div>
      <WidgetLg />
      <WidgetSm /> */}
    </div>
  );
}

export default Home;
