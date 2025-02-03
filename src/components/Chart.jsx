import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF']; // More colors

const MyPieChart = ({ transaction = [] }) => {
  if (!transaction || transaction.length === 0) {
    return <p>No data available</p>;
  }


  const formattedTransaction = transaction.reduce((acc, curr) => {
    const { category, price } = curr;
    const existingCategory = acc.find(item => item.category === category);
    
    if (existingCategory) {
      existingCategory.price += Number(price);  
    } else {
      acc.push({ category, price: Number(price) }); 
    }
    
    return acc;
  }, []);

  return (
    <div style={{ width: '100%', height: '180px' }}> 
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={formattedTransaction}
            dataKey="price"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            label
          >
            {formattedTransaction.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyPieChart;
