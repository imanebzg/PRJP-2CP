import React, { useEffect, useState } from 'react';
import './Avancement_exmp.css';


const Avancement_exmp = () => {
  const [progressValue, setProgressValue] = useState(0);
  const progressEndValue = 90;
  const speed = 10;

  useEffect(() => {
    const progress = setInterval(() => {
      setProgressValue(prevProgressValue => {
        const newValue = prevProgressValue + 1;
        return newValue <= progressEndValue ? newValue : progressEndValue;
      });
    }, speed);

    return () => clearInterval(progress);
  }, []);

  return (
    <div className="Avancement_exmp">
      <div className="container">
        <div className="title">
          <p>Avancement par exemple</p>
        </div>

        <div className="user_details">
          <div className="resultat">
            <div className="container_circc">
              <div
                className="circular-progress"
                style={{
                  background: `conic-gradient(
                    #ffffff ${progressValue * 3.6}deg,
                    #747BAD ${progressValue * 3.6}deg
                  )`
                }}
              >
                <div className="value-container">{`${progressValue}%`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avancement_exmp;
