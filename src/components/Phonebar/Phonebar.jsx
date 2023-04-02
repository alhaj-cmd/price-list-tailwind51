import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phonebar = () => {
    const [phones, setPhones] = useState([]); 

    useEffect(()=>{
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const loadedData = data.data.data
        const phonesData = loadedData.map(phone => {
            const parts = phone.slug.split('-')
            const price = parseInt(parts[1])
            const phoneInfo ={
                name:phone.phone_name,
                price:price
            }
            return phoneInfo;
        })
        setPhones(phonesData)
    } )
},[])
    return (
        <div>
          <BarChart width={700} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey='name'></XAxis>
          </BarChart>
        </div>
    );
};

export default Phonebar;