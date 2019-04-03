import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage.js';
import WelcomePage from './pages/WelcomePage.js'
import CreateCompaniesPage from './pages/CreateCompaniesPage.js';
import EditCompanyPage from './pages/EditCompanyPage.js';
import DeleteCompanyPage from './pages/DeleteCompanyPage.js';

import CompanyDetailPage from './pages/CompanyDetailPage.js';
import NewTeamForCompanyPage from './pages/NewTeamForCompanyPage.js';
import EditTeamByIdPage from './pages/EditTeamByIdPage.js';
import DeleteTeamByID from './pages/DeleteTeamByID.js';

import TeamDetailByID from './pages/TeamDetailByID.js';

import CreateNewCoachForTeamPage from './pages/CreateNewCoachForTeamPage.js';
import EditCoachForTeamPage from './pages/EditCoachForTeamPage.js';
import DeleteCoachForTeamPage from './pages/DeleteCoachForTeamPage.js';
import CoachDetailByIdPage from './pages/CoachDetailByIdPage.js';

import CreateNewPlayerForTeamPage from './pages/CreateNewPlayerForTeamPage.js';
import EditPlayerForTeamPage from './pages/EditPlayerForTeamPage.js';
import DeletePlayerForTeamPage from './pages/DeletePlayerForTeamPage.js';

import CreateNewScheduledPracticeForTeamPage from './pages/CreateNewScheduledPracticeForTeamPage.js';
import EditScheduledPracticeForTeamPage from './pages/EditScheduledPracticeForTeamPage.js';
import DeleteScheduledPracticeForTeamPage from './pages/DeleteScheduledPracticeForTeamPage.js';

import CreateTournamentForTeamPage from './pages/CreateTournamentForTeamPage.js';
import EditTournamentForTeamPage from './pages/EditTournamentForTeamPage.js';
import DeleteTournamentForTeamPage from './pages/DeleteTournamentForTeamPage.js';

import TourneyGamesDetailByID from './pages/TourneyGamesDetailByID.js';
import NewGameForTourneyPage from './pages/NewGameForTourneyPage.js';
import EditGameForTourneyPage from './pages/EditGameForTourneyPage.js';
import DeleteGameForTourneyPage from './pages/DeleteGameForTourneyPage.js';

import PlayerParentsDetailByID from './pages/PlayerParentsDetailByID.js';
import NewParentForPlayerPage from './pages/NewParentForPlayerPage.js';
import EditParentForPlayerPage from './pages/EditParentForPlayerPage.js';
import DeleteParentForPlayerPage from './pages/DeleteParentForPlayerPage.js';





class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <div class="row">
        <div class="col-sm-12 all_pages">
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/companies" component={HomePage} />
            <Route exact path="/companies/new" component={CreateCompaniesPage} />
            <Route exact path="/companies/:ID/edit" component={EditCompanyPage} />
            <Route exact path="/companies/:ID/delete" component={DeleteCompanyPage} />


            <Route exact path="/company/:ID/detail" component={CompanyDetailPage} />
            <Route exact path="/company/:ID/team/new" component={NewTeamForCompanyPage} />
            <Route exact path="/company/team/:teamID/edit" component={EditTeamByIdPage} />
            <Route exact path="/company/team/:teamID/delete" component={DeleteTeamByID} />


            <Route exact path="/company/team/:teamID/detail" component={TeamDetailByID} />
            <Route exact path="/company/team/:teamID/coach/new" component={CreateNewCoachForTeamPage} />
            <Route exact path="/company/team/:coachID/coach/edit" component={EditCoachForTeamPage} />
            <Route exact path="/company/team/:coachID/coach/delete" component={DeleteCoachForTeamPage} />
            <Route exact path="/company/team/:coachID/coach/coach_detail" component={CoachDetailByIdPage} />


            <Route exact path="/company/team/:playerID/player/new" component={CreateNewPlayerForTeamPage} />
            <Route exact path="/company/team/:playerID/player/edit" component={EditPlayerForTeamPage} />
            <Route exact path="/company/team/:playerID/player/delete" component={DeletePlayerForTeamPage} />


            <Route exact path="/company/team/:teamID/scheduled_practice/new" component={CreateNewScheduledPracticeForTeamPage} />
            <Route exact path="/company/team/:practiceID/scheduled_practice/edit" component={EditScheduledPracticeForTeamPage} />
            <Route exact path="/company/team/:practiceID/scheduled_practice/delete" component={DeleteScheduledPracticeForTeamPage} />


            <Route exact path="/company/team/:teamID/tournament_schedule/new" component={CreateTournamentForTeamPage} />
            <Route exact path="/company/team/:tourneyID/tournament_schedule/edit" component={EditTournamentForTeamPage} />
            <Route exact path="/company/team/:tourneyID/tournament_schedule/delete" component={DeleteTournamentForTeamPage} />


            <Route exact path="/company/team/:gameID/game_detail" component={TourneyGamesDetailByID} />
            <Route exact path="/company/team/:gameID/game/new" component={NewGameForTourneyPage} />
            <Route exact path="/company/team/:gameID/game/edit" component={EditGameForTourneyPage} />
            <Route exact path="/company/team/:gameID/game/delete" component={DeleteGameForTourneyPage} />


            <Route exact path="/company/team/:parentID/parent_detail" component={PlayerParentsDetailByID} />
            <Route exact path="/company/team/:parentID/parent_detail/new" component={NewParentForPlayerPage} />
            <Route exact path="/company/team/:parentID/parent_detail/edit" component={EditParentForPlayerPage} />
            <Route exact path="/company/team/:parentID/parent_detail/delete" component={DeleteParentForPlayerPage} />
            
  
          </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


