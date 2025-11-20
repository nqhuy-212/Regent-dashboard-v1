import React from "react";
import PageTitle from "../../components/PageTitle";
import Iframe from "../../components/Iframe";

function OffStdTime() {
  return (
    <>
      <PageTitle
        icon="bi bi-clipboard-data"
        title="Power BI /"
        subtitle="Off standard time report"
      />
      <Iframe src="https://app.powerbi.com/view?r=eyJrIjoiOGUzZGQ0ODctMzA2YS00ZGZhLWE4MzQtOWRhOTVmOWQ2OGI1IiwidCI6IjE5ZmI1ZDI3LWI2MjktNDA1Ni04N2QwLThhOGEzOWE4Mjc2MiIsImMiOjEwfQ%3D%3D&refresh=1" />
    </>
  );
}

export default OffStdTime;
