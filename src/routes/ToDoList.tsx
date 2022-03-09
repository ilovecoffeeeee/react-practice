import { useRecoilState, useRecoilValue } from "recoil";
import { minuteState, hourSelector } from "./atoms";

export function ToDoList () {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    };
    const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    }
    return (
        <div>
            <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
            <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" />
        </div>
    );
};


export default ToDoList;


