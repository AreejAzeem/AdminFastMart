import React from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./home.css";
import Chart from "../../components/chart/Chart";
import { userData } from "../../DummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar.jsx";

function Home() {
  const userData = [
    {
      name: 'Jan',
      "Active Drones": 4000,
     
    },
    {
      name: 'Feb',
      "Active Drones": 3000,
     
    },
    {
      name: 'Mar',
      "Active Drones": 2000,
     
    },
    {
      name: 'Apr',
      "Active Drones": 2780,
     
    },
    {
      name: 'May',
      "Active Drones": 1890,
     
    },
    {
      name: 'Jun',
      "Active Drones": 2390,
      
    },
    {
      name: 'Jul',
      "Active Drones" : 3490,
      
    },
    {
        name: 'Aug',
        "Active Drones" : 3400,
        
      },
      {
        name: 'Oct',
        "Active Drones" : 3590,
        
      },
      {
        name: 'Nov',
        "Active Drones" : 3690,
        
      },
      {
        name: 'Dec',
        "Active Drones" : 3900,
        
      },
  ];
  return (
    <div className="home">
    <div>
      <FeaturedInfo />
      </div>
      <Chart
        data={userData}
        title="User Analystics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets"></div>
      <WidgetLg />
      <WidgetSm />
    </div>
  );
}

export default Home;
