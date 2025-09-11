import { useState } from "react";
import {
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import "./ImpactStats.css";

const data = [
  { year: "2022", telur: 25, minyak: 105, keluarga: 10, senyum: 100 },
  { year: "2023", telur: 50, minyak: 210, keluarga: 10, senyum: 200 },
  { year: "2024", telur: 90, minyak: 370, keluarga: 10, senyum: 350 },
];

const ImpactStats = () => {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="impact-stats">
      <h1>Statistik Impact per Tahun</h1>

      <p>
        Hingga saat ini, Caktadent telah berhasil mengolah cangkang telur hingga <strong>90 kg</strong>,{" "}
        mendaur ulang minyak jelantah sebanyak <strong>370 L</strong>, melibatkan <strong>10 keluarga</strong>,{" "}
        dan menjaga <strong>350 senyum sehat</strong>.
      </p>

      <div className="chart-switcher">
        <button 
          className={chartType === "bar" ? "active" : ""} 
          onClick={() => setChartType("bar")}
        >
          Bar Chart
        </button>
        <button 
          className={chartType === "line" ? "active" : ""} 
          onClick={() => setChartType("line")}
        >
          Line Chart
        </button>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          {chartType === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="telur" fill="#47B048" name="Cangkang Telur (kg)" />
              <Bar dataKey="minyak" fill="#007BFF" name="Minyak Jelantah (L)" />
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="keluarga" stroke="#FF9800" name="Keluarga Terlibat" />
              <Line type="monotone" dataKey="senyum" stroke="#E91E63" name="Senyum Sehat" />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Responsive Table */}
      <div className="impact-table-container">
        <table className="impact-table">
          <thead>
            <tr>
              <th>Tahun</th>
              <th>Cangkang Telur (kg)</th>
              <th>Minyak Jelantah (L)</th>
              <th>Keluarga Terlibat</th>
              <th>Senyum Sehat</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.year}</td>
                <td>{d.telur}</td>
                <td>{d.minyak}</td>
                <td>{d.keluarga}</td>
                <td>{d.senyum}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="impact-table-cards">
          {data.map((d, i) => (
            <div className="impact-card" key={i}>
              <h3>{d.year}</h3>
              <p><strong>Cangkang Telur:</strong> {d.telur} kg</p>
              <p><strong>Minyak Jelantah:</strong> {d.minyak} L</p>
              <p><strong>Keluarga Terlibat:</strong> {d.keluarga}</p>
              <p><strong>Senyum Sehat:</strong> {d.senyum}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
