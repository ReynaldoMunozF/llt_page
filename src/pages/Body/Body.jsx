import { Navigate, Route, Routes } from "react-router-dom";
import { Teams } from "../Teams/Teams";
import { Tournaments } from "../Tournaments/Tournaments";
import { Home } from "../Home/Home";
import { Picks } from "../Picks/Picks";

export const Body = () => {
    return (
      <>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Tournaments" element={<Tournaments />} />
          <Route path="/Picks" element={<Picks />} />
        </Routes>
      </>
    );
  };