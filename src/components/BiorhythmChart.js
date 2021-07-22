import dayjs from "dayjs";
import { Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorythmSeries } from "../calculation";
import './BiorhythmChart.css'
function formatDate(isoString){
    return dayjs(isoString).format('D MMM');
}

function BiorhythmChart({birthDate,targetDate}){
    const startDate = dayjs(targetDate).subtract(15,"days").toISOString();
    const data = calculateBiorythmSeries(birthDate,startDate,31).
        map((item)=>({...item,date:formatDate(item.date)}));
    return (
        <ResponsiveContainer className="BiorhythmChart" width="100%" height={200}>
           <LineChart data={data}>
               <XAxis dataKey="date" ticks={[data[3].date, data[15].date,data[27].date]}></XAxis>
               <ReferenceLine x ={data[15].date}></ReferenceLine>
               <Line type="natural" dot={false} dataKey="physical" className="physical" stroke="green"></Line>
               <Line type="natural" dot={false}  dataKey="emotional" className="emotional" stroke="red"></Line>
               <Line type="natural" dot={false}  dataKey="intellectual" className="intellectual" stroke="blue"></Line>
           </LineChart>
        </ResponsiveContainer>
    );
};
export default BiorhythmChart;