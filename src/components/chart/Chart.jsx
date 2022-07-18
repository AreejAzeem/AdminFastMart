import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./chart.css";

// Sample chart data
const pdata = [
  {
    name: "Apple",
    Sales: 120,
    Stock: 100,
  },
  {
    name: "Banana",
    Sales: 100,
    Stock: 80,
  },
  {
    name: "Mouse",
    Sales: 20,
    Stock: 40,
  },
  {
    name: "Pepsi",
    Sales: 100,
    Stock: 20,
  },
  {
    name: "Cheese",
    Sales: 90,
    Stock: 100,
  },
  {
    name: "Milk",
    Sales: 70,
    Stock: 100,
  },
  {
    name: "Pepsi",
    Sales: 100,
    Stock: 20,
  },
  {
    name: "Cheese",
    Sales: 90,
    Stock: 100,
  },
  {
    name: "Milk",
    Sales: 70,
    Stock: 100,
  },
  {
    name: "Pepsi",
    Sales: 100,
    Stock: 20,
  },
  {
    name: "Cheese",
    Sales: 90,
    Stock: 100,
  },
  {
    name: "Milk",
    Sales: 70,
    Stock: 100,
  },
  
];

function Chart() {
  return (
    <>
      <div className='chart' >
       
       <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="120%" aspect={3}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="Sales" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="Stock" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </>
  );
}

export default Chart;
