import React,  { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import Topbar from './Topbar';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const backgroundShape = require('../images/shape.svg');
class Home extends Component {
      render() {
        const { classes } = this.props;
        return (
          <React.Fragment>
          <CssBaseline />
          <Topbar />
          <div>
          <Carousel>
          <Carousel.Item alignItems='left'>
            <img
              className="d-block w-100 h-100" width={900} height={500}
              src="https://plaquepsoriasis.com/wp-content/uploads/2017/10/8139-2.gif"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100" width={900} height={500}
              src="https://healthtechmagazine.net/sites/healthtechmagazine.net/files/styles/cdw_hero/public/articles/HealthTech/201705/HT_Telemedicine_States_ThinkstockPhotos-483607202.jpg?itok=oR7P2P1V"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="http://eclinicalforum.org/Portals/0/EasyDNNnews/71/img-services-fade.jpg"
            />
            </Carousel.Item>
        </Carousel>
          </div>
          <Container><Row style={{padding:50,backgroundColor:"white"}}>
          <Col><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://bits-his.com/img/doctors_hwty.svg" width="400" height="200" />
            </Card></Col>
            <Col></Col>
            <Col style={{ float:"left" }}><Card style={{ width: '18rem'}}>
              <Card.Body>
                <Card.Title>What is Health India?</Card.Title>
                <Card.Text>
                Health India is an Aadhar based Electronic Health Records Monitoring System powered by IHO(Indian Health Organization) and Unique Identification Authority of India (UIDAI).
                </Card.Text>
              </Card.Body>
            </Card></Col>
            </Row></Container>
          
            <Row style={{paddingTop:50,paddingLeft:150,paddingBottom:50,backgroundColor:"gray"}}>
            <Col style={{ float:"left" }}><Card style={{ width: '18rem'}}>
              <Card.Body>
                <Card.Title>Manage your Patient data-flow with ease</Card.Title>
                <Card.Text>
                We provide a computer-based solution aimed at managing patient hospital/clinical and other related data in a timely, effective and efficient manner.
                </Card.Text>
              </Card.Body>
            </Card></Col>
            <Col></Col>
            <Col><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://bits-his.com/img/undraw_Data_points_ubvs.svg" width="400" height="200" />
            </Card></Col>
            </Row>
          <Row style={{paddingTop:70,paddingBottom:50}}>
            <Container>
              <Row>
              <Col md={{ span: 4, offset: 4 }}><h5>Who's going to use Health India?</h5></Col>
              </Row>
              <Row style={{padding:50}}></Row>
              <Row>
              <Col><Card><Card.Title style={{textAlign:"center"}}>Doctor</Card.Title><Card.Img variant="top" src="https://bits-his.com/img/doctors_hwty.svg" width="400" height="200" /></Card></Col>              
              <Col><Card><Card.Title style={{textAlign:"center"}}>Patient</Card.Title><Card.Img variant="top" src="https://bits-his.com/img/undraw_folder_39kl.svg" width="400" height="200" /></Card></Col>              
              <Col><Card><Card.Title style={{textAlign:"center"}}>Pharmacist</Card.Title><Card.Img variant="top" src="http://www.clipartguide.com/_named_clipart_images/0511-1201-0317-3734_pharmacist_preparing_prescription_medication__clipart_image.jpg" width="400" height="200" /></Card></Col>              
              <Col><Card><Card.Title style={{textAlign:"center"}}>UIDAI</Card.Title><Card.Img variant="top" src="https://uidai.gov.in/templates/tjbase/static/media/aadharlogo.png" width="400" height="200" /></Card></Col>              
              <Col><Card><Card.Title style={{textAlign:"center"}}>IHO</Card.Title><Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0oy6MRn2l5l1tGRPlDzfDjwmY49jZjV9LflzIiMTcUnZlqNt&s" width="400" height="200" /></Card></Col>              
              </Row>
            </Container>
          </Row>
          
            </React.Fragment>
        )}}
    
    export default withRouter(Home);
    
