import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

function Dashboard(props) {
  const [dropdownOpen, setdropdownOpen] = useState(false);
    const[chart,setChart]=useState({
        series: [150, 40, 45, 50, 49, 60, 70, 91,9,5,12,36],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"],
          
        },
      
      
    
    })
    const[barchart,setbarChart]=useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"]
            }
          },
          series: [
            {
              name: "No of Tickets",
              data: [150, 40, 45, 50, 49, 60, 70, 91,1,5,12,36]
            }
          ]

        
          // series: [{
          //             name: 'Designer',
          //             color:'#0000D1',
          //             data: [4,4, 3,3 , 2, 2,1]
          //           }, {
          //             name: 'Developer',
          //             color:'#007500',
          //             data: [0, 0, 1, 2, 4, 4,3]
          //           }, {
          //             name: 'Tester',
          //             color:'#B8860B',
          //             data: [0, 0, 0, 0, 2, 2,2]
          //           }, 
                    
          //         ],
          //           options: {
          //             chart: {
          //               type: 'bar',
          //               height: 350,
          //               stacked: true,
                     
          //             },
                     
                     
          //             xaxis: {
                      
          //               categories: [1,2,3,4,5,6,7
          //               ],
          //             },
                      
          //           }
                  
 
        
        
        }
        
    )
    const toggle = async () => {
      setdropdownOpen(!dropdownOpen)

  }
    return (
        <div className='container'>
            <h1>number of flight tickets purchased per month</h1> <Button
             color="info"
            onClick={()=>
            {
              window.location.href="/"
            }}
            >Go To Visitors Graph</Button>
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