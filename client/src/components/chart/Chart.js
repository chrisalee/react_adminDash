import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Jan", Total: 1200 },
  { name: "Feb", Total: 2200 },
  { name: "Mar", Total: 800 },
  { name: "Apr", Total: 1000 },
  { name: "May", Total: 3200 },
  { name: "Jun", Total: 2100 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className='chart'>
      <div className="chart__title">
        {title}
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#6d6d6d" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chart__grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#151158"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;