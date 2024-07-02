import { forwardRef, useRef, useImperativeHandle, } from "react";
import { createPortal } from "react-dom";

const ResultModel = forwardRef(function ResultModel(
  { targetTime,remainingTime,onReset },
  ref
) {
  const dialog = useRef();
  const userLost=remainingTime < 0;
  const formattingRemainingTime=(remainingTime/1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  }); 

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>you lost</h2>}
      <p>
        The target time was <strong>{targetTime}seconds.</strong>
      </p>
      <p>
        The stopped timer with <strong>{formattingRemainingTime}</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal'),
  );
});

export default ResultModel;
