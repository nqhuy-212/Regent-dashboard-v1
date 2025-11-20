import React from "react";
import PageTitle from "../../components/PageTitle";
import Iframe from "../../components/Iframe";

function OeeTvShow() {
  return (
    <>
      <PageTitle
        icon="bi bi-clipboard-data"
        title="Power BI /"
        subtitle="OEE TV Show"
      />
      <Iframe src="https://app.powerbi.com/view?r=eyJrIjoiNGE0YzZhZjItZTcxNC00MWY2LTk1M2YtZTM3OGUzZmIzNWM4IiwidCI6IjE5ZmI1ZDI3LWI2MjktNDA1Ni04N2QwLThhOGEzOWE4Mjc2MiIsImMiOjEwfQ%3D%3D&refresh=1" />
    </>
  );
}

export default OeeTvShow;
