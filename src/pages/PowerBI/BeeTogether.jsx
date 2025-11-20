import React from "react";
import PageTitle from "../../components/PageTitle";
import Iframe from "../../components/Iframe";

function BeeTogether() {
  return (
    <>
      <PageTitle
        icon="bi bi-clipboard-data"
        title="Power BI /"
        subtitle="Bee together bonus report"
      />
      <Iframe src="https://app.powerbi.com/view?r=eyJrIjoiYWMzZjRlM2YtNjAxZi00YWFlLWE5OWQtYzkwY2QzYjJjNzgyIiwidCI6IjE5ZmI1ZDI3LWI2MjktNDA1Ni04N2QwLThhOGEzOWE4Mjc2MiIsImMiOjEwfQ%3D%3D&refresh=1" />
    </>
  );
}

export default BeeTogether;
