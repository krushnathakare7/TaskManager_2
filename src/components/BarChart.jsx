import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { category: 'Entertainment', price: 35 },
  { name: 'Food', value: 40 },

  { name: 'Travel', value: 25 },
];

const COLORS = ['#8884d8', '#8884d8', '#8884d8']; 

const MyCleanHorizontalBarChart = ({transaction}) => {
  
  const newData = Object.values(transaction.reduce((acc,ele)=>{
    if(!acc[ele.category]){
      acc[ele.category] = {category: ele.category, price: 0}
    }
    acc[ele.category].price += Number(ele.price)
    return acc;
},{}))


  
  return (
    <div style={{ width: '100%', height: '300px' }}> 
      <ResponsiveContainer>
        <BarChart
          data={newData}
          layout="vertical" 
          margin={{ top: 20, right: 20, left: 40, bottom: 20 }} 
        >
          <XAxis type="number" hide /> 
          <YAxis
            type="category"
            dataKey="category"
            tick={{ fontSize: 14, fill: '#FFFFFF' }} 
            width={100} 
            tickLine={false}
            axisLine={false}
          /> 
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="price" barSize={20} radius={[10, 10, 10, 10]}>
            {newData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyCleanHorizontalBarChart;
