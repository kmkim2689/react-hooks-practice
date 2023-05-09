import React, { useRef } from 'react'

function RefTutorials() {
    /*
    useRef() : React에서 Vanilla JS마냥 DOM을 직접(Manually) 접근하거나 조작하고 싶을 때 사용하는 Hook
    vanilla JS에서, document.getElementById를 이용하여 직접 값을 조작하는 것과 비슷...
    하고자 하는 것 : change name 버튼을 누르면, input에 포커스가 자동으로 가게 되고 input에 입력할 수 있도록 하는 상태로 변경.
    => 이러한 기능을 구현하기 위하여, useRef 훅을 사용하면 된다.

    사용법
    1. const 변수를 하나 선언하고, 거기에 useRef()를 할당한다.

    참고로 useRef()의 경우, current 속성을 가지는 객체를 반환한다. 인자로 넘어온 초기값은 current 속성에 할당한다. current 속성은 값을 변경해도 state와는 달리 재렌더링 되지 않는다. 또한, 재렌더링 될 때도 current 속성의 값은 사라지지 않는다.
    

    2. 특정 DOM element에 대한 참조를 하고 싶으면 해당 태그에 ref 속성을 설정한다. 속성값으로 useRef를 할당한 변수를 집어넣는다. 이렇게 되면, useRef가 할당된 변수를 이용하여 해당 태그와 관련된 많은 정보를 얻을 수 있게 된다. 

    */
    // 리액트에서는 아래와 같이 직접 DOM에 접근하지 않고 Virtual DOM을 이용하여 요소를 변경한다.
    // document.getElementById() => manually manipulating individual elements of the application
    // 다만, 리액트를 사용하면서도 직접 요소를 변경(Manually Manipulating)해야 하는 상황이 있을 수 있음.

    
    // useRef가 반환하는 객체 내부의 current속성값으로 null
    // const inputRef = useRef(null);

    // const onClick = () => {
      // inputRef가 input 태그의 ref 속성값으로 설정되었기 때문에, input 태그에 대한 정보들을 객체 형태로 얻어올 수 있게 된다. 이제 inputRef.current값은 null이 아닌, input 태그(DOM Element)가 된다. 만약 input에 들어가있는 값을 참조하고 싶으면 input 태그의 속성인 value를 참조하면 될 것이다.
  //     console.log(inputRef.current.value)

  //   }
  // return (
  //   <div>
  //       <h1>Pedro</h1>
  //       <input type='text' placeholder='ex' ref={inputRef} />
  //       <button onClick={onClick}>change name</button>
  //   </div>
  // )

  // 버튼 클릭 시, input에 focus 주기
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>input</h1>
      <input type='text' placeholder='ex' ref={inputRef} />
      <button onClick={onClick}>change name</button>
    </div>
  );

}

export default RefTutorials