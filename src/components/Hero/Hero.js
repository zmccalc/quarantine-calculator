import React, { Component } from 'react';
import './Hero.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '../Modal/Modal.js';

class Hero extends Component {


  state = {
    collegeName: "",
    size: 0,
    showModal: false,
    modalText: "",
    positiveCasesInState: 0,
    statePopulation: 0
  }

  handleNameChange = (name) => {
    this.setState({collegeName: name})
    this.props.handleNameChange(name)
  }

  handleSizeChange = (event) => {
    this.setState({size: parseInt(event.target.value, 10) + 1})
  }

  handleButtonClicked = () => {
    if (this.state.collegeName === "") {
      this.handleOpen("Please select a college name")
      return;
    } else if (this.state.size === 0 || !this.isInt(this.state.size)) {
      this.handleOpen("Please enter the size of your school")
      return
    } else {
      this.readInputs()
      this.props.handleCalculatePressed()
    }
  }

  readInputs = () => {
    const collegeData = [
      {
      "Institution": "Abilene Christian University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Academy of Art University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Adelphi University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Adrian College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Agnes Scott College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Alabama State University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Albany College of Pharmacy and Health Sciences",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Albion College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Alfred University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Allan Hancock College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Allegheny College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Alma College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "American University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Amherst College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Andrews University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Angelo State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Anne Arundel Community College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Antioch College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Appalachian Bible College",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Appalachian State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Aquinas College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Arcadia University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Arizona State University",
      "Control": "Public",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Arkansas State University",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Arkansas Tech University",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Asbury University",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ashland University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Assumption College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Auburn University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Auburn University at Montgomery",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Augsburg University",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Augusta University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Augustana College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Augustana University",
      "Control": "Private",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Austin College",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Austin Peay State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Averett University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Avila University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Azusa Pacific University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Babson College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bakersfield College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Ball State University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bard College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bard College at Simon's Rock",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Barnard College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Barry University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bates College",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bay Atlantic University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Bay Path University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Baylor University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Beacon College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Belhaven University",
      "Control": "Private",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bellevue College",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Belmont Abbey College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Belmont University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Beloit College",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Bemidji State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Benedictine College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bennington College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bentley University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Berkeley City College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Berkeley College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Berklee College of Music",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Bethany College",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bethany College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bethel College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bethel University",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Binghamton University",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Biola University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bloomfield College",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bloomsburg University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bluffton University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bob Jones University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Boise State University",
      "Control": "Public",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Boston College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Boston University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Bowdoin College",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Bowling Green State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bradley University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Brandeis University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Brevard College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Brigham Young University",
      "Control": "Private",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Brown University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bryant University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bryn Mawr College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bryn Mawr College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bucknell University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Buena Vista University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Buffalo State College",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Butler University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Butte College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "BYU - Hawaii",
      "Control": "Private",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Cabrini University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California Baptist University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "California Institute of Technology",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "California Institute of the Arts",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California Lutheran University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "California State University ‚Äî all system campuses",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Link"
      },
      {
      "Institution": "California State University ‚Äî Bakersfield",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Channel Islands",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Chico",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Dominguez Hills",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî East Bay",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Fresno State",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Fullerton",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Humboldt",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Long Beach",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Los Angeles",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Maritime Academy",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Monterey Bay",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Northridge",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Polytechnic at Pomona",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Polytechnic at San Luis Obispo",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California State University ‚Äî Sacramento",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Bernardino",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Diego State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California State University ‚Äî San Francisco State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Jos√© State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Marcos",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Sonoma State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Stanislaus",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California University of Pennsylvania",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Calvin University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cameron University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Campbell University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Ca√±ada College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Cape Cod Community College",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cape Fear Community College",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Capitol Technological University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Carleton College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Carlow University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Carnegie Mellon University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Carroll College",
      "Control": "Private",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Carroll University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Carthage College",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Case Western Reserve University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Castleton University",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Catholic University of America",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cazenovia College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cedarville University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Centenary University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Central Christian College of the Bible",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Central Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Central New Mexico Community College",
      "Control": "Public",
      "State": "NM",
      "State Population": "2090708",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Central State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Centre College",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Chaffey College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Chaminade University",
      "Control": "Private",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Champlain College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Chapman University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Charles R. Drew University of Medicine and Science",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Charleston Southern University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Chatham University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Chowan University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Christian Brothers University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Christopher Newport University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Citrus College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "City College of San Francisco",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Claremont Colleges",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Clarion University of Pennsylvania",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Clark Atlanta University",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Clark University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Clarke University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Clemson University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cleveland Institute of Art",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cleveland State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Coastal Carolina University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colby College",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colby-Sawyer College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colgate University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "College for Creative Studies",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Alameda",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "College of Idaho",
      "Control": "Private",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Marin",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of New Jersey",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "College of New Jersey",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of Our Lady of the Elms",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Saint Benedict",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of San Mateo",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "College of the Atlantic",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of the Desert",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "College of the Holy Cross",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of William & Mary ",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Wooster",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado Christian University",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Colorado College",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado Mesa University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado School of Mines",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado State University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia College Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Columbia International University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Community College of Allegheny County",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Community College of Philadelphia",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Concord University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Ann Arbor",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Irvine",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Nebraska",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University St. Paul",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Texas",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Wisconsin",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Connecticut College",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Converse College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cooper Union",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cornell College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cornell University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cornerstone University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cornish College of the Arts",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Cottey College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Covenant College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Crafton Hills College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Creighton University",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Culinary Institute of America",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cuyahoga Community College",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cypress College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Dabney S. Lancaster Community College",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Daemen College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dallas Baptist University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dallas County Community College District",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Dartmouth College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Davenport University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Davidson College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "De Anza College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Denison University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "DePaul University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "DePauw University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Diablo Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Dickinson College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "DigiPen Institute of Technology",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Doane University",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dominican University ",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dominican University of California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Donnelly College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dordt University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Drake University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Drew University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Drexel University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Drury University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Duke University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Duquesne University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Earlham College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "East Carolina University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "East Tennessee State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Eastern Connecticut State University",
      "Control": "Public",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Eastern Florida State College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Eastern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern Nazarene College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern Washington University",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Eckerd College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Edinboro University",
      "Control": "Public ",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Elmhurst College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Elmira College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Elon University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Embry-Riddle Aeronautical University",
      "Control": "Private",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Embry-Riddle Aeronautical University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emerson College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emmanuel College Boston",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Emory & Henry College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emory University",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emporia State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Evangel University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Evergreen State College",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Evergreen Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Fairfield University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fairleigh Dickinson University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Fairmont State University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Faith Baptist Bible College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ferris State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ferrum College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Finlandia University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fisher College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Florida Agricultural and Mechanical University",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Florida Institute of Technology",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Florida Southern College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Florida State University",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Foothill College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Fordham University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fort Hays State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Fort Lewis College",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Francis Marion University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Franciscan University of Steubenville",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Franklin and Marshall College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Franklin College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Franklin Pierce University",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fuller Theological Seminary",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Fullerton College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Furman University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gallaudet University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Gannon University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gardner-Webb University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gavilan College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Geneva College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "George Fox University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "George Mason University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "George Washington University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Georgetown University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Gettysburg College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Glendale Community College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Gogebic Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gonzaga University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Goshen College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Goucher College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Grace College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Graceland University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Graceland University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Grand Rapids Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Grand Valley State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Gratz College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Great Basin College",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Grinnell College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Grove City College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Guiliford College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gustavus Adolphus College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hamilton College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hampden-Sydney College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hampshire College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hampton University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Hanover College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Harding University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Harford Community College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Hartnell College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Harvard University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Harvey Mudd College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Hastings College",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Haverford College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hawaii Pacific University",
      "Control": "Private",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Heidelberg University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hendrix College",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "High Point University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Highline College",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hilbert College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hillsdale College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hinds Community College",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hiram College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hobart and WIlliam Smith Colleges",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hodges University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hofstra University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Hofstra University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hollins University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Holy Cross College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hood College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Hope College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hope International University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Howard University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hudson County Community College",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hult International Business School",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Huntingdon College",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Husson University",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Iliff School of Theology",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Illinois College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Illinois Institute of Technology",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Illinois State University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Immaculata University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Indiana State University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Indiana University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Indiana University of Pennsylvania",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Iona College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Iowa State University",
      "Control": "Public",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Ithaca College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ivy Tech Community College",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Jacksonville State University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Jacksonville University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "James Madison University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "John Brown University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "John Carroll University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Johns Hopkins University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Johnson and Wales University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Johnson University ‚Äî Florida",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Johnson University ‚Äî Tennessee",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Judson University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Juilliard School",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Juniata College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kalamazoo College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Kansas City Art Institute",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kansas State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kean University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kent State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Kenyon College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Keuka College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "King's College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Knox College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "La Roche University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "La Salle University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lafayette College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "LaGrange College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Laguna College of Art and Design",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lake Superior State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lake-Sumter State College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lakeland University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lander University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Laney College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Lansing Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lawrence Technological University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177"
      },
      {
      "Institution": " target=_blank\" rel=\"nofollow noopener noreferrer\">Planning for in-person</a>"
      },
      {
      "Institution": "Lawrence University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "LDS Business College",
      "Control": "Private",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lee University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lehigh University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "LeTourneau University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis and Clark College",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis-Clark State College",
      "Control": "Public",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Liberty University",
      "Control": "Private ",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Life Pacific University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Limestone College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lincoln University (Pa.)",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lindenwood University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Linfield College",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lipscomb",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lone Star College",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Longwood University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loras College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî all campuses",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Link"
      },
      {
      "Institution": "‚ÄãLos Angeles Community College District ‚Äî East Los Angeles College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî Los Angeles City College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Harbor College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "‚ÄãLos Angeles Community College District ‚Äî Los Angeles Mission College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî Los Angeles Pierce College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî Los Angeles ‚ÄãSouthwest College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Trade-Tech College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî West Los Angeles College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Louisana State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Louisiana College",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loyola Marymount University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loyola University Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Loyola University Maryland",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loyola University New Orleans",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lubbock Christian University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Luther College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lycoming College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lynn University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lyon College",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Macalester College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Madonna University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Manhattan Area Technical College",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Manhattan College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Manhattanville College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mansfield University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Maranatha Baptist University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marietta College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marist College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marquette University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marshall University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mary Baldwin University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marymount Manhattan College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marymount University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Maryville College",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Maryville University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts College of Pharmacy and Health Sciences",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts Institute of Technology",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts State Universities",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Link"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Bridgewater State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Fitchburg State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Framingham State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Massachusetts College of Art and Design",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Massachusetts College of Liberal Arts",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Massachusetts Maritime Academy",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Salem State University",
      "Control": "public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Westfield State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Worcester State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917"
      },
      {
      "Institution": "Master's University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "McDaniel College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "McMurry University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mendocino College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Menlo College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mercer University",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mercyhurst University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Meredith College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Merrimack College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Merritt College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Messiah College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Methodist University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Metropolitan Community College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Metropolitan Community College at Kansas City",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Metropolitan State University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Miami Dade College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Miami University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Michigan State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Michigan Technological University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mid-America Christian University",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mid-Atlantic Christian University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Middle Tennessee State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Middlebury College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Midlands University",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Midwestern State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Millersville University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Millikin University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Millsaps College",
      "Control": "Private",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Milwaukee School of Engineering",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Minneapolis College of Art & Design",
      "Control": "Private ",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Minnesota State University at Mankato",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Minnesota State University at Moorhead",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "MiraCosta College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Mission College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Mississippi College",
      "Control": "Private",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Gulf Coast Community College",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Mississippi Public Universities",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Link"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Alcorn State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Delta State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Jackson State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Mississippi State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Mississippi University for Women",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Mississippi Valley State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî University of Mississippi",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî University of Southern Mississippi",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri Southern State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri University of Science and Technology",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri Western State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Montana State University at Billings",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Montana State University at Bozeman",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Montana Technological University",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Montclair State University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Montgomery College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Moravian College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989"
      },
      {
      "Institution": " target=_blank\" rel=\"nofollow noopener noreferrer\">Planning for in-person</a>"
      },
      {
      "Institution": "Morehead State University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Morehouse College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Morgan State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Morningside College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mount Holyoke",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Mount St. Joseph University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Mount St. Mary's University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mount Union University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Murray State University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nazareth College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512"
      },
      {
      "Institution": "campus-college-experience-in-fall-2020\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Planning for in-person</a>"
      },
      {
      "Institution": "Nebraska State College System",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Link"
      },
      {
      "Institution": "Nebraska State College System ‚Äì Chadron State College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nebraska State College System ‚Äì Peru State College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nebraska State College System ‚Äì Wayne State College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nebraska Wesleyan University",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New College of Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "New England College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New England Conservatory",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New Jersey Institute of Technology",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New Mexico State University",
      "Control": "Public",
      "State": "NM",
      "State Population": "2090708",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "New River Community and Technical College",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "New School",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for online"
      },
      {
      "Institution": "New York Film Academy",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New York Institute of Technology",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "New York University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Newberry College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Niagara University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Carolina A&T State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Carolina Central University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Carolina State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Central College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "North Dakota University system ‚Äî all campuses",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Link"
      },
      {
      "Institution": "North Dakota University system ‚Äî Bismarck State College",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Dakota College at Bottineau",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Dickinson State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Lake Region State College",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Mayville State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Minot State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî North Dakota State College of Science",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî North Dakota State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî University of North Dakota",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Valley City State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Williston State College",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Park University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northampton Community College",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northeast Wisconsin Technical College",
      "Control": "Private ",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northeastern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northeastern State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northeastern University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northern Arizona University",
      "Control": "Public",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Northern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northern Kentucky University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northern Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northern Vermont University",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northern Virginia Community College",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Northwest Missouri State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northwest Nazarene University",
      "Control": "Private",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northwestern College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northwestern University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Norwich University",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Notre Dame of Maryland University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nova Southeastern University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oakland City University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oakland Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Oakland University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Oakwood Universlty",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oberlin College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Occidental College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Ohio Dominican University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ohio Northern University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Ohio State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ohio University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ohio Wesleyan University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oklahoma Panhandle State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oklahoma State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Old Dominion University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oral Roberts University",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oregon Institute of Technology",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oregon State University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Otterbein University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ouachita Baptist University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pace University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pacific Lutheran University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pacific Northwest College of Art",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pacific School of Religion",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Pacific University",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Palm Beach Atlantic University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Palomar College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Pennsylvania State University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pepperdine University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pittsburg State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pittsburgh Technical College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Plymouth State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Point Loma Nazarene University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Point Park University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pomona College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Portland Community College",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Portland State University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Post University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Prairie View A&M University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pratt Institute",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Presbyterian College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Prescott College",
      "Control": "Private",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Prince George's Community College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Princeton University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Providence Christian College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Purdue University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Purdue University Fort Wayne",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Queens University of Charlotte",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Quincy University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Quinnipiac University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Radford University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Randolph College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Randolph-Macon College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Reed College",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Reformed Theological Seminary",
      "Control": "Private",
      "State": "Multiple",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Regis College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Regis University",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rensselaer Polytechnic Institute",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Rhode Island School of Design",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rhodes College",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rice University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rider University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Roanoke College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Robert Morris University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Roberts Wesleyan College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rochester Institute of Technology",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rockhurst University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Roger Williams University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rollins College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Roosevelt University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rose-Hulman Institute of Technology",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rosemont College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Rowan University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rutgers University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Sacred Heart University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Sain Mary's University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Anselm College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Francis University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint John's University",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Saint Lawrence University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Saint Leo University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Saint Mary-of-the-Woods College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Mary's College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Mary's College of California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Saint Mary's University of Minnesota",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Norbert College",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Salem University",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Samford University",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "San Bernardino Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "San Diego Miramar College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "San Jacinto College",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "San Jose City College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Santa Clara University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Santa Monica College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Santa Rosa Junior College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Sarah Lawrence College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Savannah College of Art and Design",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "School of Visual Arts",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Schreiner University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Scripps College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Seattle Pacific University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Seattle University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Seton Hall University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Seton Hill University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Sewanee: The University of the South",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Shenandoah University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Shepherd University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Siena College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Siena Heights University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Sierra College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Simmons University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Simpson College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Simpson University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Skidmore College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Skyline College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Slippery Rock University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Slippery Rock University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Smith College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Soka University of America",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "South Dakota Board of Regents",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Link"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî Black Hills State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî Dakota State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî Northern State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî South Dakota School of Mines and Technology",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî South Dakota State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî University of South Dakota",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southeast Missouri State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southeastern Baptist Theological Seminary",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southeastern Oklahoma State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern Adventist University ",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Southern Methodist University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern Nazarene University",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern New Hampshire University",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Southern Wesleyan University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwest Baptist University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwest Minnesota State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern Assemblies of God University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern Baptist Theological Seminary",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern Oklahoma State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Spelman College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Spring Arbor University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Springfield College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Bonaventure University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Cloud State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Francis College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. John Fisher College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. John's University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Lawrence University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Louis University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Mary's College of Maryland",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Mary‚Äôs College of California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Michael's College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Olaf College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "St. Thomas University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Vincent College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stanford University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Stark State College",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "State University of New York at Cortland",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stephen F. Austin State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Sterling College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stetson University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stevens Institute of Technology",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Stockton University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Stonehill College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Stony Brook University",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Suffolk University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Susquehanna University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Swarthmore College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Sweet Briar College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Syracuse University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Taylor University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Temple University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Tennessee State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tennessee Technological University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî all campuses",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Link"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Central Texas",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Commerce",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Corpus Christi",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî International University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Kingsville",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Prairie View A&M University ",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî San Antonio",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Tarleton State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Texarkana",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Texas A&M University ",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî West Texas A & M University ",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Christian University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Link"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar Institute of Technology",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar State College Orange",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar State College Port Arthur",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Sam Houston State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Sul Ross State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Texas State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Tech University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Wesleyan University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Woman's University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "The Baptist College of Florida",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Thiel College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Thomas Jefferson University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tidewater Community College",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Tompkins Cortland Community College",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Transylvania University",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trevecca Nazarene University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trine University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trinity College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Trinity College",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Trinity University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trinity Washington University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Troy University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tufts University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Tulane University",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tulsa Community College",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Union College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Union University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University at Buffalo",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Akron",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alabama ‚Äî all system campuses",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Link"
      },
      {
      "Institution": "University of Alabama at Birmingham",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alabama at Huntsville",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alabama at Tuscaloosa",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alaska at Anchorage",
      "Control": "Public",
      "State": "AK",
      "State Population": "738068",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of Alaska at Fairbanks",
      "Control": "Public",
      "State": "AK",
      "State Population": "738068",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Arizona",
      "Control": "Public",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Arkansas ‚Äî all system campuses",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Link"
      },
      {
      "Institution": "University of Arkansas at Fayetteville",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Arkansas at Fort Smith",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Arkansas at Little Rock",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Bridgeport",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of California at Berkeley",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at Davis",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at Irvine",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of California at Los Angeles",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of California at Riverside",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at San Diego",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at Santa Barbara",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of California at Santa Cruz",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Central Arkansas",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Central Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Central Missouri",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Central Oklahoma",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Charleston",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Cincinnati",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "University of Colorado at Boulder",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Colorado at Denver",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Connecticut",
      "Control": "Public",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Dallas",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Dayton",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Delaware",
      "Control": "Public",
      "State": "DE",
      "State Population": "971180",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Denver",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Detroit Mercy",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Evansville",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Findlay",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Hartford",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Hawaii",
      "Control": "Public",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Hawaii at Manoa",
      "Control": "Public",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Houston",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of Idaho",
      "Control": "Public",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Illinois at Chicago",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Illinois at Springfield",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Illinois at Urbana-Champaign",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Indianapolis",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Iowa",
      "Control": "Public",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Kansas",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Kentucky",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of La Verne",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Link"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Grambling State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Louisiana Tech University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî McNeese State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Nicholls State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Northwestern State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Southeastern Louisiana University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî University of Louisiana at Lafayette",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî University of Louisiana at Monroe",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî University of New Orleans",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisville",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Lynchburg",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Maine ‚Äî all system campuses",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Link"
      },
      {
      "Institution": "University of Maine ‚Äî Augusta",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Farmington",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Fort Kent",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Machias",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Presque Isle",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî University of Southern Maine",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Mary",
      "Control": "Private",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Mary Hardin-Baylor",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Mary Washington",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Massachusetts at Amherst",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Massachusetts at Boston",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of Massachusetts at Dartmouth",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "University of Massachusetts at Lowell",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Memphis",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Miami",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Michigan at Ann Arbor",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Michigan at Dearborn",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Michigan at Flint",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Minnesota",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Missouri",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Missouri at Kansas City",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Missouri at Kansas City",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Mobile",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Montana",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Montevallo",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nebraska ‚Äî all system campuses",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Link"
      },
      {
      "Institution": "University of Nebraska ‚Äî Kearney",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nebraska ‚Äî Lincoln",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nebraska ‚Äî Omaha",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nevada, Las Vegas",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Nevada, Reno",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of New England",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of New Hampshire",
      "Control": "Public",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of New Haven",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of New Mexico",
      "Control": "Public",
      "State": "NM",
      "State Population": "2090708",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of North Carolina at Asheville",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina at Chapel Hill",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina at Charlotte",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina at Greensboro",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of North Carolina at Pembroke",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina School of the Arts",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Texas",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Northern Colorado",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Northern Iowa",
      "Control": "Public",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Northwestern ‚Äì St. Paul",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Noth Alabama",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Notre Dame",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Oklahoma",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Oregon",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Pennsylvania",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Pittsburgh",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Portland",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Puget Sound",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Redlands",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Rhode Island",
      "Control": "Public",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Richmond",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Rochester",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of Saint Francis",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of San Diego",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of San Francisco",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Scranton",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of South Alabama",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of South Carolina",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of South Florida\t",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Southern California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of Southern Indiana",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of St. Thomas (Minnesota)",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Tampa",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Tennessee system",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Link"
      },
      {
      "Institution": "University of Tennessee system ‚Äî Chattanooga",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Tennessee system ‚Äî Knoxville",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Tennessee system ‚Äî Martin",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Texas ‚Äî all system campuses",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Link"
      },
      {
      "Institution": "University of Texas ‚Äî Permian Basin",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas ‚Äî Rio Grande Valley",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Arlington",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Austin",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Dallas",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at El Paso",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at San Antonio",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Tyler",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of the Cumberlands",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of the District of Columbia",
      "Control": "Public",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of the Pacific",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of the Sciences",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Toledo",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Tulsa",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Vermont",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Virginia",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Washington",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of West Alabama",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of West Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Eau Claire",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Wisconsin at Green Bay",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Madison",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Milwaukee",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at River Falls",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Whitewater",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Wisconsin-Stout",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Wyoming",
      "Control": "Public",
      "State": "WY",
      "State Population": "573720",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Link"
      },
      {
      "Institution": "University System of Georgia ‚Äî Abraham Baldwin Agricultural College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Albany State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Atlanta Metropolitan State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Augusta University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Clayton State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî College of Coastal Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Columbus State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Dalton State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî East Georgia State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Fort Valley State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Gwinnett College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Highlands College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Institute of Technology",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Southern University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Southwestern State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Georgia ‚Äî Gordon State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Kennesaw State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Middle Georgia State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Savannah State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî South Georgia State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî University of Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî University of North Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî University of West Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Valdosta State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Maryland",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Link"
      },
      {
      "Institution": "University System of Maryland ‚Äî Bowie State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Coppin State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Frostburg State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Salisbury University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Towson University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Baltimore",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Maryland at College Park",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Maryland, Baltimore County",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Maryland, Eastern Shore",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Upper Iowa University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ursinus College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî all campuses",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Link"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî¬†Dixie State University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî¬†Salt Lake Community College",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Snow College",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Southern Utah University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî University of Utah",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Utah State University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Utah Valley University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Weber State University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345"
      },
      {
      "Institution": "Valencia College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Valparaiso University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Vanderbilt University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Vanguard University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Vassar College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Vermont Technical College",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Villanova University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Vincennes University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Virginia Commonwealth University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Virginia Tech",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Virginia Wesleyan University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wabash College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wake Forest University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Walsh University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Warren Wilson College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washburn University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington & Jefferson College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington and Jefferson College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Washington College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington State University",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington University in St. Louis",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washtenaw Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wayland Baptist University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wayne State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Waynesburg University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Weatherford College",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Webster University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wellesley College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wells College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Wentworth Institute of Technology",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Wesley College",
      "Control": "Private",
      "State": "DE",
      "State Population": "971180",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Wesleyan University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Chester University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "West Liberty University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "West Virginia State University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Virginia University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Virginia Wesleyan College",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Colorado University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Connecticut State University",
      "Control": "Public",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Kentucky University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Nevada College",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Western New England University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Oregon University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Washington University",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Westminster College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Westminster College (Penn.)",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Westminster College (Utah)",
      "Control": "Private",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Westminster Theological Seminary (Philadelphia)",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Westmont College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wheaton College (Ill.)",
      "Control": "Private ",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wheaton College (Mass.)",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Whitworth University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wichita State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Widener University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Wilkes University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Willamette University",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "William Jessup University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "William Jewell College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "William Woods University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Williams Baptist University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Williams College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wilmington University",
      "Control": "Private",
      "State": "DE",
      "State Population": "971180",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Winona State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Winston-Salem State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Winthrop University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wittenberg University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wofford College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Woodbury University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Worcester Polytechnic Institute",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Worcester State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wright State Unviersity",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Xavier University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Xavier University of Louisiana",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Yale University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Yeshiva University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "York College",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "York College of Pennsylvania",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Youngstown State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Zaytuna College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      }
      ]
    for (var i = 0; i < collegeData.length; i++) {
      if (collegeData[i].Institution === this.state.collegeName) {
        this.setResult(collegeData[i].State)
      }
    }
  }

  setResult = (state) => {
    fetch(`https://covidtracking.com/api/v1/states/${state.toLowerCase()}/current.json`)
      .then(res => res.json())
      .then(
        (result) => {
          const positiveCasesInState = result.positive
          const chance = this.calculateChance(positiveCasesInState)
          this.props.handleResultChange(chance)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  calculateChance = (positiveCases) => {
    const collegeData = [
      {
      "Institution": "Abilene Christian University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Academy of Art University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Adelphi University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Adrian College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Agnes Scott College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Alabama State University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Albany College of Pharmacy and Health Sciences",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Albion College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Alfred University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Allan Hancock College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Allegheny College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Alma College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "American University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Amherst College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Andrews University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Angelo State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Anne Arundel Community College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Antioch College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Appalachian Bible College",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Appalachian State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Aquinas College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Arcadia University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Arizona State University",
      "Control": "Public",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Arkansas State University",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Arkansas Tech University",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Asbury University",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ashland University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Assumption College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Auburn University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Auburn University at Montgomery",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Augsburg University",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Augusta University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Augustana College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Augustana University",
      "Control": "Private",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Austin College",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Austin Peay State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Averett University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Avila University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Azusa Pacific University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Babson College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bakersfield College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Ball State University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bard College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bard College at Simon's Rock",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Barnard College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Barry University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bates College",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bay Atlantic University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Bay Path University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Baylor University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Beacon College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Belhaven University",
      "Control": "Private",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bellevue College",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Belmont Abbey College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Belmont University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Beloit College",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Bemidji State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Benedictine College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bennington College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bentley University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Berkeley City College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Berkeley College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Berklee College of Music",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Bethany College",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bethany College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bethel College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bethel University",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Binghamton University",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Biola University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bloomfield College",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bloomsburg University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bluffton University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bob Jones University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Boise State University",
      "Control": "Public",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Boston College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Boston University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Bowdoin College",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Bowling Green State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bradley University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Brandeis University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Brevard College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Brigham Young University",
      "Control": "Private",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Brown University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Bryant University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bryn Mawr College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bryn Mawr College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Bucknell University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Buena Vista University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Buffalo State College",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Butler University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Butte College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "BYU - Hawaii",
      "Control": "Private",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Cabrini University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California Baptist University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "California Institute of Technology",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "California Institute of the Arts",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California Lutheran University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "California State University ‚Äî all system campuses",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Link"
      },
      {
      "Institution": "California State University ‚Äî Bakersfield",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Channel Islands",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Chico",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Dominguez Hills",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî East Bay",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Fresno State",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Fullerton",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Humboldt",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Long Beach",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Los Angeles",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Maritime Academy",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Monterey Bay",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Northridge",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Polytechnic at Pomona",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Polytechnic at San Luis Obispo",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California State University ‚Äî Sacramento",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Bernardino",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Diego State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "California State University ‚Äî San Francisco State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Jos√© State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî San Marcos",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Sonoma State University",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California State University ‚Äî Stanislaus",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "California University of Pennsylvania",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Calvin University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cameron University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Campbell University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Ca√±ada College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Cape Cod Community College",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cape Fear Community College",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Capitol Technological University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Carleton College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Carlow University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Carnegie Mellon University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Carroll College",
      "Control": "Private",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Carroll University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Carthage College",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Case Western Reserve University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Castleton University",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Catholic University of America",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cazenovia College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cedarville University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Centenary University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Central Christian College of the Bible",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Central Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Central New Mexico Community College",
      "Control": "Public",
      "State": "NM",
      "State Population": "2090708",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Central State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Centre College",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Chaffey College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Chaminade University",
      "Control": "Private",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Champlain College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Chapman University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Charles R. Drew University of Medicine and Science",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Charleston Southern University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Chatham University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Chowan University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Christian Brothers University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Christopher Newport University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Citrus College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "City College of San Francisco",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Claremont Colleges",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Clarion University of Pennsylvania",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Clark Atlanta University",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Clark University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Clarke University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Clemson University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cleveland Institute of Art",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cleveland State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Coastal Carolina University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colby College",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colby-Sawyer College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colgate University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "College for Creative Studies",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Alameda",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "College of Idaho",
      "Control": "Private",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Marin",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of New Jersey",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "College of New Jersey",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of Our Lady of the Elms",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Saint Benedict",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of San Mateo",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "College of the Atlantic",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of the Desert",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "College of the Holy Cross",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "College of William & Mary ",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "College of Wooster",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado Christian University",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Colorado College",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado Mesa University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado School of Mines",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Colorado State University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia College Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Columbia International University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Columbia University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Community College of Allegheny County",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Community College of Philadelphia",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Concord University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Ann Arbor",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Irvine",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Nebraska",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University St. Paul",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Texas",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Concordia University Wisconsin",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Connecticut College",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Converse College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cooper Union",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cornell College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cornell University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cornerstone University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cornish College of the Arts",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Cottey College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Covenant College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Crafton Hills College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Creighton University",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Culinary Institute of America",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Cuyahoga Community College",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Cypress College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Dabney S. Lancaster Community College",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Daemen College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dallas Baptist University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dallas County Community College District",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Dartmouth College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Davenport University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Davidson College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "De Anza College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Denison University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "DePaul University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "DePauw University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Diablo Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Dickinson College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "DigiPen Institute of Technology",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Doane University",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dominican University ",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dominican University of California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Donnelly College",
      "Control": "Private",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Dordt University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Drake University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Drew University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Drexel University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Drury University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Duke University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Duquesne University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Earlham College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "East Carolina University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "East Tennessee State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Eastern Connecticut State University",
      "Control": "Public",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Eastern Florida State College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Eastern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern Nazarene College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Eastern Washington University",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Eckerd College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Edinboro University",
      "Control": "Public ",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Elmhurst College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Elmira College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Elon University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Embry-Riddle Aeronautical University",
      "Control": "Private",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Embry-Riddle Aeronautical University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emerson College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emmanuel College Boston",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Emory & Henry College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emory University",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Emporia State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Evangel University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Evergreen State College",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Evergreen Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Fairfield University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fairleigh Dickinson University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Fairmont State University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Faith Baptist Bible College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ferris State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ferrum College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Finlandia University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fisher College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Florida Agricultural and Mechanical University",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Florida Institute of Technology",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Florida Southern College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Florida State University",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Foothill College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Fordham University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fort Hays State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Fort Lewis College",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Francis Marion University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Franciscan University of Steubenville",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Franklin and Marshall College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Franklin College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Franklin Pierce University",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Fuller Theological Seminary",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Fullerton College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Furman University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gallaudet University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Gannon University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gardner-Webb University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gavilan College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Geneva College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "George Fox University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "George Mason University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "George Washington University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Georgetown University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Gettysburg College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Glendale Community College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Gogebic Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gonzaga University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Goshen College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Goucher College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Grace College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Graceland University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Graceland University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Grand Rapids Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Grand Valley State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Gratz College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Great Basin College",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Grinnell College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Grove City College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Guiliford College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Gustavus Adolphus College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hamilton College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hampden-Sydney College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hampshire College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hampton University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Hanover College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Harding University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Harford Community College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Hartnell College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Harvard University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Harvey Mudd College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Hastings College",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Haverford College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hawaii Pacific University",
      "Control": "Private",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Heidelberg University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hendrix College",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "High Point University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Highline College",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hilbert College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hillsdale College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hinds Community College",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hiram College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hobart and WIlliam Smith Colleges",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hodges University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hofstra University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Hofstra University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hollins University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Holy Cross College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hood College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Hope College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Hope International University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Howard University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hudson County Community College",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Hult International Business School",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Huntingdon College",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Husson University",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Iliff School of Theology",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Illinois College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Illinois Institute of Technology",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Illinois State University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Immaculata University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Indiana State University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Indiana University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Indiana University of Pennsylvania",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Iona College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Iowa State University",
      "Control": "Public",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Ithaca College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ivy Tech Community College",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Jacksonville State University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Jacksonville University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "James Madison University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "John Brown University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "John Carroll University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Johns Hopkins University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Johnson and Wales University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Johnson University ‚Äî Florida",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Johnson University ‚Äî Tennessee",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Judson University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Juilliard School",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Juniata College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kalamazoo College",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Kansas City Art Institute",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kansas State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kean University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Kent State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Kenyon College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Keuka College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "King's College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Knox College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "La Roche University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "La Salle University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lafayette College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "LaGrange College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Laguna College of Art and Design",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lake Superior State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lake-Sumter State College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lakeland University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lander University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Laney College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Lansing Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lawrence Technological University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177"
      },
      {
      "Institution": " target=_blank\" rel=\"nofollow noopener noreferrer\">Planning for in-person</a>"
      },
      {
      "Institution": "Lawrence University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "LDS Business College",
      "Control": "Private",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lee University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lehigh University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "LeTourneau University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis and Clark College",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lewis-Clark State College",
      "Control": "Public",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Liberty University",
      "Control": "Private ",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Life Pacific University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Limestone College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lincoln University (Pa.)",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lindenwood University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Linfield College",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lipscomb",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lone Star College",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Longwood University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loras College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî all campuses",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Link"
      },
      {
      "Institution": "‚ÄãLos Angeles Community College District ‚Äî East Los Angeles College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî Los Angeles City College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Harbor College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "‚ÄãLos Angeles Community College District ‚Äî Los Angeles Mission College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî Los Angeles Pierce College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî Los Angeles ‚ÄãSouthwest College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Trade-Tech College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Los Angeles Community College District ‚Äî West Los Angeles College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Louisana State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Louisiana College",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loyola Marymount University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loyola University Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Loyola University Maryland",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Loyola University New Orleans",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Lubbock Christian University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Luther College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lycoming College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lynn University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Lyon College",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Macalester College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Madonna University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Manhattan Area Technical College",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Manhattan College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Manhattanville College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mansfield University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Maranatha Baptist University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marietta College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marist College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marquette University",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marshall University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mary Baldwin University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marymount Manhattan College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Marymount University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Maryville College",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Maryville University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts College of Pharmacy and Health Sciences",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts Institute of Technology",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts State Universities",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Link"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Bridgewater State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Fitchburg State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Framingham State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Massachusetts College of Art and Design",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Massachusetts College of Liberal Arts",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Massachusetts Maritime Academy",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Salem State University",
      "Control": "public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Westfield State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Massachusetts State Universities ‚Äî Worcester State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917"
      },
      {
      "Institution": "Master's University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "McDaniel College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "McMurry University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mendocino College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Menlo College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mercer University",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mercyhurst University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Meredith College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Merrimack College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Merritt College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Messiah College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Methodist University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Metropolitan Community College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Metropolitan Community College at Kansas City",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Metropolitan State University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Miami Dade College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Miami University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Michigan State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Michigan Technological University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mid-America Christian University",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mid-Atlantic Christian University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Middle Tennessee State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Middlebury College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Midlands University",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Midwestern State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Millersville University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Millikin University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Millsaps College",
      "Control": "Private",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Milwaukee School of Engineering",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Minneapolis College of Art & Design",
      "Control": "Private ",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Minnesota State University at Mankato",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Minnesota State University at Moorhead",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "MiraCosta College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Mission College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Mississippi College",
      "Control": "Private",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Gulf Coast Community College",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Mississippi Public Universities",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Link"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Alcorn State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Delta State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Jackson State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Mississippi State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Mississippi University for Women",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî Mississippi Valley State University",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî University of Mississippi",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mississippi Public Universities ‚Äî University of Southern Mississippi",
      "Control": "Public",
      "State": "MS",
      "State Population": "2982785",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri Southern State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri University of Science and Technology",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Missouri Western State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Montana State University at Billings",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Montana State University at Bozeman",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Montana Technological University",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Montclair State University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Montgomery College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Moravian College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989"
      },
      {
      "Institution": " target=_blank\" rel=\"nofollow noopener noreferrer\">Planning for in-person</a>"
      },
      {
      "Institution": "Morehead State University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Morehouse College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Morgan State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Morningside College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mount Holyoke",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Mount St. Joseph University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Mount St. Mary's University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Mount Union University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Murray State University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nazareth College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512"
      },
      {
      "Institution": "campus-college-experience-in-fall-2020\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Planning for in-person</a>"
      },
      {
      "Institution": "Nebraska State College System",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Link"
      },
      {
      "Institution": "Nebraska State College System ‚Äì Chadron State College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nebraska State College System ‚Äì Peru State College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nebraska State College System ‚Äì Wayne State College",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nebraska Wesleyan University",
      "Control": "Private",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New College of Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "New England College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New England Conservatory",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New Jersey Institute of Technology",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New Mexico State University",
      "Control": "Public",
      "State": "NM",
      "State Population": "2090708",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "New River Community and Technical College",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "New School",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for online"
      },
      {
      "Institution": "New York Film Academy",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "New York Institute of Technology",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "New York University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Newberry College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Niagara University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Carolina A&T State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Carolina Central University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Carolina State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Central College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "North Dakota University system ‚Äî all campuses",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Link"
      },
      {
      "Institution": "North Dakota University system ‚Äî Bismarck State College",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Dakota College at Bottineau",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Dickinson State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Lake Region State College",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Mayville State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Minot State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî North Dakota State College of Science",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî North Dakota State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî University of North Dakota",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Valley City State University",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Dakota University system ‚Äî Williston State College",
      "Control": "Public",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "North Park University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northampton Community College",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northeast Wisconsin Technical College",
      "Control": "Private ",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northeastern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northeastern State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northeastern University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northern Arizona University",
      "Control": "Public",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Northern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northern Kentucky University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Northern Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northern Vermont University",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northern Virginia Community College",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Northwest Missouri State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northwest Nazarene University",
      "Control": "Private",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northwestern College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Northwestern University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Norwich University",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Notre Dame of Maryland University",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Nova Southeastern University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oakland City University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oakland Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Oakland University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Oakwood Universlty",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oberlin College",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Occidental College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Ohio Dominican University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ohio Northern University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Ohio State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ohio University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ohio Wesleyan University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oklahoma Panhandle State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oklahoma State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Old Dominion University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oral Roberts University",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oregon Institute of Technology",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Oregon State University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Otterbein University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ouachita Baptist University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pace University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pacific Lutheran University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pacific Northwest College of Art",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pacific School of Religion",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Pacific University",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Palm Beach Atlantic University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Palomar College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Pennsylvania State University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pepperdine University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pittsburg State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pittsburgh Technical College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Plymouth State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Point Loma Nazarene University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Point Park University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pomona College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Portland Community College",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Portland State University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Post University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Prairie View A&M University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Pratt Institute",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Presbyterian College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Prescott College",
      "Control": "Private",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Prince George's Community College",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Princeton University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Providence Christian College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Purdue University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Purdue University Fort Wayne",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Queens University of Charlotte",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Quincy University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Quinnipiac University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Radford University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Randolph College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Randolph-Macon College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Reed College",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Reformed Theological Seminary",
      "Control": "Private",
      "State": "Multiple",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Regis College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Regis University",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rensselaer Polytechnic Institute",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Rhode Island School of Design",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rhodes College",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rice University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rider University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Roanoke College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Robert Morris University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Roberts Wesleyan College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rochester Institute of Technology",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rockhurst University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Roger Williams University",
      "Control": "Private",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rollins College",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Roosevelt University",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rose-Hulman Institute of Technology",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Rosemont College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Rowan University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Rutgers University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Sacred Heart University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Sain Mary's University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Anselm College",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Francis University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint John's University",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Saint Lawrence University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Saint Leo University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Saint Mary-of-the-Woods College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Mary's College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Mary's College of California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Saint Mary's University of Minnesota",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Saint Norbert College",
      "Control": "Private",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Salem University",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Samford University",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "San Bernardino Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "San Diego Miramar College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "San Jacinto College",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "San Jose City College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Santa Clara University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Santa Monica College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Santa Rosa Junior College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Sarah Lawrence College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Savannah College of Art and Design",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "School of Visual Arts",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Schreiner University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Scripps College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Seattle Pacific University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Seattle University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Seton Hall University",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Seton Hill University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Sewanee: The University of the South",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Shenandoah University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Shepherd University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Siena College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Siena Heights University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Sierra College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Simmons University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Simpson College",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Simpson University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Skidmore College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Skyline College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Slippery Rock University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Slippery Rock University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Smith College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Soka University of America",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "South Dakota Board of Regents",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Link"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî Black Hills State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî Dakota State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî Northern State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî South Dakota School of Mines and Technology",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî South Dakota State University",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "South Dakota Board of Regents ‚Äî University of South Dakota",
      "Control": "Public",
      "State": "SD",
      "State Population": "877790",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southeast Missouri State University",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southeastern Baptist Theological Seminary",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southeastern Oklahoma State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern Adventist University ",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Southern Methodist University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern Nazarene University",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southern New Hampshire University",
      "Control": "Private",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Southern Wesleyan University",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwest Baptist University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwest Minnesota State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern Assemblies of God University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern Baptist Theological Seminary",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern Oklahoma State University",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Southwestern University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Spelman College",
      "Control": "Private",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Spring Arbor University",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Springfield College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Bonaventure University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Cloud State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Francis College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. John Fisher College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. John's University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Lawrence University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Louis University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Mary's College of Maryland",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "St. Mary‚Äôs College of California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Michael's College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Olaf College",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "St. Thomas University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "St. Vincent College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stanford University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Stark State College",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "State University of New York at Cortland",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stephen F. Austin State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Sterling College",
      "Control": "Private",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stetson University",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Stevens Institute of Technology",
      "Control": "Private",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Stockton University",
      "Control": "Public",
      "State": "NJ",
      "State Population": "9032872",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Stonehill College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Stony Brook University",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Suffolk University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Susquehanna University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Swarthmore College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Sweet Briar College",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Syracuse University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Taylor University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Temple University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Tennessee State University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tennessee Technological University",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî all campuses",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Link"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Central Texas",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Commerce",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Corpus Christi",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî International University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Kingsville",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Prairie View A&M University ",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî San Antonio",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Tarleton State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Texarkana",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî Texas A&M University ",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas A&M University system ‚Äî West Texas A & M University ",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Christian University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Link"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar Institute of Technology",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar State College Orange",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar State College Port Arthur",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Lamar University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Sam Houston State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Sul Ross State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas State University system ‚Äî Texas State University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Tech University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Wesleyan University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Texas Woman's University",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "The Baptist College of Florida",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Thiel College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Thomas Jefferson University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tidewater Community College",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Tompkins Cortland Community College",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Transylvania University",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trevecca Nazarene University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trine University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trinity College",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Trinity College",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Trinity University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Trinity Washington University",
      "Control": "Private",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Troy University",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tufts University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Tulane University",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Tulsa Community College",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Union College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Union University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University at Buffalo",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Akron",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alabama ‚Äî all system campuses",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Link"
      },
      {
      "Institution": "University of Alabama at Birmingham",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alabama at Huntsville",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alabama at Tuscaloosa",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Alaska at Anchorage",
      "Control": "Public",
      "State": "AK",
      "State Population": "738068",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of Alaska at Fairbanks",
      "Control": "Public",
      "State": "AK",
      "State Population": "738068",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Arizona",
      "Control": "Public",
      "State": "AZ",
      "State Population": "7123898",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Arkansas ‚Äî all system campuses",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Link"
      },
      {
      "Institution": "University of Arkansas at Fayetteville",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Arkansas at Fort Smith",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Arkansas at Little Rock",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Bridgeport",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of California at Berkeley",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at Davis",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at Irvine",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of California at Los Angeles",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of California at Riverside",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at San Diego",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of California at Santa Barbara",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of California at Santa Cruz",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Central Arkansas",
      "Control": "Public",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Central Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Central Missouri",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Central Oklahoma",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Charleston",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Chicago",
      "Control": "Private",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Cincinnati",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "University of Colorado at Boulder",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Colorado at Denver",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Connecticut",
      "Control": "Public",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Dallas",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Dayton",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Delaware",
      "Control": "Public",
      "State": "DE",
      "State Population": "971180",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Denver",
      "Control": "Private",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Detroit Mercy",
      "Control": "Private",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Evansville",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Findlay",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Hartford",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Hawaii",
      "Control": "Public",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Hawaii at Manoa",
      "Control": "Public",
      "State": "HI",
      "State Population": "1426393",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Houston",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of Idaho",
      "Control": "Public",
      "State": "ID",
      "State Population": "1753860",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Illinois at Chicago",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Illinois at Springfield",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Illinois at Urbana-Champaign",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Indianapolis",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Iowa",
      "Control": "Public",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Kansas",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Kentucky",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of La Verne",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Link"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Grambling State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Louisiana Tech University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî McNeese State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Nicholls State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Northwestern State University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî Southeastern Louisiana University",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî University of Louisiana at Lafayette",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî University of Louisiana at Monroe",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisiana system ‚Äî University of New Orleans",
      "Control": "Public",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Louisville",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Lynchburg",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Maine ‚Äî all system campuses",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Link"
      },
      {
      "Institution": "University of Maine ‚Äî Augusta",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Farmington",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Fort Kent",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Machias",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî Presque Isle",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Maine ‚Äî University of Southern Maine",
      "Control": "Public",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Mary",
      "Control": "Private",
      "State": "ND",
      "State Population": "755238",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Mary Hardin-Baylor",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Mary Washington",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Massachusetts at Amherst",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Massachusetts at Boston",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of Massachusetts at Dartmouth",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "University of Massachusetts at Lowell",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Memphis",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Miami",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Michigan at Ann Arbor",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Michigan at Dearborn",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Michigan at Flint",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Minnesota",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Missouri",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Missouri at Kansas City",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Missouri at Kansas City",
      "Control": "Public",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Mobile",
      "Control": "Private",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Montana",
      "Control": "Public",
      "State": "MT",
      "State Population": "1062330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Montevallo",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nebraska ‚Äî all system campuses",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Link"
      },
      {
      "Institution": "University of Nebraska ‚Äî Kearney",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nebraska ‚Äî Lincoln",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nebraska ‚Äî Omaha",
      "Control": "Public",
      "State": "NE",
      "State Population": "1932549",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Nevada, Las Vegas",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Nevada, Reno",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of New England",
      "Control": "Private",
      "State": "ME",
      "State Population": "1341582",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of New Hampshire",
      "Control": "Public",
      "State": "NH",
      "State Population": "1350575",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of New Haven",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of New Mexico",
      "Control": "Public",
      "State": "NM",
      "State Population": "2090708",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of North Carolina at Asheville",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina at Chapel Hill",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina at Charlotte",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina at Greensboro",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of North Carolina at Pembroke",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Carolina School of the Arts",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of North Texas",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Northern Colorado",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Northern Iowa",
      "Control": "Public",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Northwestern ‚Äì St. Paul",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Noth Alabama",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Notre Dame",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Oklahoma",
      "Control": "Public",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Oregon",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Pennsylvania",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Pittsburgh",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Portland",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Puget Sound",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Redlands",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Rhode Island",
      "Control": "Public",
      "State": "RI",
      "State Population": "1061712",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Richmond",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Rochester",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "University of Saint Francis",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of San Diego",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of San Francisco",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Scranton",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of South Alabama",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of South Carolina",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of South Florida\t",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Southern California",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "University of Southern Indiana",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of St. Thomas (Minnesota)",
      "Control": "Private",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Tampa",
      "Control": "Private",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Tennessee system",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Link"
      },
      {
      "Institution": "University of Tennessee system ‚Äî Chattanooga",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Tennessee system ‚Äî Knoxville",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Tennessee system ‚Äî Martin",
      "Control": "Public",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Texas ‚Äî all system campuses",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Link"
      },
      {
      "Institution": "University of Texas ‚Äî Permian Basin",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas ‚Äî Rio Grande Valley",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Arlington",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Austin",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Dallas",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at El Paso",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at San Antonio",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Texas at Tyler",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of the Cumberlands",
      "Control": "Private",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of the District of Columbia",
      "Control": "Public",
      "State": "DC",
      "State Population": "703608",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of the Pacific",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of the Sciences",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Toledo",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Tulsa",
      "Control": "Private",
      "State": "OK",
      "State Population": "3940521",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Vermont",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Virginia",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Washington",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of West Alabama",
      "Control": "Public",
      "State": "AL",
      "State Population": "4888949",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of West Florida",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Eau Claire",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Wisconsin at Green Bay",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Madison",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Milwaukee",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at River Falls",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University of Wisconsin at Whitewater",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Wisconsin-Stout",
      "Control": "Public",
      "State": "WI",
      "State Population": "5818049",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University of Wyoming",
      "Control": "Public",
      "State": "WY",
      "State Population": "573720",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Link"
      },
      {
      "Institution": "University System of Georgia ‚Äî Abraham Baldwin Agricultural College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Albany State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Atlanta Metropolitan State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Augusta University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Clayton State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî College of Coastal Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Columbus State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Dalton State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî East Georgia State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Fort Valley State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Gwinnett College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Highlands College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Institute of Technology",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Southern University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia Southwestern State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Georgia State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Georgia ‚Äî Gordon State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Kennesaw State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Middle Georgia State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Savannah State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî South Georgia State College",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî University of Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî University of North Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî University of West Georgia",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Georgia ‚Äî Valdosta State University",
      "Control": "Public",
      "State": "GA",
      "State Population": "10545138",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "University System of Maryland",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Link"
      },
      {
      "Institution": "University System of Maryland ‚Äî Bowie State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Coppin State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Frostburg State University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Salisbury University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî Towson University",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Baltimore",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Maryland at College Park",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Maryland, Baltimore County",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "University System of Maryland ‚Äî University of Maryland, Eastern Shore",
      "Control": "Public",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Upper Iowa University",
      "Control": "Private",
      "State": "IA",
      "State Population": "3160553",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Ursinus College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî all campuses",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Link"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî¬†Dixie State University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî¬†Salt Lake Community College",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Snow College",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Southern Utah University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî University of Utah",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Utah State University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Utah Valley University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Utah System of Higher Education ‚Äî Weber State University",
      "Control": "Public",
      "State": "UT",
      "State Population": "3159345"
      },
      {
      "Institution": "Valencia College",
      "Control": "Public",
      "State": "FL",
      "State Population": "21312211",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Valparaiso University",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Vanderbilt University",
      "Control": "Private",
      "State": "TN",
      "State Population": "6782564",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Vanguard University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Vassar College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Vermont Technical College",
      "Control": "Public",
      "State": "VT",
      "State Population": "623960",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Villanova University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Vincennes University",
      "Control": "Public",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Virginia Commonwealth University",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Virginia Tech",
      "Control": "Public",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Virginia Wesleyan University",
      "Control": "Private",
      "State": "VA",
      "State Population": "8525660",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wabash College",
      "Control": "Private",
      "State": "IN",
      "State Population": "6699629",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wake Forest University",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Walsh University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Warren Wilson College",
      "Control": "Private",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washburn University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington & Jefferson College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington and Jefferson College",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Washington College",
      "Control": "Private",
      "State": "MD",
      "State Population": "6079602",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington State University",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washington University in St. Louis",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Washtenaw Community College",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wayland Baptist University",
      "Control": "Private",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wayne State University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Waynesburg University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Weatherford College",
      "Control": "Public",
      "State": "TX",
      "State Population": "28704330",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Webster University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wellesley College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wells College",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Wentworth Institute of Technology",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Wesley College",
      "Control": "Private",
      "State": "DE",
      "State Population": "971180",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Wesleyan University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Chester University",
      "Control": "Public",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "West Liberty University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Valley College",
      "Control": "Public",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      },
      {
      "Institution": "West Virginia State University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Virginia University",
      "Control": "Public",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "West Virginia Wesleyan College",
      "Control": "Private",
      "State": "WV",
      "State Population": "1803077",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Colorado University",
      "Control": "Public",
      "State": "CO",
      "State Population": "5684203",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Connecticut State University",
      "Control": "Public",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Illinois University",
      "Control": "Public",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Kentucky University",
      "Control": "Public",
      "State": "KY",
      "State Population": "4472265",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Michigan University",
      "Control": "Public",
      "State": "MI",
      "State Population": "9991177",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Nevada College",
      "Control": "Public",
      "State": "NV",
      "State Population": "3056824",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Western New England University",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Western Oregon University",
      "Control": "Public",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Western Washington University",
      "Control": "Public",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Westminster College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Westminster College (Penn.)",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Westminster College (Utah)",
      "Control": "Private",
      "State": "UT",
      "State Population": "3159345",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Westminster Theological Seminary (Philadelphia)",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Westmont College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wheaton College (Ill.)",
      "Control": "Private ",
      "State": "IL",
      "State Population": "12768320",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wheaton College (Mass.)",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Whitworth University",
      "Control": "Private",
      "State": "WA",
      "State Population": "7530552",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wichita State University",
      "Control": "Public",
      "State": "KS",
      "State Population": "2918515",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Widener University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "Wilkes University",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Willamette University",
      "Control": "Private",
      "State": "OR",
      "State Population": "4199563",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "William Jessup University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "William Jewell College",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "William Woods University",
      "Control": "Private",
      "State": "MO",
      "State Population": "6135888",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Williams Baptist University",
      "Control": "Private",
      "State": "AR",
      "State Population": "3020327",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Williams College",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wilmington University",
      "Control": "Private",
      "State": "DE",
      "State Population": "971180",
      "Plan": "Planning for online"
      },
      {
      "Institution": "Winona State University",
      "Control": "Public",
      "State": "MN",
      "State Population": "5628162",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Winston-Salem State University",
      "Control": "Public",
      "State": "NC",
      "State Population": "10390149",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Winthrop University",
      "Control": "Public",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wittenberg University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Wofford College",
      "Control": "Private",
      "State": "SC",
      "State Population": "5088916",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Woodbury University",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Worcester Polytechnic Institute",
      "Control": "Private",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Worcester State University",
      "Control": "Public",
      "State": "MA",
      "State Population": "6895917",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Wright State Unviersity",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Waiting to decide"
      },
      {
      "Institution": "Xavier University",
      "Control": "Private",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Xavier University of Louisiana",
      "Control": "Private",
      "State": "LA",
      "State Population": "4682509",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Yale University",
      "Control": "Private",
      "State": "CT",
      "State Population": "3588683",
      "Plan": "Proposing a hybrid model"
      },
      {
      "Institution": "Yeshiva University",
      "Control": "Private",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Considering a range of scenarios"
      },
      {
      "Institution": "York College",
      "Control": "Public",
      "State": "NY",
      "State Population": "19862512",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "York College of Pennsylvania",
      "Control": "Private",
      "State": "PA",
      "State Population": "12823989",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Youngstown State University",
      "Control": "Public",
      "State": "OH",
      "State Population": "11694664",
      "Plan": "Planning for in-person"
      },
      {
      "Institution": "Zaytuna College",
      "Control": "Private",
      "State": "CA",
      "State Population": "39776830",
      "Plan": "Planning for online"
      }
      ]
    for (var i = 0; i < collegeData.length; i++) {
      if (collegeData[i].Institution === this.state.collegeName) {
        const schoolData = collegeData[i]

        //VARIABLES
        const statePopulation = schoolData["State Population"]
        const SF = this.calculateSF()
        const CF = this.calculateCF(schoolData["Control"])
        const PF = this.calculatePF(schoolData["Plan"])

        //Calculation
        var chance = (((positiveCases * 10) / statePopulation) * SF * CF * 100) + PF
        chance = chance.toFixed(2)
        chance = Math.min(chance, 100)
        console.log(`chance = (((${positiveCases} * 10) / ${statePopulation}) * ${SF} * ${CF} * 100) + ${PF}`)
        return chance
      }
    }
  }

  //Helper Functions
  isInt = (value) => {
    return !isNaN(value) && 
           parseInt(Number(value)) === value && 
           !isNaN(parseInt(value, 10));
  }

  calculateSF = () => {
    if (this.state.size < 2000) {
      return 0.4
    } else if (this.state.size < 8000) {
      return 0.6
    } else if (this.state.size < 15000) {
      return 1
    } else if (this.state.size < 30000) {
      return 1.5
    } else {
      return 2
    }
  }
  
  calculateCF = (control) => {
    if (control === "Private") {
      return 0.5
    } else {
      return 1
    }
  }

  calculatePF = (plan) => {
    if (plan === "Planning for in-person") {
      return 5
    } else if (plan === "Proposing a hybrid model") {
      return 10
    } else if (plan === "Planning for online") {
      return 100
    } else if (plan === "Considering a range of scenarios") {
      return 20
    } else if (plan === "Waiting to decide") {
      return 20
    } else {
      return 0
    }
  }

  //Modal Functions
  handleOpen = (displayText) => {
    this.setState({
      showModal: true,
      modalText: displayText
    })
  };

  handleClose = () => {
    this.setState({showModal: false})
  };

  renderModal = () => {
    if (this.state.showModal === false) {
      return;
    } else {
      return <Modal handler={this.handleClose} text={this.state.modalText}/>
    }
  }

  render() {

    const collegeNames = [
      'Abilene Christian University',
      'Academy of Art University',
      'Adelphi University',
      'Adrian College',
      'Agnes Scott College',
      'Alabama State University',
      'Albany College of Pharmacy and Health Sciences',
      'Albion College',
      'Alfred University',
      'Allan Hancock College',
      'Allegheny College',
      'Alma College',
      'American University',
      'Amherst College',
      'Andrews University',
      'Angelo State University',
      'Anne Arundel Community College',
      'Antioch College',
      'Appalachian Bible College',
      'Appalachian State University',
      'Aquinas College',
      'Arcadia University',
      'Arizona State University',
      'Arkansas State University',
      'Arkansas Tech University',
      'Asbury University',
      'Ashland University',
      'Assumption College',
      'Auburn University',
      'Auburn University at Montgomery',
      'Augsburg University',
      'Augusta University',
      'Augustana College',
      'Augustana University',
      'Austin College',
      'Austin Peay State University',
      'Averett University',
      'Avila University',
      'Azusa Pacific University',
      'Babson College',
      'Bakersfield College',
      'Ball State University',
      'Bard College',
      "Bard College at Simon's Rock",
      'Barnard College',
      'Barry University',
      'Bates College',
      'Bay Atlantic University',
      'Bay Path University',
      'Baylor University',
      'Beacon College',
      'Belhaven University',
      'Bellevue College',
      'Belmont Abbey College',
      'Belmont University',
      'Beloit College',
      'Bemidji State University',
      'Benedictine College',
      'Bennington College',
      'Bentley University',
      'Berkeley City College',
      'Berkeley College',
      'Berklee College of Music',
      'Bethany College',
      'Bethany College',
      'Bethel College',
      'Bethel University',
      'Binghamton University',
      'Biola University',
      'Bloomfield College',
      'Bloomsburg University',
      'Bluffton University',
      'Bob Jones University',
      'Boise State University',
      'Boston College',
      'Boston University',
      'Bowdoin College',
      'Bowling Green State University',
      'Bradley University',
      'Brandeis University',
      'Brevard College',
      'Brigham Young University',
      'Brown University',
      'Bryant University',
      'Bryn Mawr College',
      'Bryn Mawr College',
      'Bucknell University',
      'Buena Vista University',
      'Buffalo State College',
      'Butler University',
      'Butte College',
      'BYU - Hawaii',
      'Cabrini University',
      'California Baptist University',
      'California Institute of Technology',
      'California Institute of the Arts',
      'California Lutheran University',
      'California State University ‚Äî all system campuses',
      'California State University ‚Äî Bakersfield',
      'California State University ‚Äî Channel Islands',
      'California State University ‚Äî Chico',
      'California State University ‚Äî Dominguez Hills',
      'California State University ‚Äî East Bay',
      'California State University ‚Äî Fresno State',
      'California State University ‚Äî Fullerton',
      'California State University ‚Äî Humboldt',
      'California State University ‚Äî Long Beach',
      'California State University ‚Äî Los Angeles',
      'California State University ‚Äî Maritime Academy',
      'California State University ‚Äî Monterey Bay',
      'California State University ‚Äî Northridge',
      'California State University ‚Äî Polytechnic at Pomona',
      'California State University ‚Äî Polytechnic at San Luis Obispo',
      'California State University ‚Äî Sacramento',
      'California State University ‚Äî San Bernardino',
      'California State University ‚Äî San Diego State University',
      'California State University ‚Äî San Francisco State University',
      'California State University ‚Äî San Jos√© State University',
      'California State University ‚Äî San Marcos',
      'California State University ‚Äî Sonoma State University',
      'California State University ‚Äî Stanislaus',
      'California University of Pennsylvania',
      'Calvin University',
      'Cameron University',
      'Campbell University',
      'Ca√±ada College',
      'Cape Cod Community College',
      'Cape Fear Community College',
      'Capitol Technological University',
      'Carleton College',
      'Carlow University',
      'Carnegie Mellon University',
      'Carroll College',
      'Carroll University',
      'Carthage College',
      'Case Western Reserve University',
      'Castleton University',
      'Catholic University of America',
      'Cazenovia College',
      'Cedarville University',
      'Centenary University',
      'Central Christian College of the Bible',
      'Central Michigan University',
      'Central New Mexico Community College',
      'Central State University',
      'Centre College',
      'Chaffey College',
      'Chaminade University',
      'Champlain College',
      'Chapman University',
      'Charles R. Drew University of Medicine and Science',
      'Charleston Southern University',
      'Chatham University',
      'Chowan University',
      'Christian Brothers University',
      'Christopher Newport University',
      'Citrus College',
      'City College of San Francisco',
      'Claremont Colleges',
      'Clarion University of Pennsylvania',
      'Clark Atlanta University',
      'Clark University',
      'Clarke University',
      'Clemson University',
      'Cleveland Institute of Art',
      'Cleveland State University',
      'Coastal Carolina University',
      'Colby College',
      'Colby-Sawyer College',
      'Colgate University',
      'College for Creative Studies',
      'College of Alameda',
      'College of Idaho',
      'College of Marin',
      'College of New Jersey',
      'College of New Jersey',
      'College of Our Lady of the Elms',
      'College of Saint Benedict',
      'College of San Mateo',
      'College of the Atlantic',
      'College of the Desert',
      'College of the Holy Cross',
      'College of William & Mary ',
      'College of Wooster',
      'Colorado Christian University',
      'Colorado College',
      'Colorado Mesa University',
      'Colorado School of Mines',
      'Colorado State University',
      'Columbia College',
      'Columbia College',
      'Columbia College Chicago',
      'Columbia International University',
      'Columbia University',
      'Community College of Allegheny County',
      'Community College of Philadelphia',
      'Concord University',
      'Concordia College',
      'Concordia University Ann Arbor',
      'Concordia University Chicago',
      'Concordia University Irvine',
      'Concordia University Nebraska',
      'Concordia University St. Paul',
      'Concordia University Texas',
      'Concordia University Wisconsin',
      'Connecticut College',
      'Converse College',
      'Cooper Union',
      'Cornell College',
      'Cornell University',
      'Cornerstone University',
      'Cornish College of the Arts',
      'Cottey College',
      'Covenant College',
      'Crafton Hills College',
      'Creighton University',
      'Culinary Institute of America',
      'Cuyahoga Community College',
      'Cypress College',
      'Dabney S. Lancaster Community College',
      'Daemen College',
      'Dallas Baptist University',
      'Dallas County Community College District',
      'Dartmouth College',
      'Davenport University',
      'Davidson College',
      'De Anza College',
      'Denison University',
      'DePaul University',
      'DePauw University',
      'Diablo Valley College',
      'Dickinson College',
      'DigiPen Institute of Technology',
      'Doane University',
      'Dominican University ',
      'Dominican University of California',
      'Donnelly College',
      'Dordt University',
      'Drake University',
      'Drew University',
      'Drexel University',
      'Drury University',
      'Duke University',
      'Duquesne University',
      'Earlham College',
      'East Carolina University',
      'East Tennessee State University',
      'Eastern Connecticut State University',
      'Eastern Florida State College',
      'Eastern Illinois University',
      'Eastern Michigan University',
      'Eastern Nazarene College',
      'Eastern University',
      'Eastern Washington University',
      'Eckerd College',
      'Edinboro University',
      'Elmhurst College',
      'Elmira College',
      'Elon University',
      'Embry-Riddle Aeronautical University',
      'Embry-Riddle Aeronautical University',
      'Emerson College',
      'Emmanuel College Boston',
      'Emory & Henry College',
      'Emory University',
      'Emporia State University',
      'Evangel University',
      'Evergreen State College',
      'Evergreen Valley College',
      'Fairfield University',
      'Fairleigh Dickinson University',
      'Fairmont State University',
      'Faith Baptist Bible College',
      'Ferris State University',
      'Ferrum College',
      'Finlandia University',
      'Fisher College',
      'Florida Agricultural and Mechanical University',
      'Florida Institute of Technology',
      'Florida Southern College',
      'Florida State University',
      'Foothill College',
      'Fordham University',
      'Fort Hays State University',
      'Fort Lewis College',
      'Francis Marion University',
      'Franciscan University of Steubenville',
      'Franklin and Marshall College',
      'Franklin College',
      'Franklin Pierce University',
      'Fuller Theological Seminary',
      'Fullerton College',
      'Furman University',
      'Gallaudet University',
      'Gannon University',
      'Gardner-Webb University',
      'Gavilan College',
      'Geneva College',
      'George Fox University',
      'George Mason University',
      'George Washington University',
      'Georgetown University',
      'Gettysburg College',
      'Glendale Community College',
      'Gogebic Community College',
      'Gonzaga University',
      'Goshen College',
      'Goucher College',
      'Grace College',
      'Graceland University',
      'Graceland University',
      'Grand Rapids Community College',
      'Grand Valley State University',
      'Gratz College',
      'Great Basin College',
      'Grinnell College',
      'Grove City College',
      'Guiliford College',
      'Gustavus Adolphus College',
      'Hamilton College',
      'Hampden-Sydney College',
      'Hampshire College',
      'Hampton University',
      'Hanover College',
      'Harding University',
      'Harford Community College',
      'Hartnell College',
      'Harvard University',
      'Harvey Mudd College',
      'Hastings College',
      'Haverford College',
      'Hawaii Pacific University',
      'Heidelberg University',
      'Hendrix College',
      'High Point University',
      'Highline College',
      'Hilbert College',
      'Hillsdale College',
      'Hinds Community College',
      'Hiram College',
      'Hobart and WIlliam Smith Colleges',
      'Hodges University',
      'Hofstra University',
      'Hofstra University',
      'Hollins University',
      'Holy Cross College',
      'Hood College',
      'Hope College',
      'Hope International University',
      'Howard University',
      'Hudson County Community College',
      'Hult International Business School',
      'Huntingdon College',
      'Husson University',
      'Iliff School of Theology',
      'Illinois College',
      'Illinois Institute of Technology',
      'Illinois State University',
      'Immaculata University',
      'Indiana State University',
      'Indiana University',
      'Indiana University of Pennsylvania',
      'Iona College',
      'Iowa State University',
      'Ithaca College',
      'Ivy Tech Community College',
      'Jacksonville State University',
      'Jacksonville University',
      'James Madison University',
      'John Brown University',
      'John Carroll University',
      'Johns Hopkins University',
      'Johnson and Wales University',
      'Johnson University ‚Äî Florida',
      'Johnson University ‚Äî Tennessee',
      'Judson University',
      'Juilliard School',
      'Juniata College',
      'Kalamazoo College',
      'Kansas City Art Institute',
      'Kansas State University',
      'Kean University',
      'Kent State University',
      'Kenyon College',
      'Keuka College',
      "King's College",
      'Knox College',
      'La Roche University',
      'La Salle University',
      'Lafayette College',
      'LaGrange College',
      'Laguna College of Art and Design',
      'Lake Superior State University',
      'Lake-Sumter State College',
      'Lakeland University',
      'Lander University',
      'Laney College',
      'Lansing Community College',
      'Lawrence Technological University',
      ' target=_blank" rel="nofollow noopener noreferrer">Planning for in-person</a>',
      'Lawrence University',
      'LDS Business College',
      'Lee University',
      'Lehigh University',
      'LeTourneau University',
      'Lewis and Clark College',
      'Lewis College',
      'Lewis University',
      'Lewis-Clark State College',
      'Liberty University',
      'Life Pacific University',
      'Limestone College',
      'Lincoln University (Pa.)',
      'Lindenwood University',
      'Linfield College',
      'Lipscomb',
      'Lone Star College',
      'Longwood University',
      'Loras College',
      'Los Angeles Community College District ‚Äî all campuses',
      '‚ÄãLos Angeles Community College District ‚Äî East Los Angeles College',
      'Los Angeles Community College District ‚Äî Los Angeles City College',
      'Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Harbor College',
      '‚ÄãLos Angeles Community College District ‚Äî Los Angeles Mission College',
      'Los Angeles Community College District ‚Äî Los Angeles Pierce College',
      'Los Angeles Community College District ‚Äî Los Angeles ‚ÄãSouthwest College',
      'Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Trade-Tech College',
      'Los Angeles Community College District ‚Äî ‚ÄãLos Angeles Valley College',
      'Los Angeles Community College District ‚Äî West Los Angeles College',
      'Louisana State University',
      'Louisiana College',
      'Loyola Marymount University',
      'Loyola University Chicago',
      'Loyola University Maryland',
      'Loyola University New Orleans',
      'Lubbock Christian University',
      'Luther College',
      'Lycoming College',
      'Lynn University',
      'Lyon College',
      'Macalester College',
      'Madonna University',
      'Manhattan Area Technical College',
      'Manhattan College',
      'Manhattanville College',
      'Mansfield University',
      'Maranatha Baptist University',
      'Marietta College',
      'Marist College',
      'Marquette University',
      'Marshall University',
      'Mary Baldwin University',
      'Marymount Manhattan College',
      'Marymount University',
      'Maryville College',
      'Maryville University',
      'Massachusetts College of Pharmacy and Health Sciences',
      'Massachusetts Institute of Technology',
      'Massachusetts State Universities',
      'Massachusetts State Universities ‚Äî Bridgewater State University',
      'Massachusetts State Universities ‚Äî Fitchburg State University',
      'Massachusetts State Universities ‚Äî Framingham State University',
      'Massachusetts State Universities ‚Äî Massachusetts College of Art and Design',
      'Massachusetts State Universities ‚Äî Massachusetts College of Liberal Arts',
      'Massachusetts State Universities ‚Äî Massachusetts Maritime Academy',
      'Massachusetts State Universities ‚Äî Salem State University',
      'Massachusetts State Universities ‚Äî Westfield State University',
      'Massachusetts State Universities ‚Äî Worcester State University',
      "Master's University",
      'McDaniel College',
      'McMurry University',
      'Mendocino College',
      'Menlo College',
      'Mercer University',
      'Mercyhurst University',
      'Meredith College',
      'Merrimack College',
      'Merritt College',
      'Messiah College',
      'Methodist University',
      'Metropolitan Community College',
      'Metropolitan Community College at Kansas City',
      'Metropolitan State University',
      'Miami Dade College',
      'Miami University',
      'Michigan State University',
      'Michigan Technological University',
      'Mid-America Christian University',
      'Mid-Atlantic Christian University',
      'Middle Tennessee State University',
      'Middlebury College',
      'Midlands University',
      'Midwestern State University',
      'Millersville University',
      'Millikin University',
      'Millsaps College',
      'Milwaukee School of Engineering',
      'Minneapolis College of Art & Design',
      'Minnesota State University at Mankato',
      'Minnesota State University at Moorhead',
      'MiraCosta College',
      'Mission College',
      'Mississippi College',
      'Mississippi Gulf Coast Community College',
      'Mississippi Public Universities',
      'Mississippi Public Universities ‚Äî Alcorn State University',
      'Mississippi Public Universities ‚Äî Delta State University',
      'Mississippi Public Universities ‚Äî Jackson State University',
      'Mississippi Public Universities ‚Äî Mississippi State University',
      'Mississippi Public Universities ‚Äî Mississippi University for Women',
      'Mississippi Public Universities ‚Äî Mississippi Valley State University',
      'Mississippi Public Universities ‚Äî University of Mississippi',
      'Mississippi Public Universities ‚Äî University of Southern Mississippi',
      'Missouri Southern State University',
      'Missouri State University',
      'Missouri University of Science and Technology',
      'Missouri Western State University',
      'Montana State University at Billings',
      'Montana State University at Bozeman',
      'Montana Technological University',
      'Montclair State University',
      'Montgomery College',
      'Moravian College',
      ' target=_blank" rel="nofollow noopener noreferrer">Planning for in-person</a>',
      'Morehead State University',
      'Morehouse College',
      'Morgan State University',
      'Morningside College',
      'Mount Holyoke',
      'Mount St. Joseph University',
      "Mount St. Mary's University",
      'Mount Union University',
      'Murray State University',
      'Nazareth College',
      'campus-college-experience-in-fall-2020" target="_blank" rel="nofollow noopener noreferrer">Planning for in-person</a>',
      'Nebraska State College System',
      'Nebraska State College System ‚Äì Chadron State College',
      'Nebraska State College System ‚Äì Peru State College',
      'Nebraska State College System ‚Äì Wayne State College',
      'Nebraska Wesleyan University',
      'New College of Florida',
      'New England College',
      'New England Conservatory',
      'New Jersey Institute of Technology',
      'New Mexico State University',
      'New River Community and Technical College',
      'New School',
      'New York Film Academy',
      'New York Institute of Technology',
      'New York University',
      'Newberry College',
      'Niagara University',
      'North Carolina A&T State University',
      'North Carolina Central University',
      'North Carolina State University',
      'North Central College',
      'North Dakota University system ‚Äî all campuses',
      'North Dakota University system ‚Äî Bismarck State College',
      'North Dakota University system ‚Äî Dakota College at Bottineau',
      'North Dakota University system ‚Äî Dickinson State University',
      'North Dakota University system ‚Äî Lake Region State College',
      'North Dakota University system ‚Äî Mayville State University',
      'North Dakota University system ‚Äî Minot State University',
      'North Dakota University system ‚Äî North Dakota State College of Science',
      'North Dakota University system ‚Äî North Dakota State University',
      'North Dakota University system ‚Äî University of North Dakota',
      'North Dakota University system ‚Äî Valley City State University',
      'North Dakota University system ‚Äî Williston State College',
      'North Park University',
      'Northampton Community College',
      'Northeast Wisconsin Technical College',
      'Northeastern Illinois University',
      'Northeastern State University',
      'Northeastern University',
      'Northern Arizona University',
      'Northern Illinois University',
      'Northern Illinois University',
      'Northern Kentucky University',
      'Northern Michigan University',
      'Northern Vermont University',
      'Northern Virginia Community College',
      'Northwest Missouri State University',
      'Northwest Nazarene University',
      'Northwestern College',
      'Northwestern University',
      'Norwich University',
      'Notre Dame of Maryland University',
      'Nova Southeastern University',
      'Oakland City University',
      'Oakland Community College',
      'Oakland University',
      'Oakwood Universlty',
      'Oberlin College',
      'Occidental College',
      'Ohio Dominican University',
      'Ohio Northern University',
      'Ohio State University',
      'Ohio University',
      'Ohio Wesleyan University',
      'Oklahoma Panhandle State University',
      'Oklahoma State University',
      'Old Dominion University',
      'Oral Roberts University',
      'Oregon Institute of Technology',
      'Oregon State University',
      'Otterbein University',
      'Ouachita Baptist University',
      'Pace University',
      'Pacific Lutheran University',
      'Pacific Northwest College of Art',
      'Pacific School of Religion',
      'Pacific University',
      'Palm Beach Atlantic University',
      'Palomar College',
      'Pennsylvania State University',
      'Pepperdine University',
      'Pittsburg State University',
      'Pittsburgh Technical College',
      'Plymouth State University',
      'Point Loma Nazarene University',
      'Point Park University',
      'Pomona College',
      'Portland Community College',
      'Portland State University',
      'Post University',
      'Prairie View A&M University',
      'Pratt Institute',
      'Presbyterian College',
      'Prescott College',
      "Prince George's Community College",
      'Princeton University',
      'Providence Christian College',
      'Purdue University',
      'Purdue University Fort Wayne',
      'Queens University of Charlotte',
      'Quincy University',
      'Quinnipiac University',
      'Radford University',
      'Randolph College',
      'Randolph-Macon College',
      'Reed College',
      'Reformed Theological Seminary',
      'Regis College',
      'Regis University',
      'Rensselaer Polytechnic Institute',
      'Rhode Island School of Design',
      'Rhodes College',
      'Rice University',
      'Rider University',
      'Roanoke College',
      'Robert Morris University',
      'Roberts Wesleyan College',
      'Rochester Institute of Technology',
      'Rockhurst University',
      'Roger Williams University',
      'Rollins College',
      'Roosevelt University',
      'Rose-Hulman Institute of Technology',
      'Rosemont College',
      'Rowan University',
      'Rutgers University',
      'Sacred Heart University',
      "Sain Mary's University",
      'Saint Anselm College',
      'Saint Francis University',
      "Saint John's University",
      'Saint Lawrence University',
      'Saint Leo University',
      'Saint Mary-of-the-Woods College',
      "Saint Mary's College",
      "Saint Mary's College of California",
      "Saint Mary's University of Minnesota",
      'Saint Norbert College',
      'Salem University',
      'Samford University',
      'San Bernardino Valley College',
      'San Diego Miramar College',
      'San Jacinto College',
      'San Jose City College',
      'Santa Clara University',
      'Santa Monica College',
      'Santa Rosa Junior College',
      'Sarah Lawrence College',
      'Savannah College of Art and Design',
      'School of Visual Arts',
      'Schreiner University',
      'Scripps College',
      'Seattle Pacific University',
      'Seattle University',
      'Seton Hall University',
      'Seton Hill University',
      'Sewanee: The University of the South',
      'Shenandoah University',
      'Shepherd University',
      'Siena College',
      'Siena Heights University',
      'Sierra College',
      'Simmons University',
      'Simpson College',
      'Simpson University',
      'Skidmore College',
      'Skyline College',
      'Slippery Rock University',
      'Slippery Rock University',
      'Smith College',
      'Soka University of America',
      'South Dakota Board of Regents',
      'South Dakota Board of Regents ‚Äî Black Hills State University',
      'South Dakota Board of Regents ‚Äî Dakota State University',
      'South Dakota Board of Regents ‚Äî Northern State University',
      'South Dakota Board of Regents ‚Äî South Dakota School of Mines and Technology',
      'South Dakota Board of Regents ‚Äî South Dakota State University',
      'South Dakota Board of Regents ‚Äî University of South Dakota',
      'Southeast Missouri State University',
      'Southeastern Baptist Theological Seminary',
      'Southeastern Oklahoma State University',
      'Southern Adventist University ',
      'Southern Illinois University',
      'Southern Methodist University',
      'Southern Nazarene University',
      'Southern New Hampshire University',
      'Southern Wesleyan University',
      'Southwest Baptist University',
      'Southwest Minnesota State University',
      'Southwestern Assemblies of God University',
      'Southwestern Baptist Theological Seminary',
      'Southwestern Oklahoma State University',
      'Southwestern University',
      'Spelman College',
      'Spring Arbor University',
      'Springfield College',
      'St. Bonaventure University',
      'St. Cloud State University',
      'St. Francis College',
      'St. John Fisher College',
      "St. John's University",
      'St. Lawrence University',
      'St. Louis University',
      "St. Mary's College of Maryland",
      'St. Mary‚Äôs College of California',
      "St. Michael's College",
      'St. Olaf College',
      'St. Thomas University',
      'St. Vincent College',
      'Stanford University',
      'Stark State College',
      'State University of New York at Cortland',
      'Stephen F. Austin State University',
      'Sterling College',
      'Stetson University',
      'Stevens Institute of Technology',
      'Stockton University',
      'Stonehill College',
      'Stony Brook University',
      'Suffolk University',
      'Susquehanna University',
      'Swarthmore College',
      'Sweet Briar College',
      'Syracuse University',
      'Taylor University',
      'Temple University',
      'Tennessee State University',
      'Tennessee Technological University',
      'Texas A&M University system ‚Äî all campuses',
      'Texas A&M University system ‚Äî Central Texas',
      'Texas A&M University system ‚Äî Commerce',
      'Texas A&M University system ‚Äî Corpus Christi',
      'Texas A&M University system ‚Äî International University',
      'Texas A&M University system ‚Äî Kingsville',
      'Texas A&M University system ‚Äî Prairie View A&M University ',
      'Texas A&M University system ‚Äî San Antonio',
      'Texas A&M University system ‚Äî Tarleton State University',
      'Texas A&M University system ‚Äî Texarkana',
      'Texas A&M University system ‚Äî Texas A&M University ',
      'Texas A&M University system ‚Äî West Texas A & M University ',
      'Texas Christian University',
      'Texas State University system',
      'Texas State University system ‚Äî Lamar Institute of Technology',
      'Texas State University system ‚Äî Lamar State College Orange',
      'Texas State University system ‚Äî Lamar State College Port Arthur',
      'Texas State University system ‚Äî Lamar University',
      'Texas State University system ‚Äî Sam Houston State University',
      'Texas State University system ‚Äî Sul Ross State University',
      'Texas State University system ‚Äî Texas State University',
      'Texas Tech University',
      'Texas Wesleyan University',
      "Texas Woman's University",
      'The Baptist College of Florida',
      'Thiel College',
      'Thomas Jefferson University',
      'Tidewater Community College',
      'Tompkins Cortland Community College',
      'Transylvania University',
      'Trevecca Nazarene University',
      'Trine University',
      'Trinity College',
      'Trinity College',
      'Trinity University',
      'Trinity Washington University',
      'Troy University',
      'Tufts University',
      'Tulane University',
      'Tulsa Community College',
      'Union College',
      'Union University',
      'University at Buffalo',
      'University of Akron',
      'University of Alabama ‚Äî all system campuses',
      'University of Alabama at Birmingham',
      'University of Alabama at Huntsville',
      'University of Alabama at Tuscaloosa',
      'University of Alaska at Anchorage',
      'University of Alaska at Fairbanks',
      'University of Arizona',
      'University of Arkansas ‚Äî all system campuses',
      'University of Arkansas at Fayetteville',
      'University of Arkansas at Fort Smith',
      'University of Arkansas at Little Rock',
      'University of Bridgeport',
      'University of California at Berkeley',
      'University of California at Davis',
      'University of California at Irvine',
      'University of California at Los Angeles',
      'University of California at Riverside',
      'University of California at San Diego',
      'University of California at Santa Barbara',
      'University of California at Santa Cruz',
      'University of Central Arkansas',
      'University of Central Florida',
      'University of Central Missouri',
      'University of Central Oklahoma',
      'University of Charleston',
      'University of Chicago',
      'University of Cincinnati',
      'University of Colorado at Boulder',
      'University of Colorado at Denver',
      'University of Connecticut',
      'University of Dallas',
      'University of Dayton',
      'University of Delaware',
      'University of Denver',
      'University of Detroit Mercy',
      'University of Evansville',
      'University of Findlay',
      'University of Florida',
      'University of Hartford',
      'University of Hawaii',
      'University of Hawaii at Manoa',
      'University of Houston',
      'University of Idaho',
      'University of Illinois at Chicago',
      'University of Illinois at Springfield',
      'University of Illinois at Urbana-Champaign',
      'University of Indianapolis',
      'University of Iowa',
      'University of Kansas',
      'University of Kentucky',
      'University of La Verne',
      'University of Louisiana system',
      'University of Louisiana system ‚Äî Grambling State University',
      'University of Louisiana system ‚Äî Louisiana Tech University',
      'University of Louisiana system ‚Äî McNeese State University',
      'University of Louisiana system ‚Äî Nicholls State University',
      'University of Louisiana system ‚Äî Northwestern State University',
      'University of Louisiana system ‚Äî Southeastern Louisiana University',
      'University of Louisiana system ‚Äî University of Louisiana at Lafayette',
      'University of Louisiana system ‚Äî University of Louisiana at Monroe',
      'University of Louisiana system ‚Äî University of New Orleans',
      'University of Louisville',
      'University of Lynchburg',
      'University of Maine ‚Äî all system campuses',
      'University of Maine ‚Äî Augusta',
      'University of Maine ‚Äî Farmington',
      'University of Maine ‚Äî Fort Kent',
      'University of Maine ‚Äî Machias',
      'University of Maine ‚Äî Presque Isle',
      'University of Maine ‚Äî University of Southern Maine',
      'University of Mary',
      'University of Mary Hardin-Baylor',
      'University of Mary Washington',
      'University of Massachusetts at Amherst',
      'University of Massachusetts at Boston',
      'University of Massachusetts at Dartmouth',
      'University of Massachusetts at Lowell',
      'University of Memphis',
      'University of Miami',
      'University of Michigan at Ann Arbor',
      'University of Michigan at Dearborn',
      'University of Michigan at Flint',
      'University of Minnesota',
      'University of Missouri',
      'University of Missouri at Kansas City',
      'University of Missouri at Kansas City',
      'University of Mobile',
      'University of Montana',
      'University of Montevallo',
      'University of Nebraska ‚Äî all system campuses',
      'University of Nebraska ‚Äî Kearney',
      'University of Nebraska ‚Äî Lincoln',
      'University of Nebraska ‚Äî Omaha',
      'University of Nevada, Las Vegas',
      'University of Nevada, Reno',
      'University of New England',
      'University of New Hampshire',
      'University of New Haven',
      'University of New Mexico',
      'University of North Carolina at Asheville',
      'University of North Carolina at Chapel Hill',
      'University of North Carolina at Charlotte',
      'University of North Carolina at Greensboro',
      'University of North Carolina at Pembroke',
      'University of North Carolina School of the Arts',
      'University of North Texas',
      'University of Northern Colorado',
      'University of Northern Iowa',
      'University of Northwestern ‚Äì St. Paul',
      'University of Noth Alabama',
      'University of Notre Dame',
      'University of Oklahoma',
      'University of Oregon',
      'University of Pennsylvania',
      'University of Pittsburgh',
      'University of Portland',
      'University of Puget Sound',
      'University of Redlands',
      'University of Rhode Island',
      'University of Richmond',
      'University of Rochester',
      'University of Saint Francis',
      'University of San Diego',
      'University of San Francisco',
      'University of Scranton',
      'University of South Alabama',
      'University of South Carolina',
      "'University of South Florida",
      'University of Southern California',
      'University of Southern Indiana',
      'University of St. Thomas (Minnesota)',
      'University of Tampa',
      'University of Tennessee system',
      'University of Tennessee system ‚Äî Chattanooga',
      'University of Tennessee system ‚Äî Knoxville',
      'University of Tennessee system ‚Äî Martin',
      'University of Texas ‚Äî all system campuses',
      'University of Texas ‚Äî Permian Basin',
      'University of Texas ‚Äî Rio Grande Valley',
      'University of Texas at Arlington',
      'University of Texas at Austin',
      'University of Texas at Dallas',
      'University of Texas at El Paso',
      'University of Texas at San Antonio',
      'University of Texas at Tyler',
      'University of the Cumberlands',
      'University of the District of Columbia',
      'University of the Pacific',
      'University of the Sciences',
      'University of Toledo',
      'University of Tulsa',
      'University of Vermont',
      'University of Virginia',
      'University of Washington',
      'University of West Alabama',
      'University of West Florida',
      'University of Wisconsin at Eau Claire',
      'University of Wisconsin at Green Bay',
      'University of Wisconsin at Madison',
      'University of Wisconsin at Milwaukee',
      'University of Wisconsin at River Falls',
      'University of Wisconsin at Whitewater',
      'University of Wisconsin-Stout',
      'University of Wyoming',
      'University System of Georgia',
      'University System of Georgia ‚Äî Abraham Baldwin Agricultural College',
      'University System of Georgia ‚Äî Albany State University',
      'University System of Georgia ‚Äî Atlanta Metropolitan State College',
      'University System of Georgia ‚Äî Augusta University',
      'University System of Georgia ‚Äî Clayton State University',
      'University System of Georgia ‚Äî College of Coastal Georgia',
      'University System of Georgia ‚Äî Columbus State University',
      'University System of Georgia ‚Äî Dalton State College',
      'University System of Georgia ‚Äî East Georgia State College',
      'University System of Georgia ‚Äî Fort Valley State University',
      'University System of Georgia ‚Äî Georgia Gwinnett College',
      'University System of Georgia ‚Äî Georgia Highlands College',
      'University System of Georgia ‚Äî Georgia Institute of Technology',
      'University System of Georgia ‚Äî Georgia Southern University',
      'University System of Georgia ‚Äî Georgia Southwestern State University',
      'University System of Georgia ‚Äî Georgia State University',
      'University System of Georgia ‚Äî Gordon State College',
      'University System of Georgia ‚Äî Kennesaw State University',
      'University System of Georgia ‚Äî Middle Georgia State University',
      'University System of Georgia ‚Äî Savannah State University',
      'University System of Georgia ‚Äî South Georgia State College',
      'University System of Georgia ‚Äî University of Georgia',
      'University System of Georgia ‚Äî University of North Georgia',
      'University System of Georgia ‚Äî University of West Georgia',
      'University System of Georgia ‚Äî Valdosta State University',
      'University System of Maryland',
      'University System of Maryland ‚Äî Bowie State University',
      'University System of Maryland ‚Äî Coppin State University',
      'University System of Maryland ‚Äî Frostburg State University',
      'University System of Maryland ‚Äî Salisbury University',
      'University System of Maryland ‚Äî Towson University',
      'University System of Maryland ‚Äî University of Baltimore',
      'University System of Maryland ‚Äî University of Maryland at College Park',
      'University System of Maryland ‚Äî University of Maryland, Baltimore County',
      'University System of Maryland ‚Äî University of Maryland, Eastern Shore',
      'Upper Iowa University',
      'Ursinus College',
      'Utah System of Higher Education ‚Äî all campuses',
      'Utah System of Higher Education ‚Äî¬†Dixie State University',
      'Utah System of Higher Education ‚Äî¬†Salt Lake Community College',
      'Utah System of Higher Education ‚Äî Snow College',
      'Utah System of Higher Education ‚Äî Southern Utah University',
      'Utah System of Higher Education ‚Äî University of Utah',
      'Utah System of Higher Education ‚Äî Utah State University',
      'Utah System of Higher Education ‚Äî Utah Valley University',
      'Utah System of Higher Education ‚Äî Weber State University',
      'Valencia College',
      'Valparaiso University',
      'Vanderbilt University',
      'Vanguard University',
      'Vassar College',
      'Vermont Technical College',
      'Villanova University',
      'Vincennes University',
      'Virginia Commonwealth University',
      'Virginia Tech',
      'Virginia Wesleyan University',
      'Wabash College',
      'Wake Forest University',
      'Walsh University',
      'Warren Wilson College',
      'Washburn University',
      'Washington & Jefferson College',
      'Washington and Jefferson College',
      'Washington College',
      'Washington State University',
      'Washington University in St. Louis',
      'Washtenaw Community College',
      'Wayland Baptist University',
      'Wayne State University',
      'Waynesburg University',
      'Weatherford College',
      'Webster University',
      'Wellesley College',
      'Wells College',
      'Wentworth Institute of Technology',
      'Wesley College',
      'Wesleyan University',
      'West Chester University',
      'West Liberty University',
      'West Valley College',
      'West Virginia State University',
      'West Virginia University',
      'West Virginia Wesleyan College',
      'Western Colorado University',
      'Western Connecticut State University',
      'Western Illinois University',
      'Western Kentucky University',
      'Western Michigan University',
      'Western Nevada College',
      'Western New England University',
      'Western Oregon University',
      'Western Washington University',
      'Westminster College',
      'Westminster College (Penn.)',
      'Westminster College (Utah)',
      'Westminster Theological Seminary (Philadelphia)',
      'Westmont College',
      'Wheaton College (Ill.)',
      'Wheaton College (Mass.)',
      'Whitworth University',
      'Wichita State University',
      'Widener University',
      'Wilkes University',
      'Willamette University',
      'William Jessup University',
      'William Jewell College',
      'William Woods University',
      'Williams Baptist University',
      'Williams College',
      'Wilmington University',
      'Winona State University',
      'Winston-Salem State University',
      'Winthrop University',
      'Wittenberg University',
      'Wofford College',
      'Woodbury University',
      'Worcester Polytechnic Institute',
      'Worcester State University',
      'Wright State Unviersity',
      'Xavier University',
      'Xavier University of Louisiana',
      'Yale University',
      'Yeshiva University',
      'York College',
      'York College of Pennsylvania',
      'Youngstown State University',
      'Zaytuna College',

    ];

    return (
      <div className="hero">
          <div className="infoDiv">
            <Autocomplete
              id="combo-box-demo"
              options={collegeNames}
              renderInput={(params) => <TextField {...params} label="Enter college name" variant="outlined" />}
              onChange={(event, value) => this.handleNameChange(value)}
            />
            <TextField id="outlined-basic" label="Size of school" variant="outlined" value={this.state.email} onChange={this.handleSizeChange}/>
            <Button variant="contained" className="welcomeButton" onClick={this.handleButtonClicked}>Calculate</Button>
          </div>
          {this.renderModal()}
      </div>
    );
  }
}

export default Hero;