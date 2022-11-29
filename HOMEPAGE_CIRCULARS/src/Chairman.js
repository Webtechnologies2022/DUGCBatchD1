import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import kle from './kle_logo.png';
import kle_cen from './KLES-Centenary-LOGO-PNG.png';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Coordinator=()=>
 {
    
    
    
  return (
    <div class='main'>
    {/* <div class='header'>

          <h1 class="text-center">Departmental Under Graduate Committee</h1>
          <h3 class="text-center">School of Computer Science and Engineering</h3>
          <h5 class="text-center">(For Academic Year 2022-23)</h5>
    </div> */}

<div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/images%2Fkle_logo.png038131b7-0aac-4895-b523-d38392596b57?alt=media&token=bcb36040-f746-4595-8f41-8c65658e202d"alt="Scholarship"class="img-fluid mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <b><h4 class="text-center1">Departmental Under Graduate Committee</h4></b>
                <h6 class="text-center2">School of Computer Science and Engineering</h6>
                <b><h7 class="text-center3">(For Academic Year 2022-23)</h7></b>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/images%2FKLES-Centenary-LOGO-PNG.png?alt=media&token=be5fa087-e568-461b-bb54-3876318d62ef" alt="" class="img-fluid mx-auto d-block float-xl-right float-lg-right float-md-right logoright"/>
            </div>
        </div>
    </div>

    <Tabs className="Tabs">
    <b><TabList>
         <Tab>Module1</Tab>
         <Tab>Module2</Tab>
         <Tab>Module3</Tab>
         <Tab>Module4</Tab>
         <Tab>Module5</Tab>
         <Tab>Module6</Tab>
         <Tab>Module8</Tab>
       </TabList></b>
       </Tabs>

    <div class="grid-container">
        <div class="grid-child1">
            

            <div class="divScroll">
                    <h4 class="text-left1">
                    <i aria-hidden="true"></i>View circulars here
                </h4>
              
                <a href="https://onedrive.live.com/edit.aspx?resid=457A57C6040541F1!656&ithint=file%2cdocx"><i class="fa fa-file"></i>  Meeting for Minor 1 marks approval : 1-10-2022</a><br></br>
                
    
            </div>     
        </div>

        <div class="grid-child1">
            

            <div class="divScroll">

        
            
       
            <h4 class="text-left1">
                    <i aria-hidden="true"></i>View minutes here
                </h4>
              
                <a href="https://onedrive.live.com/edit.aspx?resid=457A57C6040541F1!656&ithint=file%2cdocx"><i class="fa fa-file"></i>  Meeting for Minor 1 marks approval : 1-10-2022</a><br></br>
                
    
            </div>     
        </div>
    </div>

    
    </div>
   
    
  
         )
}
 

 export default Coordinator;