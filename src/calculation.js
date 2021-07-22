import dayjs from "dayjs";



function calculateBiorythm(birthdate, targetDate,cycle){
    const birthDay = dayjs(birthdate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay,'days') ;
    return Math.sin(2*Math.PI*diff/cycle);
}

export function calculateBiorythms(birthdate, targetDate){
    return {
        date : targetDate,
        physical :calculateBiorythm(birthdate, targetDate,23),
        emotional :calculateBiorythm(birthdate, targetDate,28),
        intellectual :calculateBiorythm(birthdate, targetDate,33)
    }
}
export function calculateBiorythmSeries(birthDate,startDate,size){
    const series = [];
    const startDay= dayjs(startDate).startOf('day');
    for (let i = 0; i < size; i++) {
        const targetDate = startDay.add(i,"days").toISOString();
        series.push(calculateBiorythms(birthDate,targetDate));
    
    }
    return series;
}