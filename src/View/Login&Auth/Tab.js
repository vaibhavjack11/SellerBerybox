import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from "./Login";
import Registration from "./Registration";
import facebook from "../../facebook.png";
import google from "../../google.jfif";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
    console.log("simple",props)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let matches= window.matchMedia("(max-width: 768px) and (min-width:10px)").matches
  console.log(matches)
  return (
  <>
    <div className="row">
    <div className={!matches?"col-2":"col-0"}></div>
    <div className={!matches?"card col-8":"card col-12"}>
    <div className="card-body">
    <div className={classes.root}  style={{backgroundColor:"#ecb2c0"}}>
    <div className="row text-center" >
      <AppBar position="static" style={{backgroundColor:"#0b3a6a"}}>
        <Tabs value={value} onChange={handleChange} aria-label="s#0b3a6aimple tabs example">
        
        .
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Registration" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      </div>
      <TabPanel value={value} index={0} >
        <Login {...props}
        >
        </Login>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Registration
        {...props}
        >

        </Registration>
      </TabPanel>
     
          </div>
          </div>
         </div>
       
         </div>
         <div className="row">
    <div className="col-2"></div>
    <div className="col-8">
           <div className="pt-3">________<b>Continue with</b> ________</div>
           </div></div>
           <div className="row">
    <div className="col-4"></div>
    <div className="col-2 ">
           <div className="pt-3"><img src={facebook}></img></div>
           </div>
           <div className="col-2">
           <div className="pt-3"><img src={google}></img></div>
           </div>
           </div>
           
           <div className="row">
    <div className="col-2"></div>
    <div className="col-8">
           <div className="pt-3 text-dark"><b>By Clicking Signin You Agree With BerryBox <i className="text-warning">Terms and Conditions</i> And <i className="text-warning">Google Privacy</i></b></div>
           </div></div>
           
           
           </>
  );
}
