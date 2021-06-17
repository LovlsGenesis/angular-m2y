import { AfterViewInit, Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  options: EChartsOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: {
      name: 'Contas',
      type: 'bar',
      barWidth: '60%',
      data: [1, 5, 2, 3, 3, 9, 2],
    },
  };
  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const chartElement1 = document.getElementById('chart1');
      const chartElement2 = document.getElementById('chart2');
      // const chart1 = getInstanceByDom(chartElement1);
      // const chart2 = getInstanceByDom(chartElement2);
      // connect([chart1, chart2]);
    });
  }

}
