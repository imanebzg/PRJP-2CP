import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './histogrm.css';

const chart1Data = {
  labels: ["rrrrr","Others",  "Others",  "Others","ttrttt","ttrtttpss","ttrjhttt"],
  data: [11, 12,17, 14,16,12,15],
};

const chart2Data = {
  labels: ["rrrrr",  "Others",  "Others","ttrttt"],
  data: [30, 17,54, 44],
};

const chart3Data = {
  labels: ["rrrrr",  "Others"],
  data: [30, 17],
};

const populateUl = (ul, chartData) => {
  if (ul) {
    ul.innerHTML = ''; // Efface le contenu précédent de l'élément ul
    chartData.labels.forEach((label, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${label}: <span class='percentage'>${chartData.data[i]}</span>`;
      ul.appendChild(li);
    });
  }
};

const generateColors = (numColors) => {
  const colors = [];
  const step = 360 / numColors; // Calculer l'incrément pour répartir les couleurs uniformément

  for (let i = 0; i < numColors; i++) {
    const hue = (i * step) % 360; // Calculer la teinte en fonction de l'incrément
    colors.push(`hsla(${hue}, 70%, 50%, 0.6)`);
  }

  return colors;
};

const Historgm = () => {
  const myChartRef = useRef(null);
  const myChart2Ref = useRef(null);
  const myChart3Ref = useRef(null);

  useEffect(() => {
    const numUniqueCategories = new Set(chart1Data.data).size;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);
  
    const myChart = new Chart(myChartRef.current, {
      type: "bar",
      data: {
        labels: chart1Data.labels,
        datasets: [
          {
            label: "Pourcentage",
            data: chart1Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  
    return () => {
      myChart.destroy();
    };
  }, []);

  useEffect(() => {
    const numUniqueCategories = new Set(chart2Data.data).size;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);
  
    const myChart = new Chart(myChart2Ref.current, {
      type: "bar",
      data: {
        labels: chart2Data.labels,
        datasets: [
          {
            label: "Pourcentage",
            data: chart2Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  
    return () => {
      myChart.destroy();
    };
  }, []);

  useEffect(() => {
    const numUniqueCategories = new Set(chart3Data.data).size;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);
  
    const myChart = new Chart(myChart3Ref.current, {
      type: "bar",
      data: {
        labels: chart3Data.labels,
        datasets: [
          {
            label: "Pourcentage",
            data: chart3Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  
    return () => {
      myChart.destroy();
    };
  }, []);

  useEffect(() => {
    const ul = document.querySelector(".details ul");
    const ul2 = document.querySelector(".details2 ul");
    const ul3 = document.querySelector(".details3 ul");

    populateUl(ul, chart1Data);
    populateUl(ul2, chart2Data);
    populateUl(ul3, chart3Data);
  }, []);

  return (
    <div className="Histogrm">
      <div className="container">
        <div className="title">
          <p>Details des postes par exercices</p>
        </div>
        <form action="#">
          <div className="user_details">
            <div className="scope1">
              <p>Scope 1 :  </p>
            </div>
            <div className="programming-stats3">
              <div className="chart-container">
                <canvas ref={myChart3Ref}></canvas>
              </div>
              <div className="details3">
                <ul className="details"></ul>
              </div>
            </div>
            <div className="mini_cont">
              <div className="scopes">
                <p>Scope 2 :  </p>
              </div>
              <div className="programming-stats">
                <div className="chart-container">
                  <canvas ref={myChartRef}></canvas>
                </div>
                <div className="details">
                  <ul className="details2"></ul>
                </div>
              </div>
              <div className="scopes">
                <p>Scope 3 :  </p>
              </div>
              <div className="programming-stats2">
                <div className="chart-container">
                  <canvas ref={myChart2Ref}></canvas>
                </div>
                <div className="details2">
                  <ul className="details3"></ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Historgm;
