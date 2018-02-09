import * as React from 'react';
import ReactEcharts from 'echarts-for-react';

export class BarChart extends React.Component {
    getOption = () => {
        return {
        title: {
            text: 'ECharts Bar Chart Example'
        },
        tooltip: {},
        legend: {
            data: ['Sales']
        },
        xAxis: {
            data: ['shirt', 'cardign' , 'chiffon shirt' , 'pants', 'heels', 'socks'],
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            color: '#ffed00',
        }]
     };
}

    render(): JSX.Element {
        return (
            <ReactEcharts 
                option={this.getOption()} 
                style={{height: '350px', width: '100%'}}  
                className="react_for_echarts" 
            />
            );
        }
}