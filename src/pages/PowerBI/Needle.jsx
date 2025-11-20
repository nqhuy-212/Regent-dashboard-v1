import React from "react";
import PageTitle from "../../components/PageTitle";
import Iframe from "../../components/Iframe";

function Needle() {
  return (
    <>
      <PageTitle
        icon="bi bi-clipboard-data"
        title="Power BI /"
        subtitle="Broken Needle Report"
      />
      <Iframe src="https://app.powerbi.com/view?r=eyJrIjoiZTMxZmYzMjgtOTdjYS00MjMxLWJlNDEtZThiMTJjNTQxOWYwIiwidCI6IjE5ZmI1ZDI3LWI2MjktNDA1Ni04N2QwLThhOGEzOWE4Mjc2MiIsImMiOjEwfQ%3D%3D&refresh=1" />
    </>
  );
}

export default Needle;
