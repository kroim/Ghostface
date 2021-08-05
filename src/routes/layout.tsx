import React from "react";
import HomeHeader from "~/components/HomeHeader";
import Footer from "~/components/HomeFooter";

interface Props {
  component: React.FC,
  layout: string,
}

const AppLayout : React.FC<Props> = ({component, layout}) => {
  if(layout === 'dashboard'){
    return (
      <>{React.createElement(component)}</>
    );
  }
  return (
    <div>
      <HomeHeader />
      {React.createElement(component)}
      <Footer />
    </div>
  );
}

export default AppLayout;
