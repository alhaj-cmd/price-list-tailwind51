import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        { id: 1, name: "Alice", math: 90, physics: 80, chemistry: 95 },
        { id: 2, name: "Bob", math: 85, physics: 95, chemistry: 75 },
        { id: 3, name: "Charlie", math: 70, physics: 60, chemistry: 80 },
        { id: 4, name: "David", math: 60, physics: 70, chemistry: 65 },
        { id: 5, name: "Emma", math: 95, physics: 90, chemistry: 90 },
        { id: 6, name: "Frank", math: 75, physics: 80, chemistry: 85 },
        { id: 7, name: "Grace", math: 80, physics: 85, chemistry: 75 },
        { id: 8, name: "Henry", math: 65, physics: 70, chemistry: 60 },
        { id: 9, name: "Isabelle", math: 90, physics: 95, chemistry: 85 },
        { id: 10, name: "Jack", math: 70, physics: 60, chemistry: 75 },
      ];
      
    return (
        <div>
            <h2>Recharts</h2>
            <LineChart
             width={500}
             height={300}
             data={students}
            >
               
                <Line  dataKey="math"></Line>
                <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Dashboard;