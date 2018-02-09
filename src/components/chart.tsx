import * as React from 'react';
import ReactEcharts from 'echarts-for-react';

export class Chart extends React.Component {

    getOption = () => {
        return {
          title: {
            text: 'Baller Chart'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data: ['Stuff', 'More Stuff', 'Whoah Stuff']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['a', 'b', 'c', 'd', 'e', 'f', 'g']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name: 'Data',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'More Data',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'Extra Data',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [150, 232, 201, 154, 190, 330, 410]
            }
          ]
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