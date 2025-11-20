import React from "react";
import PageTitle from "../../components/PageTitle";
import Iframe from "../../components/Iframe";

function CopReport() {
  return (
    <>
      <PageTitle
        icon="bi bi-clipboard-data"
        title="Power BI /"
        subtitle="COP Report"
      />
      <Iframe src="https://app.powerbi.com/view?r=eyJrIjoiZGZjYWQ5ZjYtNThmNC00OTNhLWFlMDMtODAzM2Q4NTI0NGI2IiwidCI6IjE5ZmI1ZDI3LWI2MjktNDA1Ni04N2QwLThhOGEzOWE4Mjc2MiIsImMiOjEwfQ%3D%3D&refresh=1" />
    </>
  );
}

export default CopReport;
