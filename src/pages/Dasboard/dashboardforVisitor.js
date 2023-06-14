import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

function Dashboard(props) {
  const [dropdownOpen, setdropdownOpen] = useState(false);
    const[chart,setChart]=useState({
        series: [10, 20, 25, 70, 80],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['1 Hour', '2 Hour', '3 Hour', '4 Hour', '5 Hour'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
    
    })
    const[barchart,setbarChart]=useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: ['1 Hour', '2 Hour', '3 Hour', '4 Hour', '5 Hour']
            }
          },
          series: [
            {
              name: "No of Visitor",
              data: [10, 20, 25, 70, 80]
            }
          ]
        
    })
  
    return (
        <div className='container'>
            <h1>visitors per hour in a restaurant</h1>
            <Button
             color="info"
            onClick={()=>
            {
              window.location.href="/dashboard"
            }}
            >Go To Tickets Graph</Button>
            <Button
            onClick={()=>
            {
              window.location.href="/quardant"
            }}
            >Go To Quardant Splitter</Button>
            <h4>Pie Chart</h4>
           
          <ReactApexChart options={chart.options} series={chart.series} type="pie" width={380} />

    <div>
    
    <h4>Bar Chart</h4>
    <ReactApexChart
              options={barchart.options}
              series={barchart.series}
              type="bar"
              width="500"
            />
    </div>
        </div>
    );
}

export default Dashboard;