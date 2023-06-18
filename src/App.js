import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";

function App() {
  // get data from "localhost:8000/api/data" every 10 seconds
  const [data, setData] = useState({
    temperature: [],
    humidity: [],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://weather-monitor-server.onrender.com/api/data").then((res) => {
        setData(res.data);
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "400px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <h1>Mini Project - Nhóm 8</h1>
      <p>Biểu đồ biểu thị nhiệt độ và độ ẩm theo thời gian:</p>
      <ResponsiveLine
        data={[{ id: "Nhiệt độ", data: data.temperature }]}
        margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Thời gian",
          legendOffset: 40,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Nhiệt độ (°C)",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        colors={{ scheme: "set1" }}
        pointSize={4}
        pointColor={{ theme: "background" }}
        pointBorderWidth={4}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
      <ResponsiveLine
        data={[{ id: "Độ ẩm", data: data.humidity }]}
        margin={{ top: 40, right: 120, bottom: 80, left: 80 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Thời gian",
          legendOffset: 40,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Độ ẩm (%)",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        colors={{ scheme: "set3" }}
        pointSize={4}
        pointColor={{ theme: "background" }}
        pointBorderWidth={4}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
