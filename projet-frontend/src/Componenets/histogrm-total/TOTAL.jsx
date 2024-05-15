import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './TOTAL.css';

const chart1Data = {
  labels: ["rrrrr", "aaaa", "tttt", "bbbb", "Others"],
  data: [30, 17, 10, 7, 36],
};
const chart2Data = {
  labels: ["rrrrr", "aaaa"],
  data: [30,  36],
};

const populateUl = (ul, chartData) => {
  if (ul) {
    ul.innerHTML = ''; // Efface le contenu précédent de l'élément ul
    chartData.labels.forEach((label, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${label}: <span class='percentage'>${chartData.data[i]}%</span>`;
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

const Histogrm_T = () => {
  const myChart1Ref = useRef(null);
  const myChart2Ref = useRef(null);
  const ul4Ref = useRef(null);
  const ul5Ref = useRef(null);

  useEffect(() => {
    const numUniqueCategories = new Set(chart1Data.data).size;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);

    const myChart1 = new Chart(myChart1Ref.current, {
      type: "bar",
      data: {
        labels: chart1Data.labels,
        datasets: [
          {
            label: " pourcentage de** ",
            data: chart1Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        borderWidth: 1,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    populateUl(ul4Ref.current, chart1Data);

    return () => {
      myChart1.destroy();
    };
  }, []);

  useEffect(() => {
    const numUniqueCategories = new Set(chart2Data.data).size;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);

    const myChart2 = new Chart(myChart2Ref.current, {
      type: "bar",
      data: {
        labels: chart2Data.labels,
        datasets: [
          {
            label: " pourcentage de** ",
            data: chart2Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        borderWidth: 1,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    populateUl(ul5Ref.current, chart2Data);

    return () => {
      myChart2.destroy();
    };
  }, []);

  return (
    <div className="Rapport_det">

      <div className="container">
        
        <div className="title">
          <p>Rapport détaillé</p>
        </div>
        <form action="#">
          <div className="user_details">
            <div className="resultat">
              <div className="title_big">
                <p>Resultats par types d'emissions direct :</p>
              </div>
              <div className="programming-stats4">
                <div className="chart-container">
                  <canvas ref={myChart1Ref} className="my-chart4"></canvas>
                </div>
                <div className="details4">
                  <ul ref={ul4Ref}></ul>
                </div>
              </div>
            </div>
            <div className="resultat">
              <div className="title_big">
                <p>Resultats par types d'emissions indirect :</p>
              </div>
              <div className="programming-stats5">
                <div className="chart-container">
                  <canvas ref={myChart2Ref} className="my-chart5"></canvas>
                </div>
                <div className="details5">
                  <ul ref={ul5Ref}></ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Histogrm_T;
