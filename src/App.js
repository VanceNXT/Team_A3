import "./App.css";
import { Route, Switch } from "react-router-dom";
import CardIndex from "./components/Cards/CardIndex";
import { Registration } from "./components/trainer_registration/registration";
import TrainerVerification from "./components/Admin_trainer_reg/TrainerVerification";
import { CourseDescription } from "./components/Course-des/description";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <CardIndex />
        </Route>
        <Route path="/course/:id">
          {/* <CourseDesc /> */}
          <CourseDescription />
        </Route>
        <Route path="/trainer_registration">
          <Registration />
        </Route>
        <Route path="/admin_trainer_verification">
          <TrainerVerification />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
