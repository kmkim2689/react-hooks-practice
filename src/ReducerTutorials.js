import React, { useReducer } from 'react'

// reducer hook
/*
useState를 대체할 수 있는 hook.
즉, useState와 기본적으로는 같은 목적을 가지는 훅임.
=> 그러나, 상황에 따라 useReducer를 쓰는 것의 이점이 있음.
어떤 이벤트가 발생 시, 2개의 서로 다른 state 변수를 한꺼번에 변경해야 하는 경우
useReducer를 사용하는 것이 이득임.
복수의 state 변수를 일일이 바꾸는 작업이 필요없어지기 때문이다.

 */
function ReducerTutorials() {

    // useReducer를 사용하지 않을 때
    // 2개의 state 변수를 선언
//     const [ count, setCount ] = useState(0);
//     const [ showText, setShowText ] = useState(true);

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={() => {
//             // 클릭 이벤트 발생 시, state 변수 2개가 한꺼번에 변경
//             setCount(count + 1);
//             setShowText(!showText);
//         }} />
//         {/* showtext가 true일때만 텍스트를 보여주기 위한 코드. */}
//         {showText && <p>this is the text</p>}
//     </div>
//   )

// useReducer를 사용할 때.
/*
배열을 선언하고, 그 배열에 useReducer()를 할당한다.
배열의 첫번째 요소 : 객체를 담고 있는 변수. 그 객체 안에는 다루게 될 모든 state 변수가 들어가 있다.
배열의 두번째 요소 : dispatch 함수. setState 함수와 비슷
-> Redux와 매우 비슷...
첫번째 변수(객체)내의 state 변수가 변화하게 될 때마다, dispatch 함수를 호출됨.

useReducer()의 두 가지 인자들
첫 번째 인자 : reducer function
두 번째 인자 : 배열의 첫 번째 변수(객체) 내의 모든 state 변수들의 기본값을 설정 -> 객체 형태이다.

reduce function을 정의한다. (state 변경 시 발생할 이벤트를 정의)
reducer function의 두 가지 매개변수
첫 번째 매개변수 : state -> state 변수들의 현재 값을 얻을 수 있음
두 번째 매개변수 : action -> 어떠한 종류의 action을 취할 것인지 결정.
이것은 switch-case 구문과 주로 많이 사용된다.
어떠한 종류의 액선을 취할 것인지
state에 일어날 수 있는 액션에 따라 다른 동작(객체 안에 있는 모든 state를 변경할 수도 있고, state 하나만 변경할 수도 있고...)을 취할 수 있음
*/
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                // state 객체 내의 state 변수들 중 count만 변경시키고 싶음. showText는 그대로 두고 싶음
                // return 구문에서 직접적으로 키와 값을 설정
                return {count: state.count + 1, showText: state.showText}

            case "toggleShowText":
                // state 객체 내의 state 변수들 중 showText만 변경시키고 싶음.
                // count는 기존 값 그대로(state.count) 둠
                return {count: state.count, showText: !state.showText}
            
            default:
                // 위 두 가지에 해당하지 않는다면, 아무것도 하지 않는다.
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                // 실제로 사용할 때, dispatch 함수 인자로 객체를 집어넣음. 그 안에서 type을 직접 설정
                dispatch({ type : "INCREMENT" })
            }}>click here</button>
            {state.showText && <p>this is the text</p>}
        </div>
    );
}

export default ReducerTutorials