import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const options = {
    xaxis: {
      categories: ["July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"]
    }
  };
  const series = [
    {
      name: '#1 Pay-per-use',
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: '#2 Forge unlimited',
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    }
  ];

  return (
    <Fragment>
      <Chart options={options} series={series} type="area" />
    </Fragment>
  );
}
