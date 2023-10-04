import React from "react";

function Ask() {
  return (
    <>
      <div className="background">
        <div className="quiz-box">
          <h2>Setup Quiz</h2>
          <div className="quiz-item">
            <label htmlFor="">Number Of Questions</label>
            <select name="" id="">
              <option value={4} selected>
                1
              </option>
              <option value={8}>2</option>
              <option value={12}>3</option>
            </select>
          </div>
          <div className="quiz-item">
            <label htmlFor="">Category</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ask;
