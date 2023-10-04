import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const [listQuestions, setListQuestions] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [number, setNumber] = useState(1);
  const [category, setCategory] = useState("");
  const [difficult, setDifficult] = useState("");
  const [listQA, setListQA] = useState([]);

  const fetchListQuestions = async () => {
    try {
      await axios
        .get("http://localhost:4444/api/question/")
        .then((response) => {
          setListQuestions(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchListCategory = async () => {
    try {
      await axios
        .get("http://localhost:4444/api/category/")
        .then((response) => {
          setListCategory(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListQuestions();
    fetchListCategory();
  }, []);

  const handleStart = async () => {
    const searchQuery = {
      category: category,
      level: Number(difficult),
      limit: Number(number),
    };
    console.log(searchQuery, "searchQuery");
    try {
      const response = await axios.get(
        `http://localhost:4444/api/question/filter`,
        {
          params: searchQuery,
        }
      );
      console.log(response.data, "RESPONSE");
      //   setListQA(response.data);
      //   console.log(listQA, "LIST QA");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="background">
        <div className="quiz-box">
          <h1>Setup Quiz</h1>
          <div className="quiz-item">
            <label htmlFor="">Number Of Questions</label>
            <select
              name=""
              id=""
              onChange={(event) => setNumber(event.target.value)}
            >
              <option value={4} selected>
                1
              </option>
              <option value={8}>2</option>
              <option value={12}>3</option>
            </select>
          </div>
          <div className="quiz-item">
            <label htmlFor="">Category</label>
            <select
              name=""
              id=""
              onChange={(event) => setCategory(event.target.value)}
            >
              {listCategory?.map((category, index) => {
                return (
                  <option value={category.id} selected>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="quiz-item">
            <label htmlFor="">Difficulty</label>
            <select
              name=""
              id=""
              onChange={(event) => setDifficult(event.target.value)}
            >
              <option value={1} selected>
                Easy
              </option>
              <option value={2}>Normal</option>
              <option value={3}>Hard</option>
            </select>
          </div>
          <button onClick={handleStart}>START</button>
        </div>
      </div>
    </>
  );
}

export default Home;
