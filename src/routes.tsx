import React from "react";

import { Switch, Route } from "react-router-dom";

import WrapperUser from "./components/WrapperUser";
import AdvantagesOfUsing from "./components/AdvantagesOfUsing";
import WhatIsTheStyled from "./components/WhatIsTheStyled";
import Strengths from "./components/Strengths";
import NotPartOfFunctionality from "./components/NotPartOfFunctionality";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={WhatIsTheStyled} />
    <Route path="/vantagens-de-usar" component={AdvantagesOfUsing} />
    <Route path="/pontos-positivos" component={Strengths} />
    <Route
      path="/o-que-o-styled-components-nao-faz"
      component={NotPartOfFunctionality}
    />
    <Route path="/status-do-usuário" component={WrapperUser} />
  </Switch>
);

export default Routes;
