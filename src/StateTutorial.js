import React, { useState } from 'react'

function StateTutorial() {
    // 버튼이 있는 카운터
    // 아래와 같이 변수를 직접 변경시키면, 의도한 대로 카운터가 작동하지 못한다.
    // 실제로 변수의 값은 늘어나지만, 이것이 화면에 반영되지는 못하는 모습.
    // 그 이유는, 변수가 바뀔 때마다 웹사이트에 반영되도록 하는 로직이 존재하지 않기 때문

//     const [counter, setCounter] = useState(0);

//     const increment = () => {
//         setCounter(counter + 1);
//     }

//   return (
//     <div>
//         {counter} <button onClick={increment}>Increment</button>
//     </div>
//   )

    // input에 쓴 대로 텍스트를 보여주기
    const [value, setValue] = useState("default");

    let onChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
    }
    return (

        <div>
            <input type='text' onChange={onChange} />
            {value}
        </div>
    );
}

export default StateTutorial