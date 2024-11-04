import { Navigate, Route, Routes } from "react-router-dom";
import { Teams } from "../Teams/Teams";
import { Tournaments } from "../Tournaments/Tournaments";
import { Home } from "../Home/Home";

export const Body = () => {
    return (
      <>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Tournaments" element={<Tournaments />} />
        </Routes>
      </>
    );
  };