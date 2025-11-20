import React from "react";
import PageTitle from "../../components/PageTitle";
import Iframe from "../../components/Iframe";

function DailyIndividualEff() {
  return (
    <>
      <PageTitle
        icon="bi bi-clipboard-data"
        title="Power BI /"
        subtitle="Daily Individual Efficiency Report"
      />
      <Iframe src="https://app.powerbi.com/view?r=eyJrIjoiMmI4ZmQ2YWMtNzYzYy00MjViLTk2MzQtODY1NTVkYzUyYTJkIiwidCI6IjE5ZmI1ZDI3LWI2MjktNDA1Ni04N2QwLThhOGEzOWE4Mjc2MiIsImMiOjEwfQ%3D%3D&refresh=1" />
    </>
  );
}

export default DailyIndividualEff;
