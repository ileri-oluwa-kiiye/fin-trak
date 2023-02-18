// import { ResponsiveBar } from '@nivo/bar'

// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.


// const data = [
//     {
//       "day": "Mon",
//       "in": 80,
//       "inColor": "hsl(79, 70%, 50%)",
//       "out": 30,
//       "outColor": "hsl(85, 70%, 50%)",
//     },
//     {
//       "day": "Tue",
//       "in": 80,
//       "inColor": "hsl(118, 70%, 50%)",
//       "out": 30,
//       "outColor": "hsl(192, 70%, 50%)",
//     },
//     {
//       "day": "Wed",
//       "in": 80,
//       "inColor": "hsl(221, 70%, 50%)",
//       "out": 30,
//       "outColor": "hsl(75, 70%, 50%)",
//     },
//     {
//       "day": "Thur",
//       "in": 80,
//       "inColor": "hsl(193, 70%, 50%)",
//       "out": 30,
//       "outColor": "hsl(110, 70%, 50%)",
//     },
//     {
//       "day": "Fri",
//       "in": 80,
//       "inColor": "hsl(135, 70%, 50%)",
//       "out": 30,
//       "outColor": "hsl(257, 70%, 50%)",
//     },
//     {
//       "day": "Sat",
//       "in": 80,
//       "inColor": "hsl(5, 70%, 50%)",
//       "out": 30,
//       "outColor": "hsl(349, 70%, 50%)",
//     },
//     {
//       "day": "Sun",
//       "in": 80,
//       "inColor": "hsl(202, 70%, 50%)",
//       "out": 30,
//       "outColor": "hsl(114, 70%, 50%)",
//     }
//   ]



// const Barchart = ({ data/* see data tab */ }) => {
//     return(
//         <div style={{height:"1000px"}}>
//             <ResponsiveBar
//                 data={data}
//                 keys={[
//                     'in',
//                     'out'
//                 ]}
//                 indexBy="day"
//                 margin={{ top: 50, right: 200, bottom: 50, left: 60 }}
//                 padding={0.55}
//                 groupMode="grouped"
//                 valueScale={{ type: 'linear' }}
//                 indexScale={{ type: 'band', round: true }}
//                 valueFormat=" >-"
//                 colors={{ scheme: 'nivo' }}
//                 defs={[
//                     {
//                         id: 'dots',
//                         type: 'patternDots',
//                         background: 'inherit',
//                         color: '#38bcb2',
//                         size: 4,
//                         padding: 1,
//                         stagger: true
//                     },
//                     {
//                         id: 'lines',
//                         type: 'patternLines',
//                         background: 'inherit',
//                         color: '#eed312',
//                         rotation: -45,
//                         lineWidth: 6,
//                         spacing: 10
//                     }
//                 ]}
//                 fill={[
//                     {
//                         match: {
//                             id: 'in'
//                         },
//                         id: 'dots'
//                     },
//                     {
//                         match: {
//                             id: 'out'
//                         },
//                         id: 'lines'
//                     }
//                 ]}
//                 borderRadius={4}
//                 borderColor={{
//                     from: 'color',
//                     modifiers: [
//                         [
//                             'darker',
//                             1.6
//                         ]
//                     ]
//                 }}
//                 axisTop={null}
//                 axisRight={null}
//                 axisBottom={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: 'day',
//                     legendPosition: 'middle',
//                     legendOffset: 32
//                 }}
//                 axisLeft={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: 'food',
//                     legendPosition: 'middle',
//                     legendOffset: -40
//                 }}
//                 labelSkipWidth={12}
//                 labelSkipHeight={12}
//                 labelTextColor={{
//                     from: 'color',
//                     modifiers: [
//                         [
//                             'brighter',
//                             '1.4'
//                         ]
//                     ]
//                 }}
//                 legends={[
//                     {
//                         dataFrom: 'keys',
//                         anchor: 'bottom-right',
//                         direction: 'column',
//                         justify: false,
//                         translateX: 120,
//                         translateY: 0,
//                         itemsSpacing: 2,
//                         itemWidth: 100,
//                         itemHeight: 20,
//                         itemDirection: 'left-to-right',
//                         itemOpacity: 0.85,
//                         symbolSize: 20,
//                         effects: [
//                             {
//                                 on: 'hover',
//                                 style: {
//                                     itemOpacity: 1
//                                 }
//                             }
//                         ]
//                     }
//                 ]}
//                 tooltip={function(){}}
//                 role="application"
//                 isFocusable={true}
//                 ariaLabel="Nivo bar chart demo"
//                 barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in day: "+e.indexValue}}
//             />
//         </div>
//     )
// }



const Barchart = () => {
    return(
        <div>
            Bar Chart here
        </div>
    )
}


export default Barchart