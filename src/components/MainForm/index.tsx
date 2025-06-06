import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext";


export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => {
      return {
      ...prevState,
      formattedSecondsRemaining: '21:00', // 25 minutes in seconds
    };
  });
}
  return (
        <form className='form' action="">
          <button type="button" onClick={handleClick}>Clicar</button>
          <div className='formRow'>
            <DefaultInput
            labelText='task'
            id='meuInput' 
            type='text' 
            placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>O próximo intervalor é de 25 min</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
  );
}