import { ResponsiveRadialBar } from "@nivo/radial-bar";

function MyResponsiveRadialBar() {
  const data = [
    {
      id: "영어 필사 100일의 기적",
      data: [
        {
          x: "1day",
          y: 37,
        },
        {
          x: "2day",
          y: 30,
        },
        {
          x: "3day",
          y: 50,
        },
        {
          x: "4day",
          y: 118,
        },
      ],
    },
    {
      id: "퓨처셀프",
      data: [
        {
          x: "1day",
          y: 37,
        },
        {
          x: "2day",
          y: 40,
        },
        {
          x: "3day",
          y: 40,
        },
        {
          x: "4day",
          y: 58,
        },
      ],
    },
    {
      id: "total",
      data: [
        {
          x: "total",
          y: 250,
        },
      ],
    },
  ];
  return (
    <>
      <ResponsiveRadialBar
        data={data}
        valueFormat=" >-1.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
          {
            anchor: "top",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 6,
            itemDirection: "left-to-right",
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </>
  );
}

export default MyResponsiveRadialBar;
