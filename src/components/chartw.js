import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chartw extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Nakuru', 'Nairobi','Mombasa', 'Kisumu', 'Naivasha' ],
                datasets: [
                    {   
                        fillColor: "79D1CF",
                        label: 'Price',
                        data:[
                            500,
                            600,
                            700,
                            550,
                            670,
                        ]
                    }
                ]
            }
        }
    }


  render() {
    return (
      <div className="chartx">
        <Bar 
            data={this.state.chartData}
            options={{maintainAspectRatio: 'true',
                title:{
                    display: true,
                    text: 'Soap Price per Town',
                    fontSize: 12,
                },
                legend:{
                    display:true,
                    position:'bottom'
                }
            }}
        />
        </div>
    );
  }
}

export default Chartw;
